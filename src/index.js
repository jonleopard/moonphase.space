import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'rebass';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// eslint-disable-next-line
import globalStyles from './globalStyles';

const httpLink = new HttpLink({ uri: 'http://localhost:4000' });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
