import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_POKEMON_DETAIL } from "../../../GraphQL/Queries";

/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

import DetailTabs from "./DetailTabs";
import pokeball from "../../../Images/pokeball.png";
import CatchPokemon from "../../Components/Modals/CatchPokemon";
import { ModalContext } from "../../../Context/ModalContext";
import LoadingPage from "../../Components/LoadingPage";

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

const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  width: 100%;
`;

const Image = styled.div`
  img {
    width: 100%;
  }
`;

const Pokeball = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 30%;
    margin: 0 auto;
    cursor: pointer;
  }
  p {
    margin: 0;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 0;
`;

const PokemonDetail = ({ myPokemon }) => {
  const { pokemonName } = useParams();
  const [dataExist, SetDataExist] = useState(true);
  const [pokemon, setPokemon] = useState();
  const { catchModal, toggleCatchModal } = useContext(ModalContext);
  console.log(catchModal);

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
    <Container>
      {loading && <LoadingPage />}
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
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <Pokeball>
              <img
                className="pokeball"
                src={pokeball}
                alt="pokeball"
                onClick={toggleCatchModal}
              />
              <p>Tap the pokeball to catch {pokemon.name}</p>
            </Pokeball>
          </Image>
          <DetailTabs pokemon={pokemon} />
          <CatchPokemon pokemon={pokemon} />
        </>
      )}
    </Container>
  );
};

export default PokemonDetail;
