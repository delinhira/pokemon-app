import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ModalContext } from "../../../Context/ModalContext";
// GraphQL
import { useQuery } from "@apollo/client";
import { GET_POKEMON_DETAIL } from "../../../GraphQL/Queries";
// Emotion
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
// Components
import { mq } from "../../../Theme";
import { toTitleCase } from "../../../helper";
import { Text } from "../../Components/Components";
import CatchPokemon from "../../Components/Modals/CatchPokemon";
import DetailTabs from "./DetailTabs";
import LoadingPage from "../../Components/LoadingPage";
import pokeball from "../../../Images/pokeball.webp";
import ReleasePokemon from "../../Components/Modals/ReleasePokemon";

// Styled Components
const BackIcon = styled.div`
  cursor: pointer;
  align-items: center;
  color: red;
  display: flex;
  p {
    margin-left: 0.5rem;
  }
`;

const Container = styled.div`
  box-sizing: border-box;
  padding: 2rem;
  width: 100%;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
`;

const Pokeball = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  img {
    cursor: pointer;
    margin: 0 auto;
    width: 30%;
  }
`;

// Media Queries
const mqPokeball = mq({
  width: ["100%", "70%", "50%"],
  marginTop: ["0", "-4rem", "-7rem"],
});

const mqPokemon = mq({
  width: ["100%", "80%", "60%"],
});

const PokemonDetail = ({ myPokemon }) => {
  const [dataExist, SetDataExist] = useState(true);
  const [pokemon, setPokemon] = useState();
  const { pokemonName } = useParams();
  const { toggleCatchModal } = useContext(ModalContext);
  const history = useHistory();

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
  }, [loading, error, data]);

  const BackButtonRender = () => {
    return (
      <>
        <BackIcon onClick={() => history.goBack()}>
          <i className="fas fa-chevron-left fa-2x" />
          <Text red>Back</Text>
        </BackIcon>
      </>
    );
  };

  const imageRender = () => {
    return (
      <>
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          css={mqPokemon}
        />
        <Pokeball css={mqPokeball}>
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
      </>
    );
  };

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
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
          <ReleasePokemon />
        </Container>
      )}
    </>
  );
};

export default PokemonDetail;
