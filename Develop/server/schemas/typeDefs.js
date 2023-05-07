const {gql} = require('apollo-server-express');

const typeDefs = gpl`
type User {
    _id: Integer
    username: String 
    email: String
    bookCount: Integer
},
type Book {
    bookId: Integer
    author: String 
    description: String
    title: String
    image: String
    link: String 
},
input BookInput{
    bookId: Integer
    author: String 
    description: String
    title: String
    image: String
    link: String 
},
type Auth {
    token: ID
    user: User
  },
  type Query {
    me: User
  };
`

module.exports = typeDefs; 
