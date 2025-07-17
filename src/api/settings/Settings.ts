import { get, post } from '../httpClient/httpClient'; 
const ConfigurationApi = import.meta.env.VITE_CONFIGURATION_API;


export const getTenantSettings = async (tenantId:string) => {
    const url = `${ConfigurationApi}GetTenantSettings/${tenantId}`;
    const response = await get<any>(url);

    if (!response) return null;
   
    return response;
};

export const saveTenantSettings = async (settings:any) => {
    try {
        const url = `${ConfigurationApi}CreateUpdateTenantSettings`;
        const response = await post<any, any>(url, settings);
        return response;
        
    } catch (error: any) {
        throw error;
    }
};