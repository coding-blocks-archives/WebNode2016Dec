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
        conn.end();
    });
}
function setTaskDone(id, done) {
    let conn = mysql.createConnection(dbconf);
    conn.connect();

    conn.query("UPDATE todos SET done=1 WHERE id = " + id,
        function (err, rows, fields) {
            if (err) throw err;

            done(rows);
            conn.end();
    });
}

module.exports = {
    getAllTodos,
    setTaskDone
};