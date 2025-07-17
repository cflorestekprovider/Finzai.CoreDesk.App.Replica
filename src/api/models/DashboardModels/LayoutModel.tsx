interface Widget {
    widgetId: number;
    widgetOrder: number;
}

interface LayoutDetail {
    id: number;
    dashboardLayoutId: number;
    dashboardLayout: {
        id: number;
        layoutId: number;
        layout: {
            id: number;
            name: string;
            description: string;
            isDeleted: boolean;
        };
        layoutOrder: number;
        dashboardId: number;
        dashboard: {
            id: number;
            name: string;
            userId: number;
            status: number;
        };
    };
    widgetId: number;
    order: number;
}

interface Layout {
    id: number,
    name: string,
    layoutId: number;
    layoutOrder: number;
    widgets: Widget[];
    layoutDetail: LayoutDetail[];
    layoutName: string;
    layoutKey:string;
}
export default Layout;
