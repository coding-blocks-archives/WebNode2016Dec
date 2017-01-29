/**
 * Created by championswimmer on 29/01/17.
 */

$(function () {

    function refresh (data) {
        data.forEach(function (item, i) {
            data[i] = "<li>" + item + "</li>"
        });
        $('#todolist').html(data);
    }

    $('#addtodo').click(function () {

        $.get("/addtodo",
            {
            todo: $('#newtodo').val()
            },
            refresh
        )
    });

    $.get('/fetchtodos', refresh)

});
