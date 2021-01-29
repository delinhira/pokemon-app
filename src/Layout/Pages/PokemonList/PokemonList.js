import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../../../GraphQL/Queries";
import styled from "@emotion/styled";

import PokemonCard from "./PokemonCard";
import LoadingPage from "../../Components/LoadingPage";
import { Button } from "../../Components/Components";

// Styled Components
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;

  button {
    margin: 0 0.5rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
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
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <Container>
            {pokemons.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                name={pokemon.name}
                img={pokemon.image}
              />
            ))}
          </Container>
          <ButtonContainer>
            {activePage !== 1 && (
              <Button type="button" onClick={prevPage}>
                Prev
              </Button>
            )}
            <Button type="button" onClick={nextPage}>
              Next
            </Button>
          </ButtonContainer>
        </>
      )}
    </>
  );
};

export default PokemonList;
