import React, { useEffect, useState } from "react";

import { useQuery } from "@apollo/client";
import { GET_POKEMON_EVOLUTION } from "../../../GraphQL/Queries";

const PokemonEvolution = ({ id }) => {
  const [evolutionChain, setEvolutionChain] = useState();

  const gqlVariables = {
    id: id.toString(),
  };

  const { loading, error, data } = useQuery(GET_POKEMON_EVOLUTION, {
    variables: gqlVariables,
  });

  useEffect(() => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    setEvolutionChain(data.evolutionChain);

    // console.log(data.evolutionChain.response.chain.evolves_to[0].species.name);
    console.log(data);
  }, [data]);

  return (
    <>
      <div></div>
    </>
  );
};

export default PokemonEvolution;
