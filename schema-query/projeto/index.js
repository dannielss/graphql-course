const { ApolloServer, gql } = require('apollo-server');

const users = [{
  id: 1,
  name: 'João',
  email: "joao@hotmail.com",
  age: 28
}, {
  id: 1,
  name: 'ana',
  email: "ana@hotmail.com",
  age: 27
}, {
  id: 1,
  name: 'Carla',
  email: "carla@hotmail.com",
  age: 22
}]

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

  type Product {
    name: String!
    price: Float!
    discount: Float
    priceWithDiscount: Float
  }

  # Pontos de entrada da sua API
  type Query {
    hello: String!
    now: Date!
    userLogged: User
    productShow: Product
    numbers: [Int]!
    users: [User]
  }
`

const resolvers = {
  Product: {
    priceWithDiscount(product) {
      if(product.discount) {
        return product.price * (1 - product.discount)
      }else {
        return product.price
      }
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