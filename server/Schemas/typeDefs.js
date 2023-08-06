const { gql} = require('apollo-server-express')

const typeDefs = gql`

type User {
    _id:ID
    username: String
    email: String
    savedBooks:[Books]
}

type Books{
    _id: ID
    author:[String]
    description: String
    image:String
    link: String
    title: String
    bookId: String
}

type Query{
    me: User
    users: [User]
    user(username: String!): User
    books(username: String): [Books]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savedBooks(book: SavedBookInput): User
    removeBook(bookId: String!): User
  }

  type Auth {
    token: ID!
    user: User
  }
  input SavedBookInput {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
}

`

 module.exports = typeDefs
