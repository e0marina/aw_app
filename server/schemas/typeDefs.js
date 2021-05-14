// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    email: String
  }

  type Quote {
    _id: ID
    quoteText: String
    createdAt: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    quote(_id: ID!): Quote
  }
`;

// export the typeDefs
module.exports = typeDefs;
