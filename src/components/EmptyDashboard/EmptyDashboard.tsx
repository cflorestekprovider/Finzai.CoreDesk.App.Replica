import React from 'react';
import { useTranslation } from 'react-i18next';

const EmptyDashboard: React.FC = () => {
    const {t} = useTranslation()
    return (
        <div className="dashboard-box-holder empty-box" id="holderbox-tablero-empty">
            <img src={`${import.meta.env.BASE_URL}assets/images/empty.png`}  alt={t("dashboard.no_board_selected")} className="empty-icon" />
            <h2>{t("dashboard.no_board_selected")}</h2>
            <p className="text-center">{t("dashboard.no_board_selected_info")}</p>
        </div>
    );
};

export default EmptyDashboard;
