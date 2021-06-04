const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path')

//middleware
app.use(express.static(path.join(__dirname, '/static')))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/home.html')
})

server.listen(3000, () => {
    console.log('listening on *:3000')
})