/**
 * Created by championswimmer on 11/02/17.
 */


function getTodos () {

    $.get('todos/get', function (data) {
        console.log(data);
        let list = "";

        for (todo of data) {
            list += "<li data-todoid='" + todo.id + "'>" + todo.task + "</li>"
        }

        $('#todolist').html(list);
    })

}

function doTodo(todoid) {
    $.post('todos/done',
        {id: todoid},
        function (data) {

        }
    )
}

$(function () {

    getTodos();

});

