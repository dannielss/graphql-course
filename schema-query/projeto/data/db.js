let id = 1;
function nextId() {
  return id++;
}

const users = [{
  id: nextId(),
  name: 'João',
  email: "joao@hotmail.com",
  age: 28,
  profile_id: 1,
  status: 'ATIVO'
}, {
  id: nextId(),
  name: 'ana',
  email: "ana@hotmail.com",
  age: 27,
  profile_id: 2,
  status: 'INATIVO'
}, {
  id: nextId(),
  name: 'Carla',
  email: "carla@hotmail.com",
  age: 22,
  profile_id: 1,
  status: 'BLOQUEADO'
},{
  id: nextId(),
  name: 'Carlos',
  email: "carlos@hotmail.com",
  age: 21,
  profile_id: 1,
  status: 'BLOQUEADO'
}]

const profiles = [
  {id: 1, type: 'Common'},
  {id: 2, type: 'Adm' }
]


module.exports = { users, profiles, nextId }