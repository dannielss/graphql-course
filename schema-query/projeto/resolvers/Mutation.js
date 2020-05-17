const { users, nextId } = require('../data/db.js')

function indexUser(filter) {
  if(!filter) return - 1
  const { id, email } = filter
  if(id) {
    return users.findIndex(u => u.id === id)
  } else if(email) {
    return users.findIndex(u => u.email === email)
  } 

  return -1 
}

module.exports = {
  newUser(_, { data }) {
    const existEmail = users.some(u => u.email === data.email)

    if(existEmail) {
      throw new Error('E-mail já cadastrado')
    }

    const user = {
      id: nextId(),
      ...data,
      profile_id: 1,
      status: 'ATIVO'
    }

    users.push(user)

    return user
  },

  deleteUser(_, { filter }) {
    const i = indexUser(filter)
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