const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const session = require('express-session');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(
  session({
    secret: 'your-secret-key', // Ganti dengan kunci rahasia yang aman
    resave: false,
    saveUninitialized: true,
  })
);

// Koneksi ke database MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Ganti dengan password MySQL Anda
  database: 'coffeess',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err, result) => {
    if (err) {
      console.error('Registration error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(201).json({ message: 'User registered successfully' });
    }
  });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, result) => {
    if (err) {
      console.error('Login error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else if (result.length > 0) {
      // Inisialisasi sesi jika belum ada
      if (!req.session.user) {
        req.session.user = {};
      }

      req.session.user.id = result[0].id;
      req.session.user.username = result[0].username;

      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  });
});

app.get('/api/check-login', (req, res) => {
  if (req.session && req.session.user) {
    console.log('Login status confirmed:', req.session.user.username);
    res.status(200).json({ isLoggedIn: true, user: req.session.user });
  } else {
    res.status(401).json({ isLoggedIn: false });
  }
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
