import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "@emotion/styled";

import PokemonRouter from "./PokemonRouter";
import MyPokemonList from "./PokemonList/MyPokemonList";
import { ModalProvider } from "../../Context/ModalContext";
import background from "../../Images/background.jpg";

// Styled Components
const Background = styled.div`
  min-height: calc(100vh - 60px);
  background-image: url(${background});
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  padding: 1rem;
  padding-top: 5rem;
  box-sizing: border-box;
`;

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
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
        </ModalProvider>
      </Container>
    </Background>
  );
};

export default MainPage;
