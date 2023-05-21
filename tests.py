import unittest
from flask import Flask, session
import os
import sqlite3
from app import app

class AppTestCase(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()
        app.config['TESTING'] = True

        # Create or connect to the 'users.db' database
        self.users_conn = sqlite3.connect('users.db')
        self.users_c = self.users_conn.cursor()
        self.users_c.execute('''CREATE TABLE IF NOT EXISTS users
                              (id INTEGER PRIMARY KEY AUTOINCREMENT,
                              username TEXT UNIQUE NOT NULL,
                              password TEXT NOT NULL,
                              profile_pic_path TEXT)''')

        # Create or connect to the 'forum.db' database
        self.forum_conn = sqlite3.connect('forum.db')
        self.forum_c = self.forum_conn.cursor()
        self.forum_c.execute('''CREATE TABLE IF NOT EXISTS topics
                    (id INTEGER PRIMARY KEY AUTOINCREMENT,
                    title TEXT NOT NULL,
                    content TEXT NOT NULL,
                    user TEXT NOT NULL,
                    date TEXT NOT NULL)''')

        self.forum_c.execute('''
        CREATE TABLE IF NOT EXISTS responses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            topic_id INTEGER,
            response TEXT,
            author TEXT,
            date TEXT,
            FOREIGN KEY (topic_id) REFERENCES topics (id)
        )
        ''')


    def tearDown(self):
        self.users_conn.execute("DROP TABLE users")
        self.forum_conn.execute("DROP TABLE topics")
        self.forum_conn.execute("DROP TABLE responses")

    def test_homepage(self):
        response = self.app.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b"homepage", response.data)

    def test_valid_login(self):
        self.users_c.execute("INSERT INTO users (username, password) VALUES (?, ?)", ('testuser', 'password'))
        self.users_conn.commit()

        response = self.app.post('/login', data=dict(username='testuser', password='password'), follow_redirects=True)
        self.assertEqual(response.status_code, 200)

    def test_invalid_login(self):
        response = self.app.post('/login', data=dict(username='nonexistentuser', password='password'), follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        self.assertIn(b"Invalid username or password", response.data)

    def test_discussion(self):
        response = self.app.get('/discussion')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b"Discussion", response.data)

    def test_new_topic(self):
        with self.app.session_transaction() as sess:
            sess['username'] = 'testuser'

        response = self.app.post('/new_topic', data=dict(title='Test Topic', content='Test Content'), follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        self.assertIn(b"Discussion", response.data)

        self.forum_c.execute("SELECT * FROM topics WHERE title = ?", ('Test Topic',))
        topic = self.forum_c.fetchone()
        self.assertIsNotNone(topic)
        self.assertEqual(topic[1], 'Test Topic')

if __name__ == '__main__':
    unittest.main()
