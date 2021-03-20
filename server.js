var PORT = process.env.PORT || 3000;
var express = require('express');
var pno = 0;

var app = express();
var server = app.listen(PORT);

app.use(express.static('public'));

console.log("Socket Server is Running");

var socket = require('socket.io');

var io = socket(server);
io.sockets.on('connection', newConnection);


function newConnection(socket)
{
    socket.on('disconnect', function(){
        pno--;
        var nc = pno;
        io.sockets.emit('NoOfClients',nc);
    });

    pno++;
    console.log("New Connection: " + socket.id);

    socket.on('score',PlayerA);
    // var nc = socket.client.conn.server.clientsCount;
    var nc = pno;
    io.sockets.emit('NoOfClients',nc);
    
    function PlayerA(data){
        socket.broadcast.emit('scoreout',data);
        // console.log(data);
    }
}