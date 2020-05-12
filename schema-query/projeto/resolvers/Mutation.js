const { users, nextId } = require('../data/db.js')

module.exports = {
  newUser(_, { name, email, age }) {
    const user = {
      id: nextId(),
      name,
      email,
      age,
      profile_id: 1,
      status: 'ATIVO'
    }

    users.push(user)

    return user
  }
}