const { users, nextId } = require('../data/db.js')

module.exports = {
  newUser(_,args) {
    const existEmail = users.some(u => u.email === args.email)

    if(existEmail) {
      throw new Error('E-mail já cadastrado')
    }

    const user = {
      id: nextId(),
      ...args,
      profile_id: 1,
      status: 'ATIVO'
    }

    users.push(user)

    return user
  },

  deleteUser(_, { id }) {
    const i = users.findIndex(u => u.id === id)
    if(i < 0 ) return null
    const deletes = users.splice(i, 1)
    return deletes ? deletes[0] : null
  },

  updateUser(_, args) {
    const i = users.findIndex(u => u.id === args.id)
    if(i < 0) return null

    const user = {
      ...users[i],
      ...args
    }

    users.splice(i, 1, user)
    return user
  }
}