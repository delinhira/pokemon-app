import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_POKEMON_DETAIL } from "../../../GraphQL/Queries";

/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

import DetailTabs from "./DetailTabs";
import pokeball from "../../../Images/pokeball.png";
import CatchPokemon from "../../Components/CatchPokemon";

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

const Image = styled.div`
  img {
    width: 100%;
    &.pokeball {
      width: 12%;
    }
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 0;
`;

const PokemonDetail = () => {
  const { pokemonName } = useParams();
  const [dataExist, SetDataExist] = useState(true);
  const [pokemon, setPokemon] = useState();
  const [catchPokemon, setCatchPokemon] = useState(false);

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
    }

    console.log(data);
  }, [data]);

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
          <Image>
            <div className="spritesContainer">
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <button onClick={() => setCatchPokemon(true)}>
              <img className="pokeball" src={pokeball} alt="pokeball" />
            </button>
          </Image>
          {/* {catched && (
            <form onSubmit={submitMyPokemon}>
              <input
                type="text"
                value={pokemonNickname}
                onChange={(e) => setPokemonNickname(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          )} */}
          <DetailTabs pokemon={pokemon} />
          {/* {catchPokemon && <CatchPokemon pokemon={pokemon} />} */}
        </>
      )}
    </div>
  );
};

export default PokemonDetail;
