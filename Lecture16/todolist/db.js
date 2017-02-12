/**
 * Created by championswimmer on 12/02/17.
 */

const mysql = require('mysql');

let dbconf = {
    host: 'localhost',
    user: 'userone',
    password: 'passone',
    database: 'newdb'
};

function addNewTask (task, done) {
    let conn = mysql.createConnection(dbconf);
    conn.connect();
    conn.query(
        "INSERT INTO todos SET ?",
        {task: task, done: false},
        function (err, result, fields) {
            done(result)
        }
    );
}

function fetchTasks(done) {
    let conn = mysql.createConnection(dbconf);
    conn.connect();


    conn.query(
        "SELECT * FROM todos",
        function (err, result, fields) {
            if (err) throw err;


            done(result);
        }
    );
}

module.exports = {
    fetchTasks, addNewTask
};