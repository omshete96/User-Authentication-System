// lib/db.js
import mysql from 'mysql2/promise';

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',            // Replace with your MySQL username
    password: '@$#$#%#%##^#^',            // Replace with your MySQL password
    database: 'user_auth_db'
});

export default connection;
