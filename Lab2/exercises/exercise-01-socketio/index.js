const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('http');
const { join } = require('path');

const app = express();
const server = createServer(app);
const io = new Server(server);
const messageHistory = [];

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.get('/history', (req, res) => {
    res.json(messageHistory);
});

io.on('connection', (socket) => {
    console.log('a user connected');

    io.emit('user connected', 'a user connected');

    socket.on('chat message', (msg) => {
        messageHistory.push(msg);
        io.emit('chat message', msg);
    });

    socket.on('typing', (msg) => {
        console.log(msg);
    });

    socket.on('stop typing', (msg) => {
        console.log(msg);
    });

    socket.on('disconnect', () => {
        io.emit('user disconnected', 'a user disconnected');
        console.log('user disconnected');
    });

});

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});
