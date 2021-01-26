import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_POKEMON_DETAIL } from "../../../GraphQL/Queries";

/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { mq } from "../../../Theme";

import PokemonEvolution from "./PokemonEvolution";

// Styled Components
const BackIcon = styled.div`
  color: red;
  display: flex;
  align-items: center;

  p {
    margin: 0;
    margin-left: 0.5rem;
  }
`;

const PokemonStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
`;

const StatBox = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 1rem;
  margin: 0.5rem 1rem;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const StatText = styled.p`
  margin: 0;
`;

const PokemonDetail = () => {
  const { pokemonName } = useParams();
  const [dataExist, SetDataExist] = useState(true);
  const [pokemon, setPokemon] = useState();
  const [stats, setStats] = useState([]);

  const gqlVariables = {
    name: pokemonName,
  };

  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: gqlVariables,
  });

  useEffect(() => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    if (data.pokemon.id === null) SetDataExist(false);
    else {
      setPokemon(data.pokemon);
      setStats(data.pokemon.stats);
    }

    console.log(data);
  }, [data]);

  console.log(pokemon);

  return (
    <div>
      {loading && <i class="fas fa-spinner fa-pulse"></i>}
      {!dataExist && <Title>Data doesn't exist.</Title>}
      {pokemon && (
        <>
          <Link
            to="/pokemon"
            css={{
              textDecoration: "none",
            }}
          >
            <BackIcon>
              <i className="fas fa-chevron-left fa-2x" />
              <p>Back</p>
            </BackIcon>
          </Link>
          <Title>{pokemon.name.toUpperCase()}</Title>
          <PokemonStats>
            {stats.map((stat) => (
              <StatBox
                css={mq({
                  width: ["95%", "40%", "35%"],
                })}
              >
                <StatText>{stat.stat.name}</StatText>
                <StatText>{stat.base_stat}</StatText>
              </StatBox>
            ))}
          </PokemonStats>
          <PokemonEvolution id={pokemon.id} />
        </>
      )}
    </div>
  );
};

export default PokemonDetail;
