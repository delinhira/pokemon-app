import React, { useState } from "react";

import styled from "@emotion/styled";
import PokemonStats from "./PokemonStats";
import PokemonAbout from "./PokemonAbout";

// Styled Components
const Container = styled.div`
  box-sizing: border-box;
  border: 2px solid ${(props) => props.theme.colors.yellow};
  border-radius: 5px;
  background-color: white;
`;

const Option = styled.div`
  box-sizing: border-box;
  font-weight: 600;
  color: ${(props) => props.theme.colors.yellow};
  background-color: white;
  border: 2px solid ${(props) => props.theme.colors.yellow};
  border-radius: 20px;
  padding: 0.25rem 1rem;
  margin: 1rem;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: ${(props) => props.theme.colors.yellow};
  }

  &.active {
    color: white;
    background-color: ${(props) => props.theme.colors.yellow};
  }
`;

const Options = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const Title = styled.h1`
  text-align: center;
`;

const DetailTabs = ({ pokemon }) => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <>
      <Options>
        <Option
          className={activeTab === "about" ? "active" : ""}
          onClick={() => setActiveTab("about")}
        >
          About
        </Option>
        <Option
          className={activeTab === "stats" ? "active" : ""}
          onClick={() => setActiveTab("stats")}
        >
          Stats
        </Option>
      </Options>

      <Container>
        {activeTab === "about" && (
          <>
            <Title>About</Title>
            <PokemonAbout pokemon={pokemon} />
          </>
        )}
        {activeTab === "stats" && (
          <>
            <Title>Stats</Title>
            <PokemonStats stats={pokemon.stats} />
          </>
        )}
      </Container>
    </>
  );
};

export default DetailTabs;
