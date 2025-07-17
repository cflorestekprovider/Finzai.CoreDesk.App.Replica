export interface GeneralDataState {
  customer: CustomerState,
  address: AddressState,
  addresses: any[],
  expense: ExpenseState,
  expenses: any[],
  reference: ReferenceState,
  references: any[],
  jobs: any,
  job: JobState,
  phones: any,
  dependents: any,
  emails: any,
  identifications: any
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

export interface CustomerState {
  id: string | null;
  isVisible: boolean;
  clientTypeId: string | null;
  professionId: string | null;
  occupationId: string | null;
  firstLastName: string;
  secondLastName: string;
  firstName: string;
  secondName: string;
  genderId: string | null;
  countryBirthId: number;
  stateBirthId: number;
  municipalityBirthId: number;
  birthDay: string;
  age: string;
  nationalityId: string | null;
  migratoryStatusId: string | null;
  maritalStatusId: string | null;
  regimenMaritalStatusId: string | null;
  dependents: string;
  dependentAgeId: string | null;
  studiesId: string | null;
  titleId: string | null;
  categoryEconomicActivityId: string | null;
  economicActivityId: string | null;
  mainActivity: boolean;
  active: boolean;
  cellularCompanyId: string | null;
  phoneTypeId: string | null;
  cellularPhone: string;
  landlinePhone: string;
  extension: string;
  contactTime: string;
  email: string;
  identification: string;
  identificationType: string;
  emissionPlace: string;
  emissionDate: string;
  expirationDate: string;
  identificationStatus: string;
  directPoliticalId: string | null;
  applicantTypeId: string | null;
  relationWithHolderId: string | null;
  clientStatusId: string | null;
}

export interface AddressState {
  id: string | null;
  customerId: string;
  statusId: string | null;
  addressTypeId: string | null;
  propertyTypeId: string | null;
  propertyValue: number | null;
  mortgage: number | null;
  livingSinceDate: string;
  yearsResiding: Number | null;
  monthsResiding: Number | null;
  countryId: string | null;
  postalCode: string | null;
  stateId: string | null;
  cityId: string | null;
  municipalityId: string | null;
  neighborhoodId: string | null;
  street: string | null;
  exteriorNumber: string | null;
  interiorNumber: string | null;
  crossStreet: string | null;
  proofOfAddressId: string | null;
  marginalId: string | null;
  zoneTypeId: string | null;
  stateName: string | null;
  municipalityName: string | null;
}

export interface ExpenseState {
  id: string | null;
  customerId: string;
  expenseTypeId: string | null;
  expenseFrequencyId: string | null;
  amount: number | null;
  monthlyAmount: number | null;
  comments: string | null;
}

export interface ReferenceState {
  id: string | null;
  customerId: string;
  applicationId: string;
  referenceTypeId: string;
  referenceRelationId: string;
  phone: string | null;
  email: string | null;
  knownSince: string;
}

export const GeneralDataInitialState: GeneralDataState = {
  customer: {
    id: null,
    isVisible: true,
    clientTypeId: null,
    professionId: null,
    occupationId: null,
    firstLastName: '',
    secondLastName: '',
    firstName: '',
    secondName: '',
    genderId: null,
    countryBirthId: 0,
    stateBirthId: 0,
    municipalityBirthId: 0,
    birthDay: '',
    age: '',
    nationalityId: null,
    migratoryStatusId: null,
    maritalStatusId: null,
    regimenMaritalStatusId: null,
    dependents: '',
    dependentAgeId: null,
    studiesId: null,
    titleId: null,
    categoryEconomicActivityId: null,
    economicActivityId: null,
    mainActivity: false,
    active: false,
    cellularCompanyId: null,
    phoneTypeId: null,
    cellularPhone: "",
    landlinePhone: "",
    extension: '',
    contactTime: '',
    email: '',
    identification: '',
    identificationType: '',
    emissionPlace: '',
    emissionDate: '',
    expirationDate: '',
    identificationStatus: '',
    directPoliticalId: null,
    applicantTypeId: null,
    relationWithHolderId: null,
    clientStatusId: null,
  },
  phones: [],
  dependents: [],
  emails: [],
  identifications: [],
  address: {
    id: null,
    customerId: "",
    statusId: null,
    addressTypeId: null,
    propertyTypeId: null,
    livingSinceDate: "",
    countryId: null,
    postalCode: null,
    stateId: null,
    cityId: null,
    municipalityId: null,
    neighborhoodId: null,
    street: null,
    exteriorNumber: null,
    propertyValue: null,
    mortgage: null,
    proofOfAddressId: null,
    marginalId: null,
    zoneTypeId: null,
    interiorNumber: null,
    crossStreet: null,
    yearsResiding: null,
    monthsResiding: null,
    stateName: null,
    municipalityName: null
  },
  addresses: [],
  expense: {
    id: null,
    customerId: "",
    expenseTypeId: null,
    expenseFrequencyId: null,
    amount: 0,
    monthlyAmount:0,
    comments: ""
  },
  expenses: [],
  reference: {
    id: null,
    customerId: "",
    applicationId: "",
    referenceTypeId: "",
    referenceRelationId: "",
    phone:null,
    email: "",
    knownSince:""
  },
  references: [],
  job: {
    id: null,
    customerId: null,
    statusId: null,
    jobSituationId: null,
    jobTypeId: null,
    companyPartnerId: null,
    businessPersonId: null,
    legalName: null,
    commercialName: null,
    genericActivityId: null,
    specificActivityId: null,
    immediateBoss: null,
    bossPositionId: null,
    numberOfEmployeesId: null,
    employeeCode: null,
    positionId: null,
    startDate: null,
    endDate: null,
    yearsOfService: null,
    monthsOfService: null,
    paymentMethodId: null,
    frequencyPaymentId: null,
    currencyId: null,
    fixedIncome: null,
    variableIncome: null

  },
  jobs: []

};


export interface JobState {
  id: string | null,
  customerId: string | null,
  statusId: string | null,
  jobSituationId: string | null,
  jobTypeId: string | null,
  companyPartnerId: string | null,
  businessPersonId: string | null,
  legalName: string | null,
  commercialName: string | null,
  genericActivityId: string | null,
  specificActivityId: string | null,
  immediateBoss: string | null,
  bossPositionId: string | null,
  numberOfEmployeesId: string | null,
  employeeCode: string | null,
  positionId: string | null,
  startDate: string | null,
  endDate: string | null,
  yearsOfService: number | null,
  monthsOfService: number | null,
  paymentMethodId: string | null,
  frequencyPaymentId: string | null,
  currencyId: string | null,
  fixedIncome: number | null,
  variableIncome: number | null
}


export const emptyJob: JobState = {
  id: null,
  customerId: null,
  statusId: null,
  jobSituationId: null,
  jobTypeId: null,
  companyPartnerId: null,
  businessPersonId: null,
  legalName: null,
  commercialName: null,
  genericActivityId: null,
  specificActivityId: null,
  immediateBoss: null,
  bossPositionId: null,
  numberOfEmployeesId: null,
  employeeCode: null,
  positionId: null,
  startDate: null,
  endDate: null,
  yearsOfService: null,
  monthsOfService: null,
  paymentMethodId: null,
  frequencyPaymentId: null,
  currencyId: null,
  fixedIncome: 0,
  variableIncome: 0
};