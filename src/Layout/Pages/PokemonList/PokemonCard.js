import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ModalContext } from "../../../Context/ModalContext";

/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { mq } from "../../../Theme";

import ReleasePokemon from "../../Components/Modals/ReleasePokemon";
import { Button } from "../../Components/Components";

// Styled Components
const Container = styled.div`
  box-sizing: border-box;
  background-color: white;
  margin: 0.5rem;
  padding: 1rem;
  border: 1px solid lightgray;
  border-radius: 5px;

  &:hover {
    box-shadow: 1px 4px 0.5rem rgba(0, 0, 0, 0.1);
  }

  a {
    text-decoration: none;
    color: hotpink;

    &:visited {
      color: hotpink;
    }
  }

  button {
    display: block;
    margin: 0 auto;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Nickname = styled.p`
  color: ${(props) => props.theme.colors.blue};
  text-align: center;
  font-weight: 600;
`;

const Title = styled.p`
  text-align: center;
  margin: 0;
  font-weight: 700;
  font-size: 1rem;
  background-color: ${(props) => props.theme.colors.secondary};
`;

const responsive = mq({
  width: ["22%", "45%", "95%"],
});

const PokemonCard = ({ name, img, nickname }) => {
  const { pokemonNickname, toggleReleaseModal } = useContext(ModalContext);
  console.log(pokemonNickname);

  return (
    <Container css={responsive}>
      <Link to={`/pokemon/${name}`}>
        <Title>{name.toUpperCase()}</Title>
        <Image src={img} alt={name} />
        {nickname && <Nickname>{nickname}</Nickname>}
      </Link>
      {nickname && (
        <Button red type="button" onClick={() => toggleReleaseModal(nickname)}>
          Release
        </Button>
      )}
    </Container>
  );
};

export default PokemonCard;
