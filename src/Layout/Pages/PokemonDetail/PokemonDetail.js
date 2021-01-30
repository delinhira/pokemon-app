import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ModalContext } from "../../../Context/ModalContext";

import { useQuery } from "@apollo/client";
import { GET_POKEMON_DETAIL } from "../../../GraphQL/Queries";

/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

import { toTitleCase } from "../../../helper";
import CatchPokemon from "../../Components/Modals/CatchPokemon";
import DetailTabs from "./DetailTabs";
import LoadingPage from "../../Components/LoadingPage";
import pokeball from "../../../Images/pokeball.png";
import { Text } from "../../Components/Components";
import ReleasePokemon from "../../Components/Modals/ReleasePokemon";
import { mq } from "../../../Theme";

// Styled Components
const BackIcon = styled.div`
  color: red;
  display: flex;
  align-items: center;
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
  width: 100%;
`;

const Pokeball = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  img {
    width: 30%;
    margin: 0 auto;
    cursor: pointer;
  }
`;

const mqPokeball = mq({
  width: ["100%", "70%", "50%"],
  marginTop: ["0", "-5rem", "-10rem"],
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

    console.log(data);
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
        <Image src={pokemon.sprites.front_default} alt={pokemon.name} />
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
