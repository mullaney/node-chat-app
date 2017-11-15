// const _ = require('lodash');

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }

  addUser(id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser(id) {
    var user = this.getUser(id);

    if(user) {
      this.users = this.users.filter(user => user.id != id);
    }

    return user;
  }

  getUser(id) {
    return this.users.filter((user) => user.id === id)[0];
  }

  getUserList(room) {
    var usersInRoom = this.users.filter(user => user.room === room);
    var userNames = usersInRoom.map(user => user.name);
    return userNames;
  }
}

module.exports = {Users};

//longWords = words.filter(word => word.length > 6);
// var array = [1, 2, 3, 4];
// var evens = _.remove(array, function(n) {
//   return n % 2 == 0;
// });
//
// console.log(array);
// // => [1, 3]
//
// console.log(evens);
// // => [2, 4]
