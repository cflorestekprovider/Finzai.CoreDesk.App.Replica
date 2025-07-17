import Layout from "../api/models/DashboardModels/LayoutModel";
import SelectModel from "../api/models/SelectModel/SelectModel";
import { IndicatorSize } from "../api/models/WidgetsModel/WidgetsModel";

export enum contentTypes {
  showDashboard = 2,
  createDashboard = 3,
}

export enum DashboardType {
  "DashBoardViewer" = 1,
  "DashBoardSettings" = 2
}

export enum Features {
  Nothing = 0,
  DataEntry = 1,
  Dashboard = 2,
  DocumentViewer = 3,
  Settings = 4,
  CreditlineCatalog = 5,
}

export const DashboardInitialState = {
  roleId: "",
  isAdminRole: false,
  currentRoleName: '',
  dashboardToShow: contentTypes.showDashboard,
  boardItem: 0,
  customerId: 0,
  quoteId: 0,
  creditLineId: 0,
  creditId: 0,
  indicatorSize: IndicatorSize.Small,
  layouts: [],
  layoutKey: "",
  layoutIndex: 0,
  dashboardName: "",
  boardOptions: [],
  feature: Features.Nothing,
  tenantId: "",
  settings: {
    tenantId: "",
    general: {
      currencyId: 0,
      languageId: 0,
      useCreditQuoter: false,
      useVehicleQuoter: false
    },
    creditQuoter: {
      quoterType: 0
    },
    vehicleQuoter: {
      quoterType: 0
    }
  },
  showDashboardSettings: false 
};

export interface DashboardState {
  roleId: string;
  isAdminRole: boolean;
  currentRoleName: string;
  dashboardToShow: contentTypes;
  boardItem: number;
  customerId: number;
  quoteId: number;
  creditLineId: number;
  creditId: number;
  indicatorSize: IndicatorSize;
  layouts: Layout[];
  layoutKey: string;
  layoutIndex: number;
  dashboardName: string;
  boardOptions: SelectModel[],
  feature: Features,
  settings: {
    tenantId: string,
    general: {
      currencyId: number,
      languageId: number,
      useCreditQuoter: boolean,
      useVehicleQuoter: boolean
    },
    creditQuoter: {
      quoterType: number
    },
    vehicleQuoter: {
      quoterType: number
    }

  }
  tenantId: string,
  showDashboardSettings: boolean;
}

type DashboardAction =
  | { type: "SET_DASHBOARD_TO_SHOW"; payload: number }
  | { type: "SET_BOARD_ITEM"; payload: number }
  | { type: "SET_INDICATOR_SIZE"; payload: IndicatorSize }
  | { type: "ADD_LAYOUT"; payload: Layout }
  | { type: "REMOVE_LAYOUT"; payload: string }
  | { type: "SET_LAYOUT_KEY"; payload: string }
  | { type: "SET_LAYOUT_INDEX"; payload: number }
  | { type: "SET_LAYOUTS"; payload: Layout[] }
  | { type: "SET_DASHBOARD_NAME"; payload: string }
  | { type: "UPDATE_LAYOUT"; payload: Layout }
  | { type: "SET_BOARDS_OPTIONS"; payload: SelectModel[] }
  | {
    type: "SET_WIDGET_IN_LAYOUT";
    payload: {
      layoutKey: string;
      layoutIndex: number;
      widgetId: number;
    };
  }
  | {
    type: "SET_DATA_INPUT"; payload: {
      feature: Features,
      tenantId: string,
      customerId: number;
      quoteId: number;
      creditLineId: number;
      creditId: number;
    };
  }
  | {
    type: "SET_CONFIGURATION"; payload: {
      tenantId: string,
      general: {
        currencyId: number,
        languageId: number,
        useCreditQuoter: boolean,
        useVehicleQuoter: boolean
      },
      creditQuoter: {
        quoterType: number
      },
      vehicleQuoter: {
        quoterType: number
      }
    };
  }
  | { type: "SET_CURRENCY_ID"; payload: number }
  | { type: "SET_LANGUAGE_ID"; payload: number }
  | { type: "SET_USE_CREDIT_QUOTER"; payload: boolean }
  | { type: "SET_USE_VEHICLE_QUOTER"; payload: boolean }
  | { type: "SET_CREDIT_QUOTER_TYPE"; payload: number }
  | { type: "SET_VEHICLE_QUOTER_TYPE"; payload: number }
  | { type: "SET_SHOW_DASHBOARD_SETTINGS"; payload: boolean }
  | { type: "SET_CURRENT_ROLE_NAME"; payload: string }
  | { type: "SET_IS_ADMIN_ROLE"; payload: boolean }
  | { type: "SET_ROLE_ID"; payload: string }




