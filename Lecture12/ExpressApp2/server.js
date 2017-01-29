/**
 * Created by championswimmer on 29/01/17.
 */
const express = require('express');

const app  = express ();

let todolist = [];

app.use('/',
    express.static(__dirname +
        '/public_html'))

app.get('/addtodo', function(req, res) {
    todolist.push(req.query.todo);

    res.send(todolist)
});

app.get('/fetchtodos', function (req, res) {

    res.send(todolist)
});

app.get('/sample', function (req, res) {
    res.send("Sample Data")
});





app.listen(4444, function () {
    console.log("Server running on port 4444");
});
