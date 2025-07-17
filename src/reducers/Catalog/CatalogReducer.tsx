// reducers/Catalog/CatalogsReducer.tsx

import { CatalogsState, CatalogOption } from "../../context/Catalog/CatalogContext";

export const CatalogInitialState: CatalogsState = { 
    catalogs: {},
    countryOptions: [],
    stateOptions: [],
    cityOptions: [],
    loading: false,
    error: null,
}

export type CatalogsAction =
    | { type: 'SET_CATALOGS'; payload: Record<string, CatalogOption[]> }
    | { type: 'SET_COUNTRY_OPTIONS'; payload: CatalogOption[] }
    | { type: 'SET_STATE_OPTIONS'; payload: CatalogOption[] }
    | { type: 'SET_CITY_OPTIONS'; payload: CatalogOption[] }
    | { type: 'RESET_STATES_AND_CITIES' }
    | { type: 'RESET_CITIES' }
    | { type: 'SET_LOADING'; payload: boolean }
    | { type: 'SET_ERROR'; payload: string | null };

export function CatalogReducer(
  state: CatalogsState,
  action: CatalogsAction
): CatalogsState {
  switch (action.type) {
    case 'SET_CATALOGS':
        return { ...state, catalogs: action.payload, loading: false, error: null };
    case 'SET_COUNTRY_OPTIONS':
        return { ...state, countryOptions: action.payload, loading: false, error: null };
    case 'SET_STATE_OPTIONS':
        return { ...state, stateOptions: action.payload, loading: false, error: null };
    case 'SET_CITY_OPTIONS':
        return { ...state, cityOptions: action.payload, loading: false, error: null };
    case 'RESET_STATES_AND_CITIES':
        return { ...state, stateOptions: [], cityOptions: [] };
    case 'RESET_CITIES':
        return { ...state, cityOptions: [] };
    case 'SET_LOADING':
        return { ...state, loading: action.payload };
    case 'SET_ERROR':
        return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}