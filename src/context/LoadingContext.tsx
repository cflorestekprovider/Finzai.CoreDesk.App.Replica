import { createContext, useContext, useReducer } from "react";
import { LoadingInitialState, LoadingState } from "../reducers/InitialStates/LoadingState";
import LoadingReducer from "../reducers/LoadingReducer";

interface LoadingContextValue {
  state: LoadingState;
  setVisible: (visible: boolean) => void;
  setText: (text: string) => void;
}

const LoadingContext = createContext<LoadingContextValue | null>(null);

interface LoadingContextProviderProps {
  children: React.ReactNode;
}

const LoadingContextProvider: React.FC<LoadingContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(LoadingReducer, LoadingInitialState );

  const setVisible = (visible: boolean) => {
    dispatch({
      type: "SET_VISIBLE",
      payload: visible,
    });
  };

  const setText = (text: string) => {
    dispatch({
      type: "SET_TEXT",
      payload: text,
    });
  };

  return (
    <LoadingContext.Provider
      value={{
        state,
        setVisible,
        setText
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = () => {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error("useLoadingContext must be used within LoadingContextProvider");
  }

  return context;
};

export default LoadingContextProvider;
