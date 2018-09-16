// Load Dependancies
const express = require('express')
const sockets = require('socket.io')
const http = require('http')

// Create a router to respond to specific http requests
const router = express();

// Create a TCP Server
const server = http.Server(router)

// Add Web Sockets functionality to the TCP server
const io = sockets(server)

// When the user visits the root of our site (localhost:3000), we serve the files in the static folder
router.use('/', express.static(__dirname + '/static'));

// Listen for new socket connections
io.on('connection', function (socket) {

  // Listen for messages from the newly connected client
  socket.on('message', message => {

    // Log the message on the server
    console.log('User Sent: ', message.response)

    // Wait 5 seconds and then send a message back to the client
    setTimeout(() => {
      socket.emit('message', message.response)
    }, parseInt(message.interval))
  })



});


// Tell the server what port to listen to. We could change the number 3000 to
// pretty much any number and then we would see our site at localhost:<that number>
server.listen(3000, function () {
  console.log('listening on *:3000');
});