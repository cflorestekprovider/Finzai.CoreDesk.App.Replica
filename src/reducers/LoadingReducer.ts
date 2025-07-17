import { LoadingInitialState, LoadingState } from "./InitialStates/LoadingState";

type LoadingAction =
    | { type: "SET_VISIBLE"; payload: boolean }
    | { type: "SET_TEXT"; payload: string }
    ;



const LoadingReducer = (
    state: LoadingState = LoadingInitialState,
    action: LoadingAction
) => {
    switch (action.type) {
        case "SET_VISIBLE": 
            return { ...state, visible: action.payload, };
        case "SET_TEXT": 
            return { ...state, text: action.payload, };
    }
};

export default LoadingReducer;
