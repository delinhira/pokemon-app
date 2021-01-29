import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import styled from "@emotion/styled";

import PokemonRouter from "./PokemonRouter";
import MyPokemonList from "./PokemonList/MyPokemonList";
import { ModalProvider } from "../../Context/ModalContext";
// import CatchPokemon from "../Components/CatchPokemon";
import background from "../../Images/background.jpg";
import ReleasePokemon from "../Components/Modals/ReleasePokemon";

// Styled Components
const Background = styled.div`
  min-height: 100vh;
  background-image: url(${background});
  background-attachment: fixed;
  background-size: cover;
  padding: 1rem;
  padding-top: 6rem;
  box-sizing: border-box;
`;

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 20px;
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
          {/* <ReleasePokemon /> */}
        </ModalProvider>
      </Container>
    </Background>
  );
};

export default MainPage;
