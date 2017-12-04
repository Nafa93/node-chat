// eslint-disable-next-line
var socket = io()

socket.on('connect', function () {
  console.log('Connected to the server')
})

socket.on('disconnect', function () {
  console.log('Disconnected from the server')
})

socket.on('newMessage', function (message) {
  console.log('New message', message)
  // eslint-disable-next-line
  var li = jQuery('<li></li>')
  li.text(`${message.from}: ${message.text}`)

  // eslint-disable-next-line
  jQuery('#messages').append(li)
})

socket.emit('createMessage', {
  from: 'Frank',
  text: 'Hi'
}, function (data) {
  console.log('Got it', data)
})

// eslint-disable-next-line
jQuery('#message-form').on('submit', function (e) {
  e.preventDefault()

  socket.emit('createMessage', {
    from: 'User',
    // eslint-disable-next-line
    text: jQuery('[name=message]').val()
  }, function () {

  })
})
