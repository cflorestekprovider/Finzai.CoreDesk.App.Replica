// context/Catalog/CatalogsContext.tsx
import React, { createContext, useReducer, useEffect, ReactNode, useContext } from 'react';
import { CatalogInitialState, CatalogReducer } from '../../reducers/Catalog/CatalogReducer';
import { getAllCatalogs, getCountries, getStatesByCountryId, getMunicipalitiesByStateId } from '../../api/dataentry/catalogs/catalogs';

export interface CatalogOption {
    value: string;
    option: string;
    isVisible:boolean;
    sortOrder:number;
}

export interface CatalogsState {
    catalogs: Record<string, CatalogOption[]>;
    countryOptions: CatalogOption[];
    stateOptions: CatalogOption[];
    cityOptions: CatalogOption[];
    loading: boolean;
    error: string | null;
}

interface CatalogsContextValue extends CatalogsState {
    fetchCatalogs: () => Promise<void>;
    fetchStatesByCountry: (countryId: number, resetFields?: boolean) => Promise<void>;
    fetchCitiesByState: (stateId: number, resetFields?: boolean) => Promise<void>;
}

const CatalogContext = createContext<CatalogsContextValue | undefined>(undefined);

interface CatalogsProviderProps {
    children: ReactNode;
}

export const CatalogsProvider: React.FC<CatalogsProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(CatalogReducer, CatalogInitialState);

    const fetchCatalogs = async () => {
        dispatch({ type: 'SET_LOADING', payload: true });
        try {
            const response = await getAllCatalogs();
            const catalogMap = response.catalogs.reduce((acc: Record<string, any>, catalog: any) => {
                acc[catalog.key] = catalog.options.map((opt: any) => ({
                    value: opt.id.toString(),
                    option: opt.value,
                    isVisible: opt.isVisible,
                    sortOrder: opt.sortOrder
                }));
                return acc;
            }, {});
            dispatch({ type: 'SET_CATALOGS', payload: catalogMap });

            const { countries } = await getCountries();
            const countryOptions = countries.map((country: any) => ({
                option: country.description,
                value: country.id.toString(),
            }));
            dispatch({ type: 'SET_COUNTRY_OPTIONS', payload: countryOptions });

        } catch (err: any) {
            console.error("Error al cargar los catálogos:", err);
            dispatch({ type: 'SET_ERROR', payload: err.message || 'Error al cargar catálogos' });
        }
    };

    const fetchStatesByCountry = async (countryId: number, resetFields: boolean = true) => {
        if (!countryId) return;

        dispatch({ type: 'SET_LOADING', payload: true });
        try {
            const { states } = await getStatesByCountryId(countryId);
            const stateOptions = states.map((st: any) => ({
                option: st.description,
                value: st.id.toString(),
            }));
            dispatch({ type: 'SET_STATE_OPTIONS', payload: stateOptions });

            if (resetFields) {
                dispatch({ type: 'RESET_CITIES' });
            }
        } catch (err: any) {
            console.error("Error al cargar estados:", err);
            dispatch({ type: 'SET_ERROR', payload: err.message || 'Error al cargar estados' });
        }
    };

    const fetchCitiesByState = async (stateId: number) => {
        if (!stateId) return;

        dispatch({ type: 'SET_LOADING', payload: true });
        try {
            const cities = await getMunicipalitiesByStateId(stateId);
            const cityOptions = cities.municipalities.map((city: any) => ({
                option: city.description,
                value: city.id.toString(),
            }));
            dispatch({ type: 'SET_CITY_OPTIONS', payload: cityOptions });
        } catch (err: any) {
            console.error("Error al cargar ciudades:", err);
            dispatch({ type: 'SET_ERROR', payload: err.message || 'Error al cargar ciudades' });
        }
    };

    useEffect(() => {
        fetchCatalogs();
    }, []);

    const contextValue: CatalogsContextValue = {
        ...state,
        fetchCatalogs,
        fetchStatesByCountry,
        fetchCitiesByState,
    };
    

    return (
        <CatalogContext.Provider value={contextValue}>
            {children}
        </CatalogContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useCatalogs = (): CatalogsContextValue => {
    const context = useContext(CatalogContext);
    if (context === undefined) {
        throw new Error('useCatalogs debe ser usado dentro de un CatalogsProvider');
    }
    return context;
};