import React from "react";

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import { ThemeProvider } from "@emotion/react";
import { theme } from "./Theme";

import MainLayout from "./Layout/Pages/MainLayout";
import NavBar from "./Layout/Components/NavBar";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://graphql-pokeapi.vercel.app/api/graphql" }),
]);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <NavBar />
        <MainLayout />
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
