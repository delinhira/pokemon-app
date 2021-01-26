import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import PokemonList from "./PokemonList/PokemonList";
import PokemonDetail from "./PokemonDetail/PokemonDetail";

const PokemonRoute = () => {
  let { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <PokemonList />
        </Route>
        <Route path={`${path}/:pokemonName`}>
          <PokemonDetail />
        </Route>
      </Switch>
    </div>
  );
};

export default PokemonRoute;
