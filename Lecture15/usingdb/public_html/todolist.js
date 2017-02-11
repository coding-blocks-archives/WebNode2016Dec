/**
 * Created by championswimmer on 11/02/17.
 */


function getTodos () {

    $.get('todos/get', function (data) {
        console.log(data);
        let list = "";

        for (todo of data) {
            list += "<li>" + todo.task + "</li>"
        }

        $('#todolist').html(list);
    })

}
$(function () {

    getTodos();

});

