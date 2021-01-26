import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_POKEMON_DETAIL } from "../../../GraphQL/Queries";

import PokemonEvolution from "./PokemonEvolution";

const PokemonDetail = () => {
  const { pokemonName } = useParams();
  const [details, setDetails] = useState();

  const gqlVariables = {
    name: pokemonName,
  };

  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: gqlVariables,
  });

  useEffect(() => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    setDetails(data.pokemon);

    console.log(data);
  }, [data]);

  // console.log(details.id);
  console.log(details);

  return (
    <div>
      <h2>{pokemonName}</h2>
      {details && <PokemonEvolution id={details.id} />}
    </div>
  );
};

export default PokemonDetail;
