/**
 * Created by championswimmer on 12/02/17.
 */

const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/todos/all', (req, res) => {


    db.fetchTasks(function (result) {
        res.send(result)
    });

});

app.post('/todos/add', (req, res) => {
    db.addNewTask(req.body.task, function (result) {
        res.send(result);
    })
});

app.post('/todos/edit', (req, res) => {
    db.setTaskState(req.body.taskid, req.body.done,
        function(result) {
            res.send(result)
        }
    )
});

app.listen(2351, () => {console.log('Started on 2351')});