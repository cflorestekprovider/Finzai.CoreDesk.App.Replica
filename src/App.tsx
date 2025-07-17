import { StrictMode, useEffect } from 'react';
import DataEntry from './components/Layouts/Dataentry/MainLayout/DataEntry';
import Dashboard from './components/Layouts/Dashboard/Dashboard';
import DashboardContextProvider, { useDashboardContext } from './context/DashboardContext';
import { useTranslation } from 'react-i18next';
import "./i18n";

import "./assets/css/style_coreDesk.css"
import Settings from './components/Layouts/Settings/Settings';
import { Features } from './reducers/DashboardReducer';
import { getTenantSettings } from './api/settings/Settings';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingContextProvider from './context/LoadingContext';
import Loading from './utils/Loading/Loading';
import { CustomerContextProvider } from './context/DataEntry/PhysicalPerson/CustomerDataContext';
import CreditlineCatalog from './components/Layouts/CreditlineCatalog/CreditlineCatalog';
import { CatalogsProvider } from './context/Catalog/CatalogContext';
import { getRolesByTenantId } from './api/dashboard/Dashboard';

interface AppProps {
  config: {
    feature?: Features;
    language?: string;
    customerId?: number;
    quoteId?: number;
    creditLineId?: number;
    creditId?: number;
    tenantId: string;
    roleId: string;
  };
}

const DataInputHandler: React.FC<{ config: AppProps["config"] }> = ({ config }) => {
    const { setDataInput, state, setConfiguration, setCurrentRoleName, setIsAdminRole, setRoleId } = useDashboardContext();

    useEffect(() => {
        setDataInput(config.feature ?? Features.Nothing, config.tenantId, config.customerId ?? 0, config.quoteId ?? 0, config.creditLineId ?? 0, config.creditId ?? 0);
    }, []);

    useEffect(() => {
        if (config.roleId) {
            setRoleId(config.roleId);
        }
    }, [config.roleId]);

    useEffect(() => {
        const fetchGetTenantSettings = async () => {
            const response = await getTenantSettings(state.tenantId);
            if (response) {
                setConfiguration(response);
            }
        };
        if (state.tenantId !== "") {
            fetchGetTenantSettings();
        }
    }, [state.tenantId]);

    useEffect(() => {
        const fetchCurrentRole = async () => {
            try {
                const roles = await getRolesByTenantId(config.tenantId);
                const matchedRole = roles?.find((r: any) => r.id === config.roleId);

                if (matchedRole) {
                    setCurrentRoleName(matchedRole.name);
                    setIsAdminRole(matchedRole.isAdmin === true);
                }

                console.log("Rol obtenido:", matchedRole?.name, matchedRole?.isAdmin);
            } catch (error) {
                console.error("Error al obtener el rol del tenant:", error);
            }
        };

        fetchCurrentRole();
    }, [config.tenantId, config.roleId]);

    return null;
};

const App: React.FC<AppProps> = (
  { config =
    {
      feature: Features.Nothing,
      language: 'es_mx',
      customerId: 0,
      quoteId: 0,
      creditLineId: 0,
      creditId: 0,
      tenantId: "",
      roleId: ""
  }
    }
) => {

    const { i18n } = useTranslation();

    useEffect(() => {
        if (config.language) {
            i18n.changeLanguage(config.language);
        }
    }, [config.language, i18n]);

    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = `${import.meta.env.BASE_URL}assets/css/style_coreDesk.css`;
        link.id = "dynamic-style-coreDesk";
        document.head.appendChild(link);
    }, []);



    return (
        <LoadingContextProvider>
            <CatalogsProvider>
                <DashboardContextProvider>
                    <CustomerContextProvider>
                        <StrictMode>
                            <ToastContainer />
                            <Loading />
                            <div className="container-fluid bg-container-main no-width-restrictions">
                                {config.feature === Features.DataEntry && <DataEntry />}
                                {config.feature === Features.Dashboard && <Dashboard />}
                                {config.feature === Features.Settings && <Settings />}
                                {config.feature === Features.CreditlineCatalog && <CreditlineCatalog />}
                            </div>


                {/* Colocamos DataInputHandler dentro del contexto */}
                            <DataInputHandler config={config} />

                        </StrictMode>
                    </CustomerContextProvider>
                </DashboardContextProvider>
            </CatalogsProvider>
        </LoadingContextProvider>
    );
};

export default App;