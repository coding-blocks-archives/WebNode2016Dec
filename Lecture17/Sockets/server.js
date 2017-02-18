/**
 * Created by championswimmer on 18/02/17.
 */
const express = require('express');
const app = express();
const http = require('http');
const server = http.Server(app);
const socket = require('socket.io');

const io = socket(server);

io.on("connection", function(conn) {
    console.log("A client has connected");

    conn.on("myevent", function (data) {
        console.log(data);
    });

    conn.on("send_msg", function (data) {
       io.emit("rcv_msg", data)
    });

});


app.use('/', express.static(__dirname + "/public"));


server.listen(3456, function () {
    console.log('Server started');
});