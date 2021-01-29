import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ModalContext } from "../../../Context/ModalContext";

import { useQuery } from "@apollo/client";
import { GET_POKEMON_DETAIL } from "../../../GraphQL/Queries";

/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

import DetailTabs from "./DetailTabs";
import pokeball from "../../../Images/pokeball.png";
import CatchPokemon from "../../Components/Modals/CatchPokemon";
import LoadingPage from "../../Components/LoadingPage";
import { Text } from "../../Components/Components";
import { toTitleCase } from "../../../helper";

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
  box-sizing: border-box;
  padding: 2rem;
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

  const BackButtonRender = () => {
    return (
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
      </>
    );
  };

  const imageRender = () => {
    return (
      <Image>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <Pokeball>
          <img
            className="pokeball"
            src={pokeball}
            alt="pokeball"
            onClick={toggleCatchModal}
          />
          <Text bold shadow>
            Tap the pokeball to catch {toTitleCase(pokemon.name)}
          </Text>
        </Pokeball>
      </Image>
    );
  };

  return (
    <>
      {loading && <LoadingPage />}
      <Container>
        {!loading && !dataExist ? (
          <Text>Data doesn't exist.</Text>
        ) : (
          pokemon && (
            <>
              {BackButtonRender()}
              <Text lg bold shadow mt>
                {toTitleCase(pokemon.name)}
              </Text>
              {imageRender()}
              <DetailTabs pokemon={pokemon} myPokemon={myPokemon} />
              <CatchPokemon pokemon={pokemon} />
            </>
          )
        )}
      </Container>
    </>
  );
};

export default PokemonDetail;
