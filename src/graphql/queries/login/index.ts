import gql from 'graphql-tag';

export const USER_LOGIN = gql`
  query UserLogin($fields: UserConfirmationInputInterface!){
    login(fields: $fields)
  }
`