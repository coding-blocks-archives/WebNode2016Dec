/**
 * Created by championswimmer on 18/02/17.
 */

var conn = io();

$(function () {

    conn.emit("myevent", (new Date()).getTime())

    $('#send').click(function () {
        conn.emit("send_msg", $('#msg').val())
    })

    conn.on("rcv_msg", function (data) {
        $('#chat').append('<li>' + data + '</li>')
    })
});