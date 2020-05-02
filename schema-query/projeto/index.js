const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    salary: Float
    vip: Boolean
  }

  # Pontos de entrada da sua API
  type Query {
    hello: String!
    now: Date!
    userLogged: User
  }
`

const resolvers = {
  User: {
    salary(user) {
      return user.real_salary
    }
  },

  Query: {
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
        real_salary: 1000.00,
        vip: true
      }
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`)
})