import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import styled from "@emotion/styled";

import PokemonRouter from "./PokemonRouter";
import MyPokemonList from "./PokemonList/MyPokemonList";
import { ModalProvider } from "../../Context/ModalContext";
// import CatchPokemon from "../Components/CatchPokemon";

// Styled Components
const Background = styled.div`
  /* height: 100vh; */
  min-height: 100vh;
  background-color: #ffffff;
  background: radial-gradient(
      circle,
      transparent 20%,
      #ffffff 20%,
      #ffffff 80%,
      transparent 80%,
      transparent
    ),
    radial-gradient(
        circle,
        transparent 20%,
        #ffffff 20%,
        #ffffff 80%,
        transparent 80%,
        transparent
      )
      72.5px 72.5px,
    linear-gradient(
        #fdffbe 5.800000000000001px,
        transparent 5.800000000000001px
      )
      0 -2.9000000000000004px,
    linear-gradient(
        90deg,
        #fdffbe 5.800000000000001px,
        #ffffff 5.800000000000001px
      ) -2.9000000000000004px 0;
  background-size: 145px 145px, 145px 145px, 72.5px 72.5px, 72.5px 72.5px;
`;

const Container = styled.div`
  box-sizing: border-box;
  max-width: 1200px;

  margin: 0 auto;
  padding: 3rem;
  padding-top: 6rem;
`;

const MainPage = () => {
  return (
    <Background>
      <Container>
        <ModalProvider>
          <Switch>
            <Route path="/my-pokemon">
              <MyPokemonList />
            </Route>
            <Route path="/pokemon">
              <PokemonRouter />
            </Route>
            <Route path="/404">Error 404: Not Found</Route>
            <Redirect exact from="/" to="/pokemon" />
            <Redirect from="*" to="/404" />
          </Switch>
        </ModalProvider>
      </Container>
    </Background>
  );
};

export default MainPage;
