import styled from "@emotion/styled";

export const Button = styled.button`
  background-color: ${(props) =>
    props.red ? props.theme.colors.red : props.theme.colors.blue};
  border: 2px solid
    ${(props) => (props.red ? props.theme.colors.red : props.theme.colors.blue)};
  border-radius: 5px;
  color: white;
  font-weight: 500;
  margin: 0.25rem;
  padding: 0.5rem 1rem;
  &:hover {
    color: ${(props) =>
      props.red ? props.theme.colors.red : props.theme.colors.blue};
    background-color: ${(props) =>
      props.red ? props.theme.colors.fadeRed : props.theme.colors.fadeBlue};
  }
`;

export const Text = styled.p`
  color: ${(props) =>
    props.red
      ? props.theme.colors.red
      : props.white
      ? "white"
      : props.theme.colors.blue};
  margin-bottom: ${(props) => (props.mb ? "1rem" : "0")};
  margin-top: ${(props) => (props.mt ? "1rem" : "0")};
  padding-bottom: ${(props) => (props.pb ? "1rem" : "0")};
  padding-top: ${(props) => (props.pt ? "1rem" : "0")};
  text-align: center;
  font-weight: ${(props) =>
    props.bold ? "600" : props.bolder ? "900" : "normal"};
  text-shadow: ${(props) =>
    props.shadow ? "0 0 2px rgba(255, 255, 255, 0.8)" : ""};
  font-size: ${(props) =>
    props.lg ? "3rem" : props.md ? "1.75rem" : props.sm ? "1.25rem" : "1rem"};
`;
