const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const db = new sqlite3.Database('./TimeSync.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the TimeSync SQLite database.');
});

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(express.static('.'));

app.get('/', (req, res) => {
  res.redirect('/user.html');
});

// Add any new endpoints here
//Notes: Add CRUD functions

//Add New Users
app.post('/user', (req, res) => {
    const { username } = req.body;
    const sql = `INSERT INTO users (username) VALUES (?)`;
    db.run(sql, [username], function(err) {
      if (err) {
        return console.error(err.message);
      }
      res.send({ message: 'User added', id: this.lastID });
    });
  });

//Add Meeting
app.post('/meeting', (req, res) => {
    const { title, description } = req.body;
    const sql = `INSERT INTO meetings (Title, Description) VALUES (?, ?)`;
    db.run(sql, [title, description], function(err) {
      if (err) {
        return console.error(err.message);
      }
      res.send({ message: 'Meeting added', id: this.lastID });
    });
  });

//Add Group
app.post('/group', (req, res) => {
    console.log(req.body)
    const { title, description } = req.body;
    const sql = `INSERT INTO TeamsChannels (ChannelName, Description) VALUES (?, ?)`;
    db.run(sql, [title, description], function(err) {
      if (err) {
        return console.error(err.message);
      }
      res.send({ message: 'Group added', id: this.lastID });
    });
  });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
