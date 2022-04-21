const mysql = require('mysql2');

// connect to a database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // SQL USERNAME
        user:'root',
        //PASSWORD
        password: 'Nn35746228495',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;