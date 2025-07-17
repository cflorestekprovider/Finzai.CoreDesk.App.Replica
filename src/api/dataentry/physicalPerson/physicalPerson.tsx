import { AddressState, ExpenseState, ReferenceState } from '../../../reducers/InitialStates/PhysicalPersonState';
import { get, post } from '../../httpClient/httpClient'; 
import { CustomerData } from '../../models/DataentryModels/CustomerDataModel';

const OriginationApi = import.meta.env.VITE_ORIGINATION_API;
const RegistrationApi = import.meta.env.VITE_REGISTRATION_API;

export const CreateCustomer = async ( customer : any) => {
    try {
        const url = `${OriginationApi}CreateCustomer`;
        const response = await post<any, string>(url, customer);
        return response;

        
    } catch (error: any) {
        throw error;
    }
};

export const UpdateCustomer = async ( customer : any) => {
    try {
        const url = `${OriginationApi}UpdateCustomer`;
        const response = await post<any, string>(url, customer);
        return response;

        
    } catch (error: any) {
        throw error;
    }
};

export const GetGeneralDataCustomerById = async ( id : string) => {
    const url = `${OriginationApi}GetGeneralDataCustomerById/${id}`;
    const response = await get<any>(url);

    if (!response) return [];
   
    return response;
};

export const SearchCustomer = async () => {
    const url = `${OriginationApi}SearchCustomerById`;
    const response = await post<any, any>(url, {});

    if (!response) return [];
   
    return response;
};

export const CreateAddress = async ( address : any) => {
    try {
        const url = `${OriginationApi}CreateAddress`;
        const response = await post<any, any>(url, {address: address});
        return response;
        
    } catch (error: any) {
        throw error;
    }
};

export const CreateReference = async ( reference : any) => {
    try {
        const url = `${OriginationApi}CreateReference`;
        const response = await post<any, any>(url, {reference: reference});
        return response;
        
    } catch (error: any) {
        throw error;
    }
};

export const GetPostalCodeDetail = async ( postalCode : number) => {
    const url = `${RegistrationApi}GetPostalCodeDetail?postalCode=${postalCode}`;
    const response = await get<any>(url);

    if (!response) return [];
   
    return response;
};

export const GetPersonNameDetail = async ( personId : any) => {
    const url = `${OriginationApi}GetPersonNameDetail?Id=${personId}`;
    const response = await get<any>(url);

    if (!response) return [];
   
    return response;
};

export const UpdateAddress = async ( address : AddressState) => {
    try {
        const url = `${OriginationApi}UpdateAddress`;
        const response = await post<any, any>(url, {address: address});
        return response;
        
    } catch (error: any) {
        throw error;
    }
};

export const UpdateReference = async ( reference : ReferenceState) => {
    try {
        const url = `${OriginationApi}UpdateReference`;
        const response = await post<any, any>(url, {reference: reference});
        return response;
        
    } catch (error: any) {
        throw error;
    }
};


export const CreateJob = async (jobModel: any): Promise<any | null> => {
    try {
        const url = `${OriginationApi}CreateJob`; 
        const response = await post<any, CustomerData>(url, jobModel);

        return response ?? null;
    } catch (error) {
        console.error("Error al crear el empleo:", error);
        return null;
    }
};

export const UpdateJob = async (jobModel: any): Promise<any | null> => {
    try {
        const url = `${OriginationApi}UpdateJob`;
        const response = await post<any, CustomerData>(url, jobModel);

        return response ?? null;
    } catch (error) {
        console.error("Error al crear el empleo:", error);
        return null;
    }
};

export const CreateExpense = async ( expense : any) => {
    try {
        const url = `${OriginationApi}CreateExpense`;
        const response = await post<any, any>(url, {expense: expense});
        return response;
        
    } catch (error: any) {
        throw error;
    }
};

export const UpdateExpense = async ( expense : ExpenseState) => {
    try {
        const url = `${OriginationApi}UpdateExpense`;
        const response = await post<any, any>(url, {expense: expense});
        return response;
        
    } catch (error: any) {
        throw error;
    }
};