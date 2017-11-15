var expect = require('expect');
var {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '123',
      name: 'Kevin',
      room: 'IRC'
    }, {
      id: '456',
      name: 'Paul',
      room: 'CRI'
    }, {
      id: '789',
      name: 'Terry',
      room: 'IRC'
    }]
  });

  it('should add new user', () => {
    var user = {
      id: '0',
      name: 'new guy',
      room: 'IRC'
    };
    var res = users.addUser(user.id, user.name, user.room);
    expect(res).toEqual(user);
    expect(users.users[3]).toEqual(user);
    expect(users.users.length).toBe(4);
  });

  it('should remove a user', () => {
    var res = users.removeUser('123');
    expect(res).toEqual({
      id: '123',
      name: 'Kevin',
      room: 'IRC'
    });
    expect(users.users[0]).toEqual({
      id: '456',
      name: 'Paul',
      room: 'CRI'
    });
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var res = users.removeUser('999');
    expect(res).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should get a users data', () => {
    var res = users.getUser('123');
    expect(res).toEqual({
      id: '123',
      name: 'Kevin',
      room: 'IRC'
    });
    expect(users.users.length).toBe(3);
  });

  it('should not find a user', () => {
    var res = users.getUser('122345');
    expect(res).toNotExist();
  })

  it('should return a list of users in a particular room', () => {
    var res = users.getUserList('IRC');
    expect(res.length).toBe(2);
    expect(res).toEqual(['Kevin', 'Terry']);
  });

});
