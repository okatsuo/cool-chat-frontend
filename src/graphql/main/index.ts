import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from '@apollo/client'

export const client = new ApolloClient({
  uri: 'http://localhost:6767/',
  cache: new InMemoryCache()
})
