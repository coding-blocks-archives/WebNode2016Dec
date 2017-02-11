/**
 * Created by championswimmer on 11/02/17.
 */
const express = require ('express');
const app  = express();
const db = require('./db');
const bodyParser = require('body-parser');

//todos = [{task: "one task"}, {task: "two task"}];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(__dirname + "/public_html"));

app.get('/todos/get', (req, res) => {
    db.getAllTodos(function (rows) {
        res.send(rows)
    });
});

app.post('/todos/done', (req, res) => {
    db.setTaskDone(req.body.id, function (rows) {
        res.send("Success")
    });
});


app.listen(3333, function () {
    console.log('app started on http://localhost:3333/');
});