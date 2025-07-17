import { get, post, put } from '../../httpClient/httpClient'; 
import { CreditlinePayload } from '../../models/Creditline/CreditlineCatalog';
const OriginationApi = import.meta.env.VITE_ORIGINATION_API;

/**
 * Service for managing creditline catalogs.
 * Provides methods to get, create, and update creditlines.
 */

export const getCreditlinesByTenantId = async (tenantId: string) => {
    const url = `${OriginationApi}CreditlineCatalog/GetAll?tenantId=${tenantId}`;
    const response = await get<any>(url);

    if (!response) return [];
   
    return response;
};

export const getCreditlineById = async (creditlineId: string, tenantId: string) => {
    const url = `${OriginationApi}CreditlineCatalog/GetById?id=${creditlineId}&tenantId=${tenantId}`;
    const response = await get<any>(url);

    if (!response) return {};
   
    return response;
};

export const createCreditline = async (creditline: CreditlinePayload) => {
    const url = `${OriginationApi}CreditlineCatalog/Create`;
    const response = await post<any, CreditlinePayload>(url, creditline);

    if (!response) return 0;
   
    return response;
};

export const updateCreditline = async (creditline: CreditlinePayload) => {
    const url = `${OriginationApi}CreditlineCatalog/Update`;
    const response = await put<any, CreditlinePayload>(url, creditline);

    if (!response) return false;
   
    return response;
};