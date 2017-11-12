var expect = require('expect');
var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Admin';
    var text = 'This is a new message';
    var now = new Date().getTime();
    var message = generateMessage(from, text);
    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(message.createdAt).toExist();
    expect(typeof message.createdAt).toBe('number');
    expect(message.createdAt).toBeGreaterThan(now - 1);
    expect(message.createdAt).toBeLessThan(now + 1000);
  });
});

describe('generateMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Larry';
    var latitude = 1;
    var longitude = 3;
    var now = new Date().getTime();
    var message = generateLocationMessage(from, latitude, longitude);
    expect(message.from).toBe(from);
    expect(message.url).toBe(`https://www.google.com/maps?q=1,3`);
    expect(message.createdAt).toExist();
    expect(typeof message.createdAt).toBe('number');
    expect(message.createdAt).toBeGreaterThan(now - 1);
    expect(message.createdAt).toBeLessThan(now + 1000);
  })
})
