import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Book {
    id: ID
    Title: String
    Count: Int
  }

  type Query {
    hello: String

    getAllBooks: [Book]

    getBook(Title: String): Book
  }

  input BookInput {
    Title: String
    Count: Int
  }

  type Mutation {
    createBook(books: BookInput): Book
    deleteBook(ID: ID): String
  }
`

export default typeDefs