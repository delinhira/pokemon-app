import { createContext, useReducer } from "react";

export const ModalContext = createContext();

const ACTIONS = {
  CATCH: "catch",
  RELEASE: "release",
};

const ModalContextReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CATCH:
      return {
        ...state,
        catchModal: !state.catchModal,
      };
    case ACTIONS.RELEASE:
      return {
        ...state,
        releaseModal: !state.releaseModal,
        pokemonNickname: action.payload,
      };
    default:
      return state;
  }
};

export const ModalProvider = ({ children }) => {
  const initialState = {
    catchModal: false,
    releaseModal: false,
    pokemonNickname: "",
  };

  const [state, dispatch] = useReducer(ModalContextReducer, initialState);

  const toggleCatchModal = () => {
    dispatch({ type: ACTIONS.CATCH });
  };

  const toggleReleaseModal = (nickname) => {
    dispatch({ type: ACTIONS.RELEASE, payload: nickname });
  };

  const ModalValue = {
    catchModal: state.catchModal,
    releaseModal: state.releaseModal,
    pokemonNickname: state.pokemonNickname,
    toggleCatchModal,
    toggleReleaseModal,
  };

  return (
    <ModalContext.Provider value={ModalValue}>{children}</ModalContext.Provider>
  );
};
