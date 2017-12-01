// eslint-disable-next-line
var socket = io()

socket.on('connect', function () {
  console.log('Connected to the server')
})

socket.on('disconnect', function () {
  console.log('Disconnected from the server')
})

socket.on('newMessage', function (email) {
  console.log('New message', email)
})

socket.emit('createMessage', {
  from: 'Frank',
  text: 'Hi'
}, function (data) {
  console.log('Got it', data)
})
