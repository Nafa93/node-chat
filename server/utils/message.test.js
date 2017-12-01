const expect = require('expect')

var {generateMessage} = require('./message')

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Nico'
    var text = 'Some message'
    var message = generateMessage(from, text)

    expect(message).toInclude({from, text})
    expect(message.createdAt).toBeA('number')
  })
})
