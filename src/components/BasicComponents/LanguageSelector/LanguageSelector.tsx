import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDashboardContext } from "../../../context/DashboardContext";

const countries = [
    {
        id:1,
        code: "es_mx",
        name: "Español",
        country_code: "mx",
        img_route: "./assets/images/login/mexico.svg"
    },
    {
        id:2,
        code: "en",
        name: "English",
        country_code: "gb",
        img_route: "./assets/images/login/united-states.svg"
    },
];

const LanguageSelector: React.FC = () => {

    const { state, setLanguageId } = useDashboardContext();
    const { settings } = state;

    useEffect(() => {
        const languageToSet = countries.find(x => x.id == settings.general.languageId)?.code;
        i18n.changeLanguage(languageToSet);
    }, [settings.general.languageId])

    const { i18n } = useTranslation();
   
    // const [language, setLanguage] = useState(i18n.language);

    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLang = event.target.value;
        const languageToSet = countries.find(x => x.id.toString() == newLang)?.code;
        i18n.changeLanguage(languageToSet);
        setLanguageId(parseInt(event.target.value));
        
        window.dispatchEvent(new CustomEvent('languageChange', { 
            detail: { language: languageToSet } 
        }));
    };

    return (
        <div className="lang-options">
            <select className="form-select" value={settings.general.languageId} onChange={changeLanguage}>
                {countries.map((lng) => (
                    <option key={lng.id} value={lng.id}>
                        {lng.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelector;
