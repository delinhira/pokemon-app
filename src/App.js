import React, { useEffect } from "react";
// Apollo GraphQL
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
// Emotion
import { ThemeProvider } from "@emotion/react";
import { theme } from "./Theme";
// Components
import Footer from "./Layout/Components/Footer";
import MainLayout from "./Layout/Pages/MainLayout";
import NavBar from "./Layout/Components/NavBar";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) =>
      alert(`Graphql error ${message}`)
    );
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
  useEffect(() => {
    localStorage.setItem("myPokemonList", JSON.stringify([]));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <NavBar />
        <MainLayout />
        <Footer />
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
