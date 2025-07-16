import { createContext, useContext, useReducer } from "react";
import DashboardReducer, {DashboardInitialState} from "../reducers/DashboardReducer";

interface DashboardContextValue {
    setDashboardToShow: (id: number) => void;
    setBoardItem: (id: number) => void;
    getDashboardToShow: () => number;
    getBoardItem: () => number;
}

const DashboardContext = createContext<DashboardContextValue | null>(null);

interface DashboardContextProviderProps {
  children: React.ReactNode;
}

const DashboardContextProvider: React.FC<DashboardContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(DashboardReducer, DashboardInitialState );

  const setDashboardToShow = (id: number) => {
    dispatch({
      type: "SET_DASHBOARD_TO_SHOW",
      payload: id,
    });
  };

  const setBoardItem = (id: number) => {
    dispatch({
      type: "SET_BOARD_ITEM",
      payload: id,
    });
  };

  const getDashboardToShow = () => {
    return state.dashboardToShow;
  }

  const getBoardItem = () => {
    return state.boardItem;
  }

  return (
    <DashboardContext.Provider
      value={{
        setDashboardToShow,
        setBoardItem,
        getDashboardToShow,
        getBoardItem
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new Error("useDashboardContext must be used within DashboardContextProvider");
  }

  return context;
};

export default DashboardContextProvider;
