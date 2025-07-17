export interface CustomerData
{
    customer: Customer,
    phones: Phone[],
    emails: Email[],
    identifications: Identification[],
    dependents: Dependent[]
}

export interface Customer {
  id: string;
  isVisible: boolean;
  birthDay: string;
  applicantTypeId: string;
  categoryEconomicActivityId: string;
  statusId: string;
  directPoliticalId: string;
  economicActivityId: string;
  genderId: string;
  maritalStatusId: string;
  migratoryStatusId: string;
  nationalityId: string;
  ocupacionId: string;
  profesionId: string;
  regimenMaritalStatusId: string;
  relationWithHolderId: string;
  studiesId: string;
  typeId: string;
  firstName: string;
  secondName: string;
  firstLastName: string;
  secondLastName: string;
  title: string;
}

export interface Phone {
  id: string;
  number: string;
  isPrincipal: boolean;
  customerId: string;
}

export interface Email {
  id: string;
  email: string;
  isPrincipal: boolean;
  customerId: string;
}

export interface Identification {
  id: string;
  number: string;
  typeId: string;
  emissionPlace: string;
  emissionDate: string;
  expirationDate: string;
  statusId: string;
  customerId: string;
}

export interface Dependent {
  id: string;
  name: string;
  age: string;
  customerId: string;
}