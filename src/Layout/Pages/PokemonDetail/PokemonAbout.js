import React from "react";
import styled from "@emotion/styled";
import { mq } from "../../../Theme";
import { toTitleCase } from "../../../helper";
import { Text } from "../../Components/Components";

const StatBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  margin: 0.25rem 1rem;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  width: 100%;
`;

const PokemonType = styled.div``;

const PokemonAbout = ({ abilities, stats, type }) => {
  const abilitiesRender = () => {
    return (
      <>
        <Text sm bold white className="title">
          Abilities
        </Text>
        {abilities.map((ability) => (
          <Text bold key={ability}>
            {toTitleCase(ability.ability.name)}
          </Text>
        ))}
      </>
    );
  };

  const statsRender = () => {
    return (
      <>
        <Text sm mt bold white className="title">
          Stats
        </Text>
        <StatBox>
          {stats.map((stat) => (
            <StatItem
              key={stat.stat.name}
              css={mq({
                width: ["95%", "40%", "35%"],
              })}
            >
              <Text>{toTitleCase(stat.stat.name)}</Text>
              <Text>{stat.base_stat}</Text>
            </StatItem>
          ))}
        </StatBox>
      </>
    );
  };

  return (
    <>
      {abilitiesRender()}
      {statsRender()}
    </>
  );
};

export default PokemonAbout;
