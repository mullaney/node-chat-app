var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Admin';
    var text = 'This is a new message';
    var now = new Date().getTime()
    var message = generateMessage(from, text);
    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(message.createdAt).toExist();
    expect(typeof message.createdAt).toBe('number');
    expect(message.createdAt).toBeGreaterThan(now - 1);
    expect(message.createdAt).toBeLessThan(now + 1000);
  });
});
