import React, { useEffect } from "react";

import { useQuery } from "@apollo/client";
import { GET_POKEMON_EVOLUTION } from "../../../GraphQL/Queries";

const PokemonEvolution = ({ id }) => {
  console.log(id);
  const gqlVariables = {
    id: id.toString(),
  };

  const { loading, error, data } = useQuery(GET_POKEMON_EVOLUTION, {
    variables: gqlVariables,
  });

  useEffect(() => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    // setDetails(data.pokemon);

    console.log(data);
  }, [data]);

  return (
    <>
      <div></div>
    </>
  );
};

export default PokemonEvolution;
