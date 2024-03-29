from flask import Flask, render_template, request, redirect, url_for, session
import sqlite3
from datetime import datetime
import os


app = Flask(__name__, static_url_path='/static', static_folder='static')
app.secret_key = 'your_secret_key_here'

# Create SQLite3 database and table for user credential storage
conn = sqlite3.connect('users.db')
c = conn.cursor()
c.execute('''CREATE TABLE IF NOT EXISTS users
             (id INTEGER PRIMARY KEY AUTOINCREMENT,
             username TEXT UNIQUE NOT NULL,
             password TEXT NOT NULL,
             profile_pic_path TEXT)''')

# Routing to homepage
@app.route('/')
def homepage():
    return render_template("homepage.html")

# Routing to login page with user authentication
@app.route('/login', methods=['GET', 'POST'])
def login():
    # Get profile picture path
    path = os.getcwd()+'/static'+'/pfp'
    if not os.path.isdir(path):
        os.mkdir(path)
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        # Check if username and password match in the database
        conn = sqlite3.connect('users.db')
        c = conn.cursor()
        c.execute("SELECT * FROM users WHERE username = ? AND password = ?", (username, password))
        user = c.fetchone()
        conn.close()

        # If there's a match, redirect to homepage and update profile picture displayed
        if user:
            session['username'] = user[1]
            if user[3] == None or user[3] == "" or os.path.isfile(user[3]) == False:
                session['profile_pic_path'] = '/static'+'/pfp/'+'default.png'
            else:
                session['profile_pic_path'] = '/' + user[3]
            return redirect(url_for('homepage'))
        # Otherwise show an error and remain on login page
        else:
            return render_template('login.html', error='Invalid username or password. Please try again.')

    return render_template('login.html', error=None)

# Routing to registration page
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        conn = sqlite3.connect('users.db')
        c = conn.cursor()
        c.execute('''CREATE TABLE IF NOT EXISTS users
                     (id INTEGER PRIMARY KEY AUTOINCREMENT,
                     username TEXT UNIQUE NOT NULL,
                     password TEXT NOT NULL,
                     profile_pic_path TEXT)''')
        username = request.form['username']
        password = request.form['password']
        profile_pic = request.files['profile_pic']
        profile_pic_path = 'static'+'/pfp/'+profile_pic.filename
        if profile_pic.filename != "":
            profile_pic.save(profile_pic_path)

        # Check if username already exists in the database
        conn = sqlite3.connect('users.db')
        c = conn.cursor()
        c.execute("SELECT * FROM users WHERE username = ?", (username,))
        existing_user = c.fetchone()

        # If the username exists already, display an error and remain on registration page
        if existing_user:
            conn.close()
            return render_template('register.html', error='Username already exists. Please choose a different username.')
        # Otherwise redirect to
        else:
            c.execute("INSERT INTO users (username, password, profile_pic_path) VALUES (?, ?,?)", (username, password, profile_pic_path))
            conn.commit()
            conn.close()
            return redirect(url_for('login'))
    else:
        return render_template('register.html', error=None)



# Routing to forum page
@app.route('/discussion', methods=['GET'])
def discussion():

    # Retrieve existing topics from the database
    # Otherwise create SQLite3 database and table for topics
    conn = sqlite3.connect('forum.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS topics
                (id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                content TEXT NOT NULL,
                user TEXT NOT NULL,
                date TEXT NOT NULL)''')

    c.execute('''
    CREATE TABLE IF NOT EXISTS responses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        topic_id INTEGER,
        response TEXT,
        author TEXT,
        date TEXT,
        FOREIGN KEY (topic_id) REFERENCES topics (id)
    )
''')
    conn.commit()
    conn.close()

    # Get all discussion board data from forum database
    conn = sqlite3.connect('forum.db')
    c = conn.cursor()
    c.execute("SELECT * FROM topics")
    topics = c.fetchall()
    conn.close()

    # Render the discussion page template and pass the topics to it
    return render_template('discussion.html', topics=topics)

# Routing for discussion topics
@app.route('/topic/<int:topic_id>', methods=['GET', 'POST'])
def topic(topic_id):
    if request.method == 'POST':
        # Get the submitted response from the form
        response = request.form['response']

        # Insert the response into the database for the given topic
        if 'username' in session:
            username = session['username']
        date = datetime.now().strftime("%d/%m/%Y %H:%M")
        conn = sqlite3.connect('forum.db')
        c = conn.cursor()
        c.execute("INSERT INTO responses (topic_id, response,author,date) VALUES (?, ?,?,?)", (topic_id, response, username, date))
        conn.commit()
        conn.close()

    # Retrieve the topic and its responses from the database
    conn = sqlite3.connect('forum.db')
    c = conn.cursor()
    c.execute("SELECT * FROM topics WHERE id = ?", (topic_id,))
    topic = c.fetchone()

    c.execute("SELECT * FROM responses WHERE topic_id = ?", (topic_id,))
    responses = c.fetchall()

    conn.close()

    # Render the topic page template and pass the topic and responses to it
    return render_template('topic_template.html', topic=topic, responses=responses)

@app.route('/new_topic', methods=['GET', 'POST'])
def new_topic():
    if request.method == 'POST':
        # Get the submitted topic details from the form
        title = request.form['title']
        content = request.form['content']

        # Insert the new topic into the database
        con1 = sqlite3.connect('users.db')
        c = con1.cursor()

        if 'username' in session:
            username = session['username']
        conn = sqlite3.connect('forum.db')

        # Get timestamp for the post
        current_date = datetime.now().strftime("%d/%m/%Y %H:%M")

        c = conn.cursor()

        c.execute("INSERT INTO topics (title, content, user, date) VALUES (?, ?, ?,?)", (title, content, username, current_date))
        conn.commit()
        conn.close()

        # Redirect to the discussion page
        return redirect(url_for('discussion'))

    # Render the new topic page template
    return render_template('new_topic.html')

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('login'))

@app.route("/pricing")
def pricing():
    return render_template("pricing.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/ai-chat")
def aiChat():
    return render_template("chat.html")

if __name__ == '__main__':
    app.run(debug=True, port = 5001)
