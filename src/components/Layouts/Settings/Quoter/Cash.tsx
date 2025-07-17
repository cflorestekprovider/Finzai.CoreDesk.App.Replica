import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../../../BasicComponents/Title/Title";
import QuoterCards from "./Cards";
import { useDashboardContext } from "../../../../context/DashboardContext";

const QuoterMoney: React.FC = () => {
    const { t } = useTranslation();
    const { state, setCreditQuoterType } = useDashboardContext();
    const { settings } = state;

    const moneyQuoters = [
        {
          id: 1,
          title: "Calculadora de Préstamos",
          image: `${import.meta.env.BASE_URL}assets/images/quoter/quoter_example_1.png`,
          description: "Ingresa el monto y elige el plazo para estimar tu pago mensual.",
          previewLink: `https://finzai.net:9120/Quoter/#?tenantId=${state.tenantId}`,
          tag: "Money"
        },
        {
          id: 2,
          title: "Comparador de Opciones",
          image: `${import.meta.env.BASE_URL}assets/images/quoter/quoter_example_2.png`,
          description: "Compara diferentes combinaciones de montos y plazos para elegir la más conveniente.",
          previewLink: `https://finzai.net:9120/Quoter/#?tenantId=${state.tenantId}`,
          tag: "Money"
        },
        {
          id: 3,
          title: "Resumen de tu Cotización",
          image: `${import.meta.env.BASE_URL}assets/images/quoter/quoter_example_3.png`,
          description: "Visualiza un resumen claro del monto total, intereses y pagos estimados.",
          previewLink: `https://finzai.net:9120/Quoter/#?tenantId=${state.tenantId}`,
          tag: "Money"
        }
      ];

    return(
        <div className="m-2">
            <Title
                subtitle={t("quoter.cashInfo")}/>
            <br/>  
            <QuoterCards products={moneyQuoters} quoterType={settings.creditQuoter.quoterType} setQuoterType={setCreditQuoterType}/>
           
        </div>
    );
};

export default QuoterMoney;