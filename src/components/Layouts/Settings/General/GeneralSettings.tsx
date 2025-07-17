import { useTranslation } from "react-i18next";
import Title from "../../../BasicComponents/Title/Title";
import LanguageSelector from "../../../BasicComponents/LanguageSelector/LanguageSelector";
import SelectModel from "../../../../api/models/SelectModel/SelectModel";
import SimpleSelect from "../../../BasicComponents/SimpleSelect/SimpleSelect";
import { useDashboardContext } from "../../../../context/DashboardContext";
import { showInfoToast } from "../../../../utils/ToastUtils/toastUtils";

const GeneralSettings = () => {
    const { t } = useTranslation();
    const { state, setCurrencyId, setUseCreditQuoter, setUseVehicleQuoter } = useDashboardContext();
    const { settings } = state;

    const currencyOptions: SelectModel[] = [
        { value: "1", option: "US Dollar ($)" },
        { value: "2", option: "Euro (€)" },
        { value: "3", option: "Mexican Peso (MX$)" },
    ]


    return (
        <div className="m-2">

            <div id="language" className="pt-2">
                <Title subtitle={t("settings.idiom")} />
                <div className="w-50 pt-2">
                    <LanguageSelector />
                </div>
            </div>

            <div id="currency" className="pt-3">
                <Title subtitle={t("settings.currency")} />
                <div className="w-50" style={{ marginTop: "-15px", marginBottom: "-10px" }}>
                    <SimpleSelect
                        id="selectBoard"
                        required={false}
                        classInput='col-12 col-md-3 col-lg-12 mb-2'
                        options={currencyOptions}
                        onChange={(e) => setCurrencyId(e.target.value)}
                        selectedValue={settings.general.currencyId.toString()}
                    />
                </div>
            </div>

            <div id="quoter" className="pt-3">
                <Title subtitle={t("quoter.title")} />
                <div className="p-2">
                    <div className="form-check form-switch pt-2">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            onChange={(e) => {
                                if(e.target.checked){
                                    showInfoToast("Dirigirse a establecer el cotizador a utilizar")
                                }
                                setUseCreditQuoter(e.target.checked)}}
                            checked={settings.general.useCreditQuoter}
                        />
                        <label className="form-check-label">{t("quoter.cash")}</label>
                    </div>
                    <div className="form-check form-switch pt-2">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            onChange={(e) => {
                                if(e.target.checked){
                                    showInfoToast("Dirigirse a establecer el cotizador a utilizar")
                                }
                                setUseVehicleQuoter(e.target.checked)
                                }
                            }
                            checked={settings.general.useVehicleQuoter}
                        />
                        <label className="form-check-label">{t("quoter.vehicle")}</label>
                    </div>
                </div>
            </div>
            
        </div>

    );
};

export default GeneralSettings;
