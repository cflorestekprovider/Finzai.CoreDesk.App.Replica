//import { CompanyType, Country, JobPosition, Municipality, Neighborhood, State, UserQuantity } from "../../api/models/CatalogsModel/CatalogsModel";
//import { SelectModel } from "../../api/models/SelectModel/SelectModel";

import SelectModel from "../../api/models/SelectModel/SelectModel";

 
export const CompanyTypesToSelectModel = (companyTypes: any[]): SelectModel[] => {
    return companyTypes.map((item) => ({
      option: item.description,  // Usamos `id` como opción (puede ser número o string)
      value: String(item.id), // `name` será el valor visible en el select
    }));
  };
 
  export const JobPositionToSelectModel = (jobPosition: any[]): SelectModel[] => {
    return jobPosition.map((item) => ({
      option: item.description,  // Usamos `id` como opción (puede ser número o string)
      value: String(item.id), // `name` será el valor visible en el select
    }));
  };
 
  export const UserQuantityToSelectModel = (userQuantity: any[]): SelectModel[] => {
    return userQuantity.map((item) => ({
      option: item.minimumUser + "-" + item.maximunUser + " Usuarios",  // Usamos `id` como opción (puede ser número o string)
      value: String(item.id), // `name` será el valor visible en el select
    }));
  };
 
  export const CountryToSelectModel = (country: any[]): SelectModel[] => {
    return country.map((item) => ({
      option: item.description,  // Usamos `id` como opción (puede ser número o string)
      value: String(item.id), // `name` será el valor visible en el select
    }));
  };
 
  export const StateToSelectModel = (state: any[]): SelectModel[] => {
    return state.map((item) => ({
      option: item.description,  // Usamos `id` como opción (puede ser número o string)
      value: String(item.id), // `name` será el valor visible en el select
    }));
  };
 
  export const MunicipalityToSelectModel = (municipality: any[]): SelectModel[] => {
    return municipality.map((item) => ({
      option: item.description,  // Usamos `id` como opción (puede ser número o string)
      value: String(item.id), // `name` será el valor visible en el select
    }));
  };
 
  export const NeighborhoodToSelectModel = (neighborhoods: any[]): SelectModel[] => {
    return neighborhoods.map((item) => ({
      option: item.description,  // Usamos `id` como opción (puede ser número o string)
      value: String(item.id), // `name` será el valor visible en el select
    }));
  };
 