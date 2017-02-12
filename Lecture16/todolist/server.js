/**
 * Created by championswimmer on 12/02/17.
 */

const express = require('express');
const app = express();
const db = require('./db');
const path = require('path');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.get('/todos/all', (req, res) => {


    db.fetchTasks(function (result) {
        console.log(result);
        res.send(result)
    });

});

app.post('/todos/add', (req, res) => {
    db.addNewTask(req.body.task, function (result) {
        res.send(result);
    })
});

app.post('/todos/edit', (req, res) => {

    console.log(req.body.taskid + " " + req.body.done);

    db.setTaskState(req.body.taskid, req.body.done,
        function(result) {
            res.send(result)
        }
    )
});

app.get('/all', (req,res) => {

    db.fetchTasks(function (result) {
        console.log(result);
        res.render("todolist", {todos: result})
    });

});
app.post('/todos/addtodo', (req, res) => {

    db.addNewTask(req.body.task, function (result) {
        res.redirect('/all');
    })
});

app.use('/', express.static(__dirname + "/public"));

app.listen(2351, () => {console.log('Started on 2351')});