import React from "react";
import { Link } from "react-router-dom";

/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { mq } from "../../../Theme";

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
`;

const Title = styled.p`
  text-align: center;
  margin: 0;
  font-weight: 700;
  font-size: 1rem;
  background-color: ${(props) => props.theme.colors.secondary};
`;

const Image = styled.img`
  width: 100%;
`;

const PokemonCard = ({ name, img }) => {
  return (
    <Container
      css={mq({
        width: ["22%", "45%", "95%"],
      })}
    >
      <Link to={`/pokemon/${name}`}>
        <Title>{name.toUpperCase()}</Title>
        <Image src={img} alt={name} />
      </Link>
    </Container>
  );
};

export default PokemonCard;
