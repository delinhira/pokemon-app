import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ModalContext } from "../../../Context/ModalContext";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
// Components
import { mq } from "../../../Theme";
import { toTitleCase } from "../../../helper";
import { Button, Text } from "../../Components/Components";

// Styled Components
const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid ${(props) => props.theme.colors.yellow};
  border-radius: 10px;
  box-sizing: border-box;
  margin: 0.5rem;
  padding: 1rem;

  // Background
  background-color: #f9f9f9;
  opacity: 1;
  background-image: linear-gradient(135deg, #efefef 25%, transparent 25%),
    linear-gradient(225deg, #efefef 25%, transparent 25%),
    linear-gradient(45deg, #efefef 25%, transparent 25%),
    linear-gradient(315deg, #efefef 25%, #f9f9f9 25%);
  background-position: 4px 0, 4px 0, 0 0, 0 0;
  background-size: 4px 4px;
  background-repeat: repeat;

  &:hover {
    box-shadow: 1px 4px 0.5rem rgba(0, 0, 0, 0.1);
  }
  a {
    text-decoration: none;
  }
  button {
    display: block;
    margin: 0 auto;
  }
`;
// Media Query
const mqContainer = mq({
  width: ["95%", "45%", "22%"],
});

const Image = styled.img`
  width: 100%;
`;

const Title = styled.div`
  background-color: ${(props) => props.theme.colors.yellow};
  border-radius: 50px;
  color: ${(props) => props.theme.colors.blue};
  margin-top: 0.5rem;
  padding: 0.5rem;
`;

const PokemonCard = ({ name, img, nickname }) => {
  const { toggleReleaseModal } = useContext(ModalContext);

  return (
    <Container css={mqContainer}>
      <Link to={`/pokemon/${name}`}>
        <Title>
          <Text sm bold>
            {toTitleCase(name)}
          </Text>
        </Title>
        <Image src={img} alt={name} />
        {nickname && (
          <Text mb bold>
            &bull; {toTitleCase(nickname)} &bull;
          </Text>
        )}
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
