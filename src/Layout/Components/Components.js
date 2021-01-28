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
  color: ${(props) =>
    props.red ? props.theme.colors.red : props.theme.colors.blue};
  font-weight: 600;
  text-align: center;
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
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 0 2rem;
`;
