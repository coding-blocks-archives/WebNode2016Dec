/**
 * Created by championswimmer on 15/01/17.
 */



$(function () {
    console.log('Window ready');

    var box = $('#box');
    var list = $('#todolist');



    $('#btn').click(function (ev) {
        console.log(ev);
        list.append("<li class='item'>" + box.val() + "</li>");

        $('.item').click(function () {
            $(this).css('textDecoration') == 'line-through' ?
                $(this).css('textDecoration', '') :
                $(this).css('textDecoration', 'line-through');

        });
    });



    // document.getElementById('btn').onclick = function () {
    //     console.log(document.getElementById('box').value)
    // }



});

