const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const connection = require('../config/db');
const saltRounds = 10;

exports.register = (req, res) => {
    const username = req.body.username;
    const password = bcrypt.hashSync(req.body.password, saltRounds);

    //generates a random 36 string id
    const id = uuidv4();

    //check if user already exists
    connection.query('SELECT * FROM users WHERE username = ?', [username], (error, results) => {
        if (error) {
            res.status(500).send({ error: error });
            return;
        }

        if (results.length > 0) {
            //the user already exists
            res.status(400).send({ error: 'Username is already taken. Please try a different one.' });
            return;
        }

        //if no user was found
        connection.query('INSERT INTO users SET ?', {id: id, username: username, password: password},
        (error, results, fields) => {
            if (error) {
                console.log(id, username, password);
                console.log(error);
                res.status(500).send({ error: error });
                return;
            }
            console.log(id, username, password);
            res.status(200).send({ success: 'User registered' });
        });
    });
};

exports.login = (req, res) => {
    const { username, password } = req.body;

    //check if user already exists
    connection.query('SELECT * FROM users WHERE username = ?', [username], (error, results) => {
        if (error) {
            console.log(username, password);
            console.log(error);
            res.status(500).send({ error: error });
            return;
        }

        if (results.length === 0) {
            //if the results' length is 0, that means the username doesn't exist
            res.status(400).send({ error: 'This username does not exist' });
            return;
        }

        const hashedPassword = results[0].password; //gets the hashed password stored in database
        const match = bcrypt.compareSync(password, hashedPassword); //Compare hashed password with plain text password

        if (match) {
            //passwords match
            res.status(200).send({ success: 'User logged in' });
            return;
        } else {
            //passwords do not match
            res.status(400).send({ error: 'Incorrect password' });
            return;
        }
    });
};