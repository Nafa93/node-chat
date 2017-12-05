const expect = require('expect')

var {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Nico'
    var text = 'Some message'
    var message = generateMessage(from, text)

    expect(message).toInclude({from, text})
    expect(message.createdAt).toBeA('number')
  })
})

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Nico'
    var latitude = 1
    var longitude = 1
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`
    var message = generateLocationMessage(from, latitude, longitude)

    expect(message).toInclude({from, url})
    expect(message.createdAt).toBeA('number')    
  })
})
