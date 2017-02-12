/**
 * Created by championswimmer on 12/02/17.
 */

function refreshTodos() {
    $.get('/todos/all', function (data) {
        let todolist = "";

        for (todo of data) {
            todolist += "<li>";
            todolist += "<input onchange='toggleTodo(this, "+ todo.id+")' type=checkbox " + (todo.done?"checked":"") + " >"
            todolist += "<span>" + todo.task + "</span>";
            todolist += "</li>"
        }

        $('#todolist').html(todolist)
    })
}

function toggleTodo(el, todoId) {
    var done = $(el).prop('checked');

    $(el).prop('checked', !done);

    $.post('/todos/edit',
        {taskid: todoId, done: (done ? 1 : 0)},
        function (data) {
        console.log(data, status);
            if (data && data.changedRows > 0) {
                $(el).prop('checked', done)
            }
        })
}


$(function () {

    refreshTodos();
});