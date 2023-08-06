import { gql} from '@apollo/client'

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
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
mutation savedBooks($book: SavedBookInput){
    savedBooks (book: $book){
      _id
      username
      email
      savedBooks {
        bookId
        author
        title
        image
        link
        description
        
      }
    }
  }
`

export const REMOVE_BOOK = gql`
mutation savedBooks($book: SavedBookInput){
    savedBooks (book: $book){
      _id
      username
      savedBooks {
        bookId
        author
        title
        image
        link
        description
        
      }
    }
  }
`
