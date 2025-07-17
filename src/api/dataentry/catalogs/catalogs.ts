import { get } from '../../httpClient/httpClient'; 
const OriginationApi = import.meta.env.VITE_ORIGINATION_API;
const RegistrationApi = import.meta.env.VITE_REGISTRATION_API;

export const getAllCatalogs = async () => {
    const url = `${OriginationApi}GetAllCatalogs`;
    const response = await get<any>(url);

    if (!response) return [];
   
    return response;
};

export const getCountries = async () => {
    const url = `${RegistrationApi}GetCountries`;
    const response = await get<any>(url);

    if (!response) return [];
   
    return response;
};

export const getStatesByCountryId = async (countryId: number) => {
    const url = `${RegistrationApi}GetStatesByCountryId?countryId=${countryId}`;
    const response = await get<any>(url);

    if (!response) return [];
   
    return response;
};

export const getMunicipalitiesByStateId = async (stateId: number) => {
    const url = `${RegistrationApi}GetMunicipalitiesByStateId?stateId=${stateId}`;
    const response = await get<any>(url);

    if (!response) return [];
   
    return response;
};