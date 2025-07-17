import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Title from "../../BasicComponents/Title/Title";
import GeneralSettings from "./General/GeneralSettings";
import QuoterMoney from "./Quoter/Cash";
import QuoterVehicle from "./Quoter/Vehicle";
import { useDashboardContext } from "../../../context/DashboardContext";
import { useLoadingContext } from "../../../context/LoadingContext";
import { saveTenantSettings } from "../../../api/settings/Settings";
import { showErrorToast, showSuccessToast } from "../../../utils/ToastUtils/toastUtils";
import Button from "../../BasicComponents/Button/Button";
import { SaveIcon } from "../../../api/models/IconsModels/IconsModels";

const Settings: React.FC = () => {
    const { t } = useTranslation();

    const { state } = useDashboardContext();
    const { settings } = state;
    const { setVisible } = useLoadingContext();

    const [activeTab, setActiveTab] = useState("general");

    const renderTabContent = () => {
        switch (activeTab) {
            case "general":
                return <GeneralSettings />
            case "money":
                return <QuoterMoney />
            case "vehicle":
                return <QuoterVehicle />
            default:
                return null;
        }
    };

    
    const handleSave = async () => {

        try {

            if(settings.general.currencyId == 0){
                showErrorToast("Selecciona una moneda");
                return;
            }

            if(settings.general.useCreditQuoter)
            {
                if(settings.creditQuoter.quoterType == 0)
                {
                    showErrorToast("Selecciona un cotizador de crédito");
                    return;
                }
            }

            if(settings.general.useVehicleQuoter)
                {
                    if(settings.vehicleQuoter.quoterType == 0)
                    {
                        showErrorToast("Selecciona un cotizador de vehículo");
                        return;
                    }
                }

            setVisible(true);
            await saveTenantSettings(settings);
            showSuccessToast("Configuración guardada con éxito");
        } finally {
            setVisible(false);
        }
    };

    return (
        <div className="container-fluid bg-container-main no-width-restrictions bg-white pb-1">
            <div className="card">
                <div className="card-body">
                    <div className="tab-content">
                        <Title maintitle={t("settings.title")} />
                        <br />

                        {/* Tabs */}
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <button
                                    className={`nav-link fw-bold fs-6 ${activeTab === "general" ? "text-primary" : "text-secondary"}`}
                                    onClick={() => setActiveTab("general")}
                                >
                                    {t("settings.general")}
                                </button>
                            </li>
                            {state.settings.general.useVehicleQuoter && (
                                <li className="nav-item">
                                    <button
                                        className={`nav-link fw-bold fs-6 ${activeTab === "vehicle" ? "text-primary" : "text-secondary"}`}
                                        onClick={() => setActiveTab("vehicle")}
                                    >
                                        {t("quoter.vehicle")}
                                    </button>
                                </li>
                            )}
                            {state.settings.general.useCreditQuoter && (
                                <li className="nav-item">
                                    <button
                                        className={`nav-link fw-bold fs-6 ${activeTab === "money" ? "text-primary" : "text-secondary"}`}
                                        onClick={() => setActiveTab("money")}
                                    >
                                        {t("quoter.cash")}
                                    </button>
                                </li>
                            )}
                        </ul>
                        <br />
                        {/* Tab Content */}
                        {renderTabContent()}
                    </div>
                    <div className="col-12">
                        <hr />
                        <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
                            <Button
                                onClick={handleSave}
                                id='save'
                                title={t("buttons.save")}
                                type='saveButton'
                                icon={<SaveIcon />} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
