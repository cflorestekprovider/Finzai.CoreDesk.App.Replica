import { GeneralDataInitialState, GeneralDataState } from "../../InitialStates/PhysicalPersonState";

type NodeKey = keyof GeneralDataState;


// Tipos de acciones del reducer
export type CustomerAction =
  | {
    type: 'SET_FIELD'; payload: {
      node: NodeKey;
      key: string;
      value: any;
    }
  }
  | { type: 'SET_CUSTOMER'; payload: any }
  | { type: 'SET_ADDRESS'; payload: any }
  | { type: 'SET_ADDRESSES'; payload: any }
  | { type: 'SET_EXPENSE'; payload: any }
  | { type: 'SET_EXPENSES'; payload: any }
  | { type: 'SET_REFERENCE'; payload: any }
  | { type: 'SET_REFERENCES'; payload: any }
  | { type: 'SET_JOB'; payload: any }
  | { type: 'SET_JOBS'; payload: any }
  | { type: 'RESET_FORM'; payload: any }
  | { type: 'SET_PHONES'; payload: any }
  | { type: 'SET_DEPENDENTS'; payload: any }
  | { type: 'SET_EMAILS'; payload: any }
  | { type: 'SET_IDENTIFICATIONS'; payload: any };


export function CustomerReducer(
  state: GeneralDataState = GeneralDataInitialState,
  action: CustomerAction): GeneralDataState {
  switch (action.type) {
    case 'SET_FIELD':
      const { node, key, value } = action.payload;
      if (!state[node]) return state;
      return {
        ...state,
        [node]: {
          ...state[node],
          [key]: value,
        },
      };
    case 'SET_CUSTOMER':
      return {
        ...state,
        ...action.payload
      };
    case 'SET_ADDRESS':
      return {
        ...state,
        address: {
          ...state.address,
          ...action.payload
        }
      };
    case 'SET_ADDRESSES':
    return {
      ...state,
      addresses: action.payload
    };
    case 'SET_EXPENSE':
      return {
        ...state,
        expense: {
          ...state.expense,
          ...action.payload
        }
      };
    case 'SET_EXPENSES':
    return {
      ...state,
      expenses: action.payload
    };
    case 'SET_REFERENCE':
      return {
        ...state,
        reference: {
          ...state.reference,
          ...action.payload
        }
      };
    case 'SET_REFERENCES':
    return {
      ...state,
      references: action.payload
    };
    case 'SET_JOB':
      return {
        ...state,
        job: {
          ...state.job,
          ...action.payload
        }
      };
    case 'SET_JOBS':
    return {
      ...state,
      jobs: action.payload
    };
    case 'SET_PHONES':
      return {
        ...state,
        phones: action.payload
      };
    case 'SET_DEPENDENTS':
      return {
        ...state,
        dependents: action.payload
      };
    case 'SET_EMAILS':
      return {
        ...state,
        emails: action.payload
      };
    case 'SET_IDENTIFICATIONS':
      return {
        ...state,
        identifications: action.payload
      };
    case 'RESET_FORM':
      return GeneralDataInitialState;
    default:
      return state;
  }
}