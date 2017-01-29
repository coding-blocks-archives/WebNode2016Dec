/**
 * Created by championswimmer on 29/01/17.
 */
const express = require('express');
const fs = require('fs');

const app  = express ();

let todolist = [];

function refreshTodoList () {
    fs.readFile("todos.json", (err, data) => {
        if (!err) {
            let dataArr = JSON.parse(data)
            if (typeof dataArr == "array")
                todolist = dataArr;
        }
    });
}

refreshTodoList();

app.use('/',
    express.static(__dirname +
        '/public_html'))

app.get('/addtodo', function(req, res) {
    todolist.push(req.query.todo);

    fs.writeFile("todos.json", JSON.stringify(todolist), (err) => {
        if (!err) {
            refreshTodoList();
            res.send(todolist);
        } else {
            res.send("Error saving todo")
        }
    });

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
