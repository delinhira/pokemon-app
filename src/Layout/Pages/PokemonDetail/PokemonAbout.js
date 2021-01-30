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
  margin: 0.25rem 0;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  width: 100%;
`;

const TypeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;
  .bug {
    background-color: ${(props) => props.theme.colors.type.bug};
  }
  .dark {
    background-color: ${(props) => props.theme.colors.type.dark};
  }
  .dragon {
    background-color: ${(props) => props.theme.colors.type.dragon};
  }
  .electric {
    background-color: ${(props) => props.theme.colors.type.electric};
  }
  .fairy {
    background-color: ${(props) => props.theme.colors.type.fairy};
  }
  .fighting {
    background-color: ${(props) => props.theme.colors.type.fighting};
  }
  .flying {
    background-color: ${(props) => props.theme.colors.type.flying};
  }
  .fire {
    background-color: ${(props) => props.theme.colors.type.fire};
  }
  .ghost {
    background-color: ${(props) => props.theme.colors.type.ghost};
  }
  .grass {
    background-color: ${(props) => props.theme.colors.type.grass};
  }
  .ground {
    background-color: ${(props) => props.theme.colors.type.ground};
  }
  .ice {
    background-color: ${(props) => props.theme.colors.type.ice};
  }
  .normal {
    background-color: ${(props) => props.theme.colors.type.normal};
  }
  .poison {
    background-color: ${(props) => props.theme.colors.type.poison};
  }
  .psychic {
    background-color: ${(props) => props.theme.colors.type.psychic};
  }
  .rock {
    background-color: ${(props) => props.theme.colors.type.rock};
  }
  .shadow {
    background-color: ${(props) => props.theme.colors.type.shadow};
  }
  .steel {
    background-color: ${(props) => props.theme.colors.type.steel};
  }
  .unknown {
    background-color: ${(props) => props.theme.colors.type.unknown};
  }
  .water {
    background-color: ${(props) => props.theme.colors.type.water};
  }
`;

const TypeItem = styled.p`
  color: white;
  font-weight: 600;
  margin: 0;
  padding: 0.25rem 1rem;
  border-radius: 5px;
`;

const PokemonAbout = ({ abilities, stats, types }) => {
  const abilitiesRender = () => {
    return (
      <>
        <Text sm bold white className="title">
          Abilities
        </Text>
        {abilities.map((ability, index) => (
          <Text bold key={index}>
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
          {stats.map((stat, index) => (
            <StatItem
              key={index}
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

  const typesRender = () => {
    return (
      <TypeContainer>
        {types.map((type, index) => (
          <TypeItem className={type.type.name} key={index}>
            {toTitleCase(type.type.name)}
          </TypeItem>
        ))}
      </TypeContainer>
    );
  };

  return (
    <>
      {typesRender()}
      {abilitiesRender()}
      {statsRender()}
    </>
  );
};

export default PokemonAbout;
