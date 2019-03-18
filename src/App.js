import React, { Component } from 'react';
import BookList from './components/booklist/BookList';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client} >
        <div >
          <h1>
            Apollo
        </h1>
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