const DashboardReducer = (
  state: DashboardState = DashboardInitialState,
  action: DashboardAction
) => {
  switch (action.type) {
    case "SET_DASHBOARD_TO_SHOW": {
      return {
        ...state,
        dashboardToShow: action.payload,
      }
    }
    case "SET_BOARD_ITEM": {
      return {
        ...state,
        boardItem: action.payload,
      }
    }
    case "SET_INDICATOR_SIZE": {
      return {
        ...state,
        indicatorSize: action.payload,
      }
    }
    case "SET_LAYOUTS": {
      return {
        ...state,
        layouts: action.payload,
      }
    }
    case "ADD_LAYOUT": {
      return {
        ...state,
        layouts: [...state.layouts, action.payload],
      }
    }
    case "REMOVE_LAYOUT": {
      return {
        ...state,
        layouts: state.layouts.filter(layout => layout.layoutKey !== action.payload),
      };
    }
    case "SET_LAYOUT_KEY": {
      return {
        ...state,
        layoutKey: action.payload,
      }
    }
    case "SET_LAYOUT_INDEX": {
      return {
        ...state,
        layoutIndex: action.payload,
      }
    }
    case "SET_DASHBOARD_NAME": {
      return {
        ...state,
        dashboardName: action.payload,
      }
    }
    case "SET_WIDGET_IN_LAYOUT": {
      const { layoutKey, layoutIndex, widgetId } = action.payload;

      const updatedLayouts = state.layouts.map(layout => {
        if (layout.layoutKey !== layoutKey) return layout;

        const widgets = [...(layout.widgets || [])];
        const widgetIndex = widgets.findIndex(w => w.widgetOrder === layoutIndex);

        if (widgetIndex !== -1) {
          widgets[widgetIndex] = {
            ...widgets[widgetIndex],
            widgetId,
          };
        } else {
          widgets.push({
            widgetId,
            widgetOrder: layoutIndex,
          });
        }

        return {
          ...layout,
          widgets,
        };
      });

      return {
        ...state,
        layouts: updatedLayouts,
      };
    }
    case "SET_DATA_INPUT": {
      return {
        ...state,
        feature: action.payload.feature,
        tenantId: action.payload.tenantId,
        customerId: action.payload.customerId,
        quoteId: action.payload.quoteId,
        creditLineId: action.payload.creditLineId,
        creditId: action.payload.creditId,
        settings:{
          ...state.settings,
          tenantId: action.payload.tenantId
        }
      }
    }
    case "UPDATE_LAYOUT": {
      return {
        ...state,
        layouts: state.layouts.map(layout =>
          layout.layoutKey === action.payload.layoutKey
            ? action.payload
            : layout
        )
      };
    }
    case "SET_BOARDS_OPTIONS": {
      return {
        ...state,
        boardOptions: action.payload,
      }
    }
    case "SET_CONFIGURATION": {
      return {
        ...state,
        settings: action.payload
      }
    }
    case "SET_CURRENCY_ID":
      return {
        ...state,
        settings: {
          ...state.settings,
          general: {
            ...state.settings.general,
            currencyId: action.payload
          }
        }
      };

    case "SET_LANGUAGE_ID":
      return {
        ...state,
        settings: {
          ...state.settings,
          general: {
            ...state.settings.general,
            languageId: action.payload
          }
        }
      };

    case "SET_USE_CREDIT_QUOTER":
      return {
        ...state,
        settings: {
          ...state.settings,
          general: {
            ...state.settings.general,
            useCreditQuoter: action.payload
          }
        }
      };

    case "SET_USE_VEHICLE_QUOTER":
      return {
        ...state,
        settings: {
          ...state.settings,
          general: {
            ...state.settings.general,
            useVehicleQuoter: action.payload
          }
        }
      };

    case "SET_CREDIT_QUOTER_TYPE":
      return {
        ...state,
        settings: {
          ...state.settings,
          creditQuoter: {
            ...state.settings.creditQuoter,
            quoterType: action.payload
          }
        }
      };

    case "SET_VEHICLE_QUOTER_TYPE":
      return {
        ...state,
        settings: {
          ...state.settings,
          vehicleQuoter: {
            ...state.settings.vehicleQuoter,
            quoterType: action.payload
          }
        }
          };

    case "SET_SHOW_DASHBOARD_SETTINGS":
      return {
        ...state,
        showDashboardSettings: action.payload
      };

    case "SET_CURRENT_ROLE_NAME":
      return {
        ...state,
        currentRoleName: action.payload
      };

    case "SET_IS_ADMIN_ROLE":
      return {
        ...state,
        isAdminRole: action.payload
          };

    case "SET_ROLE_ID":
        return {
            ...state,
            roleId: action.payload,
        };
    }
};

export default DashboardReducer;
