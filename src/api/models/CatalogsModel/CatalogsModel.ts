export interface CatalogEntity {
    id: number;
    name: string;
    description: string;
    isDeleted:boolean;
}
  

export interface CompanyType extends CatalogEntity {
    
}
  
export interface JobPosition extends CatalogEntity {
    
}

export interface FinancingType extends CatalogEntity {
    
}

export interface FinancingDestination extends CatalogEntity {
    
}

export interface UserQuantity extends CatalogEntity {
    minimumUser:number;
    maximunUser:number;
}

export interface Country extends CatalogEntity {
    
}

export interface Neighborhood extends CatalogEntity {
    postalCodeId:number;
}

export interface State extends CatalogEntity {
    countryId:number;
}

export interface Municipality extends CatalogEntity {
    stateId:number;
}

export interface DetailFinancialPlan extends CatalogEntity {
    financialPlanModulesDetails:CatalogEntity[]
}

export interface FinancialPlan extends CatalogEntity {
    userQuantityId:number;
    price:number;
    userQuantity:UserQuantity;
}

export interface PostalCodeDetail {
    postalCode: string;
    countryId: number;
    countryName: string;
    stateId: number;
    stateName: string;
    municipalityId: number;
    municipalityName: string;
    neighborhoods:Neighborhood[];
}