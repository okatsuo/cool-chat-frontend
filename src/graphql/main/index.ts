import {
  ApolloClient,
  InMemoryCache,
  split,
  HttpLink
} from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

const fake_token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJyYWZhZWxAbWFpbC5jb20iLCJpYXQiOjE2MzU3MTcyMzcsImV4cCI6MTYzNTcyMDgzN30.5R7asOzbWluh6MoTJzg3JJD3i8qL_Vv3Ttyl3w_Cn0E"

const wsLink = process.browser ? new WebSocketLink({
  uri: 'ws://localhost:6767/subscription',
  options: {
    reconnect: true,
    connectionParams: {
      Authorization: fake_token,
    },
  },
}): null

const httpLink = new HttpLink({
  uri: 'http://localhost:6767'
})

const splitLink = process.browser ? split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink!,
  httpLink,
): httpLink

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
})
