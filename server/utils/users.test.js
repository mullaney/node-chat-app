var expect = require('expect');
var {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.addUser('123', 'Kevin', 'irc');
    users.addUser('456', 'Paul', 'cri');
    users.addUser('789', 'Terry', 'irc');
  });

  it('should add new user', () => {
    var user = {
      id: '0',
      name: 'new guy',
      room: 'IRC'
    };
    var res = users.addUser(user.id, user.name, user.room);
    expect(res.id).toBe(user.id);
    expect(res.name).toBe(user.name);
    expect(res.room).toBe(user.room.toLowerCase());
    expect(users.users[3].id).toBe(user.id);
    expect(users.users[3].name).toBe(user.name);
    expect(users.users[3].room).toBe(user.room.toLowerCase());
    expect(users.users.length).toBe(4);
  });

  it('should not add new user with duplicate name in same room', () => {
    var user = {
      id: '0',
      name: 'Kevin',
      room: 'irc'
    };
    var res = users.addUser(user.id, user.name, user.room);
    expect(res).toNotExist();
    expect(users.users.length).toBe(3);
  });


  it('should remove a user', () => {
    var res = users.removeUser('123');
    expect(res).toEqual({
      id: '123',
      name: 'Kevin',
      room: 'irc'
    });
    expect(users.users[0]).toEqual({
      id: '456',
      name: 'Paul',
      room: 'cri'
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
      room: 'irc'
    });
    expect(users.users.length).toBe(3);
  });

  it('should not find a user', () => {
    var res = users.getUser('122345');
    expect(res).toNotExist();
  })

  it('should return a list of users in a particular room', () => {
    var res = users.getUserList('irc');
    expect(res.length).toBe(2);
    expect(res).toEqual(['Kevin', 'Terry']);
  });

});
