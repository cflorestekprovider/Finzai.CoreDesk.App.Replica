import React, { createContext, useContext, useReducer, useState } from 'react';
import DashboardReducer, { DashboardState, DashboardInitialState, Features } from "../reducers/DashboardReducer";
import Layout from "../api/models/DashboardModels/LayoutModel";
import { IndicatorSize } from "../api/models/WidgetsModel/WidgetsModel";
import SelectModel from '../api/models/SelectModel/SelectModel';

interface DashboardContextValue {
  state: DashboardState,
  setDashboardToShow: (id: number) => void;
  setBoardItem: (dashboard: any) => void;
  getDashboardToShow: () => number;
  getBoardItem: () => any;
  setIndicatorSize: (size: IndicatorSize) => void;
  addLayout: (layout: Layout) => void;
  removeLayout: (layoutKey: string) => void;
  setLayoutKey: (key: string) => void;
  setLayoutIndex: (index: number) => void;
  updateLayout: (updatedLayout: Layout) => void;
  setLayouts: (layouts: Layout[]) => void;
  getLayouts: () => any;
  setDashboardName: (name: string) => void;
  getDashboardName: () => string;
  setBoardOptions: (options: SelectModel[]) => void;
  setDataInput: (feature: Features, tenantId: string, customerId: number, quoteId: number, creditLineId: number, creditId: number) => void;
  setConfiguration: (configuration: any) => void;
  setCurrencyId: (currencyId: number) => void;
  setLanguageId: (languageId: number) => void;
  setUseCreditQuoter: (use: boolean) => void;
  setUseVehicleQuoter: (use: boolean) => void;
  setCreditQuoterType: (type: number) => void;
  setVehicleQuoterType: (type: number) => void;
  setShowDashboardSettings: (show: boolean) => void;
  getShowDashboardSettings: () => boolean;
  currentRoleName: string;
  setCurrentRoleName: (name: string) => void;
  isAdminRole: boolean;
  setIsAdminRole: (isAdmin: boolean) => void;
  roleId: string;
  setRoleId: (id: string) => void;

}

const DashboardContext = createContext<DashboardContextValue | null>(null);

interface DashboardContextProviderProps {
  children: React.ReactNode;
}

const DashboardContextProvider: React.FC<DashboardContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(DashboardReducer, DashboardInitialState);

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

  const setDataInput = (feature: Features, tenantId: string, customerId: number, quoteId: number, creditLineId: number, creditId: number) => {
    dispatch({
      type: "SET_DATA_INPUT",
      payload: {
        feature,
        tenantId,
        customerId,
        quoteId,
        creditLineId,
        creditId
      },
    });
  };

  const getDashboardToShow = () => {
    return state.dashboardToShow;
  }

  const getBoardItem = () => {
    return state.boardItem;
  }

  const setIndicatorSize = (size: IndicatorSize) => {
    dispatch({
      type: "SET_INDICATOR_SIZE",
      payload: size,
    });
  };

  const setLayouts = (layouts: Layout[]) => {
    dispatch({
      type: "SET_LAYOUTS",
      payload: layouts,
    });
  };

  const getLayouts = () => {
    return state.layouts;
  }

  const addLayout = (layout: Layout) => {
    dispatch({
      type: "ADD_LAYOUT",
      payload: layout,
    });
  };

  const removeLayout = (layoutKey: string) => {
    dispatch({
      type: "REMOVE_LAYOUT",
      payload: layoutKey,
    });
  };

  const setLayoutKey = (key: string) => {
    dispatch({
      type: "SET_LAYOUT_KEY",
      payload: key,
    });
  };

  const setLayoutIndex = (index: number) => {
    dispatch({
      type: "SET_LAYOUT_INDEX",
      payload: index,
    });
  };

  const updateLayout = (updatedLayout: Layout) => {
    dispatch({
      type: "UPDATE_LAYOUT",
      payload: updatedLayout,
    });
  };

  const setDashboardName = (name: string) => {
    dispatch({
      type: "SET_DASHBOARD_NAME",
      payload: name,
    });
  };

  const setBoardOptions = (options: SelectModel[]) => {
    dispatch({
      type: "SET_BOARDS_OPTIONS",
      payload: options,
    });
  };

  const setConfiguration = (configuration: any) => {
    dispatch({
      type: "SET_CONFIGURATION",
      payload: configuration,
    });
  };

  const getDashboardName = () => {
    return state.dashboardName;
  }

  const setCurrencyId = (currencyId: number) => {
    dispatch({
      type: "SET_CURRENCY_ID",
      payload: currencyId
    });
  };

  const setLanguageId = (languageId: number) => {
    dispatch({
      type: "SET_LANGUAGE_ID",
      payload: languageId
    });
  };

  const setUseCreditQuoter = (use: boolean) => {
    dispatch({
      type: "SET_USE_CREDIT_QUOTER",
      payload: use
    });
  };

  const setUseVehicleQuoter = (use: boolean) => {
    dispatch({
      type: "SET_USE_VEHICLE_QUOTER",
      payload: use
    });
  };

  const setCreditQuoterType = (type: number) => {
    dispatch({
      type: "SET_CREDIT_QUOTER_TYPE",
      payload: type
    });
  };

  const setVehicleQuoterType = (type: number) => {
    dispatch({
      type: "SET_VEHICLE_QUOTER_TYPE",
      payload: type
    });
  };

  const setShowDashboardSettings = (show: boolean) => {
    dispatch({
      type: "SET_SHOW_DASHBOARD_SETTINGS",
      payload: show
    });
  };

  const getShowDashboardSettings = () => {
    return state.showDashboardSettings;
  };

  const setCurrentRoleName = (name: string) => {
    dispatch({
      type: "SET_CURRENT_ROLE_NAME",
      payload: name
    });
  };

  const setIsAdminRole = (isAdmin: boolean) => {
    dispatch({
      type: "SET_IS_ADMIN_ROLE",
      payload: isAdmin
    });
  };

    const setRoleId = (id: string) => {
        dispatch({
            type: "SET_ROLE_ID",
            payload: id
        });
    };

  return (
    <DashboardContext.Provider
      value={{
        state,
        setDashboardToShow,
        setBoardItem,
        getDashboardToShow,
        getBoardItem,
        setIndicatorSize,
        addLayout,
        removeLayout,
        setLayoutKey,
        setLayoutIndex,
        updateLayout,
        setLayouts,
        getLayouts,
        setDashboardName,
        getDashboardName,
        setDataInput,
        setBoardOptions,
        setConfiguration,
        setCurrencyId,
        setLanguageId,
        setUseCreditQuoter,
        setUseVehicleQuoter,
        setCreditQuoterType,
        setVehicleQuoterType,
        setShowDashboardSettings,
        getShowDashboardSettings,
        currentRoleName: state.currentRoleName,
        setCurrentRoleName,
        isAdminRole: state.isAdminRole,
        setIsAdminRole,
        roleId: state.roleId,
        setRoleId,
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
