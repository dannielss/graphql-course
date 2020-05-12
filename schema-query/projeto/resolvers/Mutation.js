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
  }
}