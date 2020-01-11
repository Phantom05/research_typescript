import React, { ReactElement } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "store/modules";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";

// graphql
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache()
});

const store = createStore(rootReducer);
interface Props {}

function Root({}: Props): ReactElement {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Router>
          <App />
        </Router>
      </ApolloProvider>
    </Provider>
  );
}

export default Root;
