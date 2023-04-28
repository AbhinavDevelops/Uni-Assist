from flask import Flask, render_template, request, redirect, url_for, session
import sqlite3
from datetime import datetime

app = Flask(__name__, static_url_path='/static', static_folder='static')
app.secret_key = 'your_secret_key_here'


# Create SQLite3 database and table
conn = sqlite3.connect('users.db')
c = conn.cursor()
c.execute('''CREATE TABLE IF NOT EXISTS users
             (id INTEGER PRIMARY KEY AUTOINCREMENT,
             username TEXT NOT NULL,
             password TEXT NOT NULL)''')

# Add sample user data
sample_users = [('john', 'password123'), ('jane', 'myp@ssword')]
c.executemany("INSERT INTO users (username, password) VALUES (?, ?)", sample_users)

conn.commit()
conn.close()

@app.route('/')
def homepage():
    return render_template("homepage.html")


@app.route('/login')
def index():
    return render_template('login.html', error=None)



# Connect to the SQLite database
conn = sqlite3.connect('forum.db')
c = conn.cursor()


# Commit the changes and close the connection
conn.commit()
conn.close()


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        # Check if username and password match in the database
        conn = sqlite3.connect('users.db')
        c = conn.cursor()
        c.execute("SELECT * FROM users WHERE username = ? AND password = ?", (username, password))
        user = c.fetchone()
        conn.close()

        if user:
            
            session['username'] = user[1]
            return render_template("homepage.html", userId=user[0])
        else:
            return render_template('login.html', error='Invalid username or password. Please try again.')

    return render_template('login.html', error=None)


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        # Check if username already exists in the database
        conn = sqlite3.connect('users.db')
        c = conn.cursor()
        c.execute("SELECT * FROM users WHERE username = ?", (username,))
        existing_user = c.fetchone()

        if existing_user:
            conn.close()
            return render_template('register.html', error='Username already exists. Please choose a different username.')
        else:
            c.execute("INSERT INTO users (username, password) VALUES (?, ?)", (username, password))
            conn.commit()
            conn.close()
            return redirect(url_for('index'))
    else:
        return render_template('register.html', error=None)
    


# Forum routes and functions

@app.route('/discussion', methods=['GET'])
def discussion():
    # Retrieve existing topics from the database
    # Create SQLite3 database and table for topics
    # Create SQLite3 database and table for topics
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


    conn = sqlite3.connect('forum.db')
    c = conn.cursor()
    c.execute("SELECT * FROM topics")
    topics = c.fetchall()
    conn.close()
    
    # Render the discussion page template and pass the topics to it
    return render_template('discussion.html', topics=topics)

@app.route('/topic/<int:topic_id>', methods=['GET', 'POST'])
def topic(topic_id):
    if request.method == 'POST':
        # Get the submitted response from the form
        response = request.form['response']
        
        # Insert the response into the database for the given topic

        if 'username' in session:
            username = session['username']
        date = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
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
    return render_template('topic_template', topic=topic, responses=responses)

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

        current_date = datetime.now().strftime("%d/%m/%Y %H:%M:%S")

        c = conn.cursor()
    
        c.execute("INSERT INTO topics (title, content, user, date) VALUES (?, ?, ?,?)", (title, content, username, current_date))
        conn.commit()
        conn.close()
        
        # Redirect to the discussion page
        return redirect(url_for('discussion.html'))
    
    # Render the new topic page template
    return render_template('new_topic.html')


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
    app.run(debug=True)
