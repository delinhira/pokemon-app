import React, { useEffect, useState } from "react";

import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../../../GraphQL/Queries";

import styled from "@emotion/styled";
import { mq } from "../../../Theme";

import PokemonCard from "./PokemonCard";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [nextOffset, setNextOffset] = useState(0);
  const [prevOffset, setPrevOffset] = useState(0);

  const gqlVariables = {
    limit: 20,
    offset: activePage,
  };

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  useEffect(() => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    setPokemons(data.pokemons.results);
    setNextOffset(data.pokemons.nextOffset);
    setPrevOffset(data.pokemons.prevOffset);

    console.log(data);
  }, [data]);

  const nextPage = () => setActivePage(nextOffset);
  const prevPage = () => setActivePage(prevOffset);

  return (
    <>
      {loading && <i class="fas fa-spinner fa-pulse"></i>}
      {!loading && (
        <Container
          css={mq({
            color: ["blue", "gray", "hotpink"],
          })}
        >
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name}
              img={pokemon.image}
            />
          ))}
        </Container>
      )}
      {activePage !== 1 && (
        <button type="button" onClick={prevPage}>
          Prev
        </button>
      )}
      <button type="button" onClick={nextPage}>
        Next
      </button>
    </>
  );
};

export default PokemonList;
