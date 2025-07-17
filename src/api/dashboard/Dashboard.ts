import { get, post, put } from '../httpClient/httpClient'; 
import DashboardModel from "../models/DashboardModels/DashboardModel";
import { IndicatorSize } from '../models/WidgetsModel/WidgetsModel';
const ConfigurationApi = import.meta.env.VITE_CONFIGURATION_API;


export const getLayoutsComponents = async () => {
    const url = `${ConfigurationApi}GetLayout`;
    const response = await get<any>(url);

    if (!response) return [];
   
    return response;
};

export const getDashboardsByUserId = async (userId: number) => {
    const url = `${ConfigurationApi}GetDashboardsByUserId/${userId}`;
    const response = await get<any>(url);
    return response;    
};

export const createDashboard = async ( dashboard : DashboardModel) => {
    try {
        const url = `${ConfigurationApi}CreateDashboard`;
        const response = await post<any, DashboardModel>(url, dashboard);
        return response;

        
    } catch (error: any) {
        throw error;
    }
};

export const updateDashboard = async ( dashboardId: number, dashboard : DashboardModel) => {
    try {
        const url = `${ConfigurationApi}UpdateDashboard/${dashboardId}`;
        const response = await put<any, DashboardModel>(url, dashboard);
        return response;

    } catch (error: any) {
        throw error;
    }
};

export const getDashboardLayoutByDashboardId = async (dashboardId: number) => {
    try {
        const url = `${ConfigurationApi}GetDashboardLayoutByDashboardId/${dashboardId}`;
        const response = await get<any>(url);
        return response;  

    } catch (error: any) {
        throw error;
    }
};


export const getWidgets = async (size: IndicatorSize) => {
    try {
        const url = `${ConfigurationApi}GetWidgets`;
        const response = await get<any>(url);

        let widgets: any[] = [];
        if(response)
        {
            widgets = response.widgets.filter((x:any) => x.widgetSize == size );
        }

        return widgets;  

    } catch (error: any) {
        throw error;
    }
};

export const getWidgetData = async (Id: number) => {
    const url = `${ConfigurationApi}GetWidgetData/${Id}`;
    const response = await get<any>(url);
    if(response)
        return response.widgetDto;
    
    return null;
};

export const getRolesByTenantId = async (tenantId: string) => {
    const url = `${ConfigurationApi}GetRolesByTenantId/${tenantId}`;
    const response = await get<any>(url);
    if (response)
        return response;

    return null;
};

export const saveWidgetProfiles = async (tenantId: string, roleId: string, widgetIds: number[]) => {
    const url = `${ConfigurationApi}SaveWidgetProfiles`;
    const payload = { tenantId, roleId, widgetIds };

    return await post<any>(url, payload);
};

export const getWidgetProfileByTenantId = async (tenantId: string, roleId: string) => {
    const url = `${ConfigurationApi}GetWidgetProfileByTenantId/${tenantId}/${roleId}`;

    const response = await get<{ widgetIds: number[] }>(url);

    return response.widgetIds ?? [];
};

