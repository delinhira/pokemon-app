import styled from "@emotion/styled";

export const Button = styled.button`
  border: 1px solid
    ${(props) => (props.red ? props.theme.colors.red : props.theme.colors.blue)};
  background-color: ${(props) =>
    props.red ? props.theme.colors.red : props.theme.colors.blue};
  border-radius: 5px;
  color: white;
  padding: 0.5rem 1rem;
  font-weight: 600;

  &:hover {
    border: 1px solid
      ${(props) =>
        props.red ? props.theme.colors.red : props.theme.colors.blue};
    color: ${(props) =>
      props.red ? props.theme.colors.red : props.theme.colors.blue};
    background-color: white;
  }
`;

export const Text = styled.p`
  text-align: center;
  margin-top: ${(props) => (props.mt ? "1rem" : "0")};
  margin-bottom: ${(props) => (props.mb ? "1rem" : "0")};
  padding-top: ${(props) => (props.pt ? "1rem" : "0")};
  padding-bottom: ${(props) => (props.pb ? "1rem" : "0")};
  color: ${(props) =>
    props.red
      ? props.theme.colors.red
      : props.white
      ? "white"
      : props.theme.colors.blue};
  font-weight: ${(props) =>
    props.bold ? "600" : props.bolder ? "900" : "normal"};
  font-size: ${(props) =>
    props.lg ? "3rem" : props.md ? "1.75rem" : props.sm ? "1.25rem" : "1rem"};
  text-shadow: ${(props) =>
    props.shadow ? "0 0 2px rgba(255, 255, 255, 0.8)" : ""};

  /* @media (min-width: ${(props) => props.theme.breakpoints.small}) {
    font-size: ${(props) =>
    props.lg ? "3rem" : props.md ? "1.75rem" : props.sm ? "1.25rem" : "1rem"};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    font-size: ${(props) =>
    props.lg ? "4rem" : props.md ? "24px" : props.sm ? "18px" : "14px"};
  } */
`;

export const Modal = styled.div`
  box-sizing: border-box;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;
  img {
    width: 50%;
  }
`;

export const Overlay = styled.div`
  display: ${(props) => (props.display ? "flex" : "none")};
  min-height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 0 2rem;
  z-index: 1;
`;
