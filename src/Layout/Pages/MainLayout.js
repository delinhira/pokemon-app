import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ModalProvider } from "../../Context/ModalContext";
import styled from "@emotion/styled";
// Components
import background from "../../Images/background.webp";
import MyPokemonList from "./PokemonList/MyPokemonList";
import PokemonRouter from "./PokemonRouter";
import PokemonList from "./PokemonList/PokemonList";
import WrongPath from "../Components/WrongPath";

// Styled Components
const Background = styled.div`
  background-attachment: fixed;
  background-image: url(${background});
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  min-height: calc(100vh - 60px);
  padding: 1rem;
  padding-top: 5rem;
`;

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 20px;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1200px;
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
            <Route path="/wrong-path">
              <WrongPath />
            </Route>
            <Route exact path="/">
              <PokemonList />
            </Route>
            <Redirect from="*" to="/wrong-path" />
          </Switch>
        </ModalProvider>
      </Container>
    </Background>
  );
};

export default MainPage;
