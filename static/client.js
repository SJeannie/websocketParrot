const textArea = document.querySelector('#content')

let socket = io();

// const button = document.querySelector('#hello-button')

function handleCommunication(interval = 1000) {
  socket.on('message', message => printToScreen(message))
  // socket.emit('message', { 'response': 'slow', 'interval': 5000 })
  socket.emit('message', {
    'response': 'fast', 'interval': interval
  })
}

function printToScreen(message) {

  textArea.innerHTML = `<div id="screen">${message} <button onclick=handleSnooze() " > Snooze</button ></div> `
  let contentDiv = document.querySelector('#screen')
  contentDiv.addEventListener('click', (event) => {
    handleSnooze(event)
    textArea.innerHTML = ''
  })
}

function handleSnooze(event) {
  //message
  //setSnoozeTime
  handleCommunication(5000)
}
