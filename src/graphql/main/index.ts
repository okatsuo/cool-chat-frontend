import {
  ApolloClient,
  InMemoryCache,
  split,
  HttpLink
} from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

const wsLink = process.browser ? new WebSocketLink({
  uri: 'ws://localhost:6767/subscription',
  options: {
    reconnect: true
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
