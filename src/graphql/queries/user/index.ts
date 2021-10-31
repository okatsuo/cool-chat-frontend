import gql from 'graphql-tag';

export const GET_USERS = gql`
  query Users{
    users {
      id
      name
      email
      message{
        id
        message
      }
      created_at
      updated_at
    }
  }
`