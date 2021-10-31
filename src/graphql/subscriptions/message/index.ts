import gql from 'graphql-tag';

export const NEW_MESSAGE = gql`
  subscription NewMessage {
    newMessage{
      id
      user{
        id
        name
        email
      }
      message
      created_at
      updated_at
    }
  }
`