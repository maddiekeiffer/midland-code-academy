require('dotenv').config();
const express = require('express');
const cors = require('cors');
// This package allows us to generate a random 36 string ID
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3006;
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

const passport = require('passport');
const LocalStragety = require('passport-local').Strategy;
const session = require('express-session');
//secret is the secret key to sign teh session cookie,
//resave saves the session to the store even if the session wasn't modified, 
//saveUnitialized saves it 
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

passport.use(
    new LocalStragety(function (username, password, done) {
        connection.query(
            "SELECT * FROM users WHERE username = ?",
            [username],
            function(err, user) {
                if(err) {
                    return done(err);
                }
                if(!user[0]) {
                    return done(null, false, {message: "Incorrect username"});
                }
                if(!bcrypt.compareSync(password, user[0].password)) {
                    return done(null, false, {message: "Incorrect password"});
                }
                return done(null, user[0]);
            }
        )
    })
)

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    connection.query(
        "SELECT * FROM users WHERE id = ?", 
        [id], 
        function(err, user) {
            done(err, user[0]);
        });
});

// We could combine register and login within a single endpoint,
// but we don't typically do that because 
// register/login are separate actions with different security implications.

app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = bcrypt.hashSync(req.body.password, saltRounds);
    // Generates a random 36 string id
    const id = uuidv4();

    // Check if the user already exists
    connection.query('SELECT * FROM users WHERE username = ?', [username], (error, results) => {
        if (error) {
            res.status(500).send({ error: error });
            return;
        }

        if (results.length > 0) {
            // The user already exists
            res.status(400).send({ error: 'Username is already taken' });
            return;
        }

        // If no user was found, we can create a new user
        connection.query('INSERT INTO users SET ?', {id: id, username: username, password: password},
        (error, results, fields) => {
            if (error) {
                console.log(id, username, password);
                console.log(error);
                res.status(500).send({ error: error });
                return;
            }
            
            console.log(id, username, password);
            res.status(200).send({ success: 'User registered'});
        });
    });
});

app.post('/login', passport.authenticate('local'), (req, res) => {
    res.status(200).send({ success: "User logged in" });
});

app.listen(port, () => {
    console.log("App listening at: " + port);
});

//ORIGINAL CODE FOR LOGIN WITHOUT PASSPORT: 
/* 
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Check if the user already exists
    connection.query('SELECT * FROM users WHERE username = ?', [username], (error, results) => {
        if (error) {
            console.log(username, password);
            console.log(error);
            res.status(500).send({ error: error });
            return;
        }
        if (results.length === 0) {
            // If the results' length is 0, that means the username doesn't exist
            res.status(400).send({ error: 'No user with this username exists' });
            return;
        }
        const hashedPassword = results[0].password;  // Get hashed password stored in the database
        const match = bcrypt.compareSync(password, hashedPassword);  // Compare hashed password with the plain text password
        if (match) {
            // Passwords match
            res.status(200).send({ success: 'User logged in'});
            return;
        } else {
            // Passwords don't match
            res.status(400).send({ error: 'Incorrect password' });
            return;
        }
    });
});
*/