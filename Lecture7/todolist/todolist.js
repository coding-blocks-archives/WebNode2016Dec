/**
 * Created by championswimmer on 07/01/17.
 */

var todoList = localStorage.getItem("todos");
if (!todoList) {
    todoList = [];
    localStorage.setItem("todos", JSON.stringify(todoList));
}


window.onload = function () {
    refreshList();
    var addTodo = document.getElementById("addtodo"); //button
    var newTodo = document.getElementById("newtodo"); //text
    addTodo.onclick = function () {
        addNewTodo(newTodo.value);
        refreshList();
    }
};

function setDone(el) {
    console.log(el.checked);
    console.log(el.id);
    todoList[el.id].done = el.checked;
    localStorage.setItem("todos", JSON.stringify(todoList));
}

function refreshList () {
    // get data from todoList, show in ul
    todoList = JSON.parse(localStorage.getItem("todos"));
    var listData = "";
    for (var j = 0; j < todoList.length; j++) {
        var todo = todoList[j];
        listData += "<li> <input" +
            (todo.done? " checked": "") +
                " id='"+j+"' onchange='setDone(this)' type='checkbox'>" +
                todo.task +
                "</li>"

        // "<li> <input" +
        // (todo.done? " checked": "") +
        // " onchange='setDone(this)' id='" + j +"' type='checkbox'>" + todo.task + "</li>"
    }
    var list = document.getElementById("todolist");
    list.innerHTML = listData;
}

function addNewTodo(newTodo) {
    todoList.push({
        task: newTodo,
        done: false
    });
    localStorage.setItem("todos", JSON.stringify(todoList))
}

