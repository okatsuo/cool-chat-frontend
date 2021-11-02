import gql from 'graphql-tag';

export const USER_PROFILE = gql`
query UserProfile($token: String!){
  userProfile(token: $token){
    id
    name
    email
    created_at
    updated_at
  }
}`
