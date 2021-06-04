const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path')
const { Server } = require('socket.io')
const io = new Server(server)

//middleware
app.use(express.static(path.join(__dirname, '/static')))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/home.html')
})

io.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg)
    })
})

server.listen(3000, () => {
    console.log('listening on *:3000')
})