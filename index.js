const express = require('express')
const app = express()
const port = process.env.PORT | 5000;
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket) => {
    socket.on('message',(msg) => {
        console.log(msg);
        socket.emit("message", msg);
    });
});

server.listen(port);