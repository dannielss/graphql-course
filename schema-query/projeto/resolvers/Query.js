const { users, profiles } = require('../data/db')

module.exports = {
  hello() {
    return 'Bom dia!'
  },

  now() {
    return new Date()
  },

  userLogged() {
    return {
      id: 1,
      name: 'Ana',
      email: 'ana@hotmail.com',
      age: 23,
      salary: 1000.00,
      vip: true
    }
  },

  productShow() {
    return {
      name: 'Bolacha',
      price: 5.50,
      discount: 0.50
    }
  },

  numbers() {
    const numbers = (a, b) => a - b
    return Array(6).fill(0)
      .map(n => parseInt(Math.random() * 60 + 1))
      .sort(numbers)
  },

  users() {
    return users;
  },

  user(_, args) {
    const sels = users.filter(u => u.id == args.id)
    return sels ? sels[0] : null
  },

  profiles() {
    return profiles;
  },

  profile(_, args) {
    const profile = profiles.filter(p => p.id == args.id)
    return profile ? profile[0] : null
  }
}