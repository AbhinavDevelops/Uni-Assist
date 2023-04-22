from flask import Flask, render_template, request, redirect, url_for
import sqlite3

app = Flask(__name__, static_url_path='/static', static_folder='static')


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
def index():
    return render_template('login.html', error=None)

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
            return render_template("index.html", userId=user[0])
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

if __name__ == '__main__':
    app.run(debug=True)
