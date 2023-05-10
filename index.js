const express = require('express');
const app = express()
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

server.listen(3000, () => {
  console.log(`Server Started`);
});

io.on('connection', (socket) => {
  console.log(`Connected ${socket}`)
});

