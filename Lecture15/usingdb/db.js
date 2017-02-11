/**
 * Created by championswimmer on 11/02/17.
 */

const mysql = require('mysql');

const dbconf = {
    host: "localhost",
    user: "userone",
    password: "passone",
    database: "newdb"
};

function getAllTodos(done) {
    let conn = mysql.createConnection(dbconf);
    conn.connect();

    conn.query("SELECT * FROM todos", function (err, rows, fields) {
        if (err) throw err;

        done(rows);
    })
}

module.exports = {
    getAllTodos
};