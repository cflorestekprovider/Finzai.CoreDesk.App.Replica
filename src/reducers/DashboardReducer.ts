export enum DashboardType {
    "DashBoardViewer" = 1,
    "DashBoardSettings" = 2 
}

export const DashboardInitialState = {
    dashboardToShow: DashboardType.DashBoardViewer ,
    boardItem: 0
};

interface DasboardState {
    dashboardToShow: DashboardType;
    boardItem: number;
}

type DashboardAction =
    | { type: "SET_DASHBOARD_TO_SHOW"; payload: number }
    | { type: "SET_BOARD_ITEM"; payload: number };



const DashboardReducer = (
    state: DasboardState = DashboardInitialState,
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
    }
};

export default DashboardReducer;
