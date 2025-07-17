import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../../../BasicComponents/Title/Title";
import QuoterCards from "./Cards";
import { useDashboardContext } from "../../../../context/DashboardContext";

const QuoterVehicle: React.FC = () => {
    const { t } = useTranslation();

    const { state, setVehicleQuoterType } = useDashboardContext();
    const { settings } = state;

    const vehicleQuoters = [
        {
          id: 1,
          title: "Cotizador de Vehículos",
          image: `${import.meta.env.BASE_URL}assets/images/quoter/quoter_auto_1.png`,
          description: "Configura tu vehículo ideal seleccionando marca, año, modelo y versión. Descubre todas las opciones disponibles y encuentra el vehículo perfecto para ti.",
          previewLink: `https://finzai.net:9120/QuoterAuto/#?tenantId=${state.tenantId}`,
          tag: "React"
        },
        {
          id: 2,
          title: "Plan Financiero",
          image: `${import.meta.env.BASE_URL}assets/images/quoter/quoter_auto_2.png`,
          description: "Calcula tu préstamo de manera sencilla. Conoce el monto del crédito, la tasa de interés, el enganche y la fecha de tu primer pago.",
          previewLink: `https://finzai.net:9120/QuoterAuto/#?tenantId=${state.tenantId}`,
          tag: "React"
        },
        {
          id: 5,
          title: "Detalles del Vehículo",
          image: `${import.meta.env.BASE_URL}assets/images/quoter/quoter_auto_5.png`,
          description: "Consulta las especificaciones completas del modelo seleccionado: tipo de motor, transmisión, equipamiento y más detalles técnicos importantes.",
          previewLink: `https://finzai.net:9120/QuoterAuto/#?tenantId=${state.tenantId}`,
          tag: "React"
        },
        {
          id: 4,
          title: "Carrusel de Modelos",
          image: `${import.meta.env.BASE_URL}assets/images/quoter/quoter_auto_4.png`,
          description: "Navega fácilmente entre nuestros modelos usando el carrusel interactivo. Con información detallada y precios actualizados.",
          previewLink: `https://finzai.net:9120/QuoterAuto/#?tenantId=${state.tenantId}`,
          tag: "React"
        },
        {
          id: 3,
          title: "Catálogo Completo de Vehículos",
          image: `${import.meta.env.BASE_URL}assets/images/quoter/quoter_auto_3.png`,
          description: "Visualiza toda nuestra oferta de vehículos con un desplazamiento. Compara características y precios simultáneamente.",
          previewLink: `https://finzai.net:9120/QuoterAuto/#?tenantId=${state.tenantId}`,
          tag: "React"
        }
      ];
      
    return(
        <div className="m-2">
            <Title
                subtitle={t("quoter.vehicleInfo")}/>
            <br/>     
            <QuoterCards products={vehicleQuoters} quoterType={settings.vehicleQuoter.quoterType} setQuoterType={setVehicleQuoterType}/>
           
        </div>
    );
};

export default QuoterVehicle;