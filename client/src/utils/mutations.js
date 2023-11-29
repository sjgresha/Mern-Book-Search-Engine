import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookDetails: BookInput!) {
    saveBook(bookDetails: $bookDetails) {
      _id
      username
      email
      bookCount
      savedBooks {
        title
        authors
        bookId
        description
        image
        link
      }
    }
  }
`;

export const DELETE_BOOK = gql`
mutation deleteBook($bookId: ID!) {
  deleteBook(bookId: $bookId) {
    _id
    username
    email
    bookCount
    savedBooks {
      title
      bookId
    }
  }
}
`;