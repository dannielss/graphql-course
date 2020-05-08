const { profiles } = require('../data/db')

module.exports = {
  profile(user) {
    const profile = profiles.filter(p => p.id == user.profile_id)
    return profile ? profile[0] : null
  }
}