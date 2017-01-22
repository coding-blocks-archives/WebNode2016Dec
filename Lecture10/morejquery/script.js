/**
 * Created by championswimmer on 22/01/17.
 */

$(function () {
    // $('#btn').click(function () {
    //     // $('#mydiv').toggle(1000, function () {
    //     //     alert("done")
    //     // });
    //
    //     // $('#mydiv').css({
    //     //     height: '30px',
    //     //     backgroundColor: 'red'
    //     // })
    //
    // })

    var list = $('#list');
    var a = $('#a')
    var b = $('#b')
    var c = $('#c')

    $('#btn').click(function () {
        a.append("<li> D </li>")
        a.before("<li> K </li>")

    })

    document.getElementById('btn').addEventListener(
        'click',
        function () {
        console.log('a');
    })
    document.getElementById('btn').addEventListener(
        'click',
        function () {
            console.log('b');
        })

    b.unbind('click')
    b.click(function () {

    })



});