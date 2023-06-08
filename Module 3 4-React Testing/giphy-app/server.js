const express = require('express');
const cors = require('cors');
const app = express();
const port = 3006;
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'giphy_database'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = bcrypt.hashSync(req.body.password, saltRounds);
    const id = Math.floor(Math.random() * 11) + 1;

    connection.query('INSERT INTO users SET ?', {id: id, username: username, password: password},
    (error, results, fields) => {
        if (error) {
            console.log(id, username, password);
            console.log(error);
            res.status(500).send({ error: error });
            return;
        }
        res.status(200).send({ success: 'User logged in'});
    });
});

app.listen(port, () => {
    console.log("App listening at: " + port);
});