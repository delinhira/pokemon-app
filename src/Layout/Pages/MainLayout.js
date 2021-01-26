import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "@emotion/styled";
// Components
import PokemonRoute from "./PokemonRoute";

const Background = styled.div`
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
  max-width: 900px;

  margin: 0 auto;
  margin-top: 3rem;
  padding: 3rem;
  /* background-color: white; */
`;

const MainPage = () => {
  return (
    <Background>
      <Container>
        <Switch>
          <Route path="/my-pokemon">My Pokemon</Route>
          <Route path="/pokemon">
            <PokemonRoute />
          </Route>
          <Route path="/404">Error 404: Not Found</Route>
          <Redirect exact from="/" to="/pokemon" />
          <Redirect from="*" to="/404" />
        </Switch>
      </Container>
    </Background>
  );
};

export default MainPage;
