import React from 'react';

const EmptyDashboard: React.FC = () => {

    return (
        <div className="dashboard-box-holder empty-box" id="holderbox-tablero-empty">
            <img src={`${import.meta.env.BASE_URL}assets/images/empty.png`}  alt="No hay tablero seleccionado" className="empty-icon" />
            <h2>No hay tablero seleccionado</h2>
            <p className="text-center">Para visualizar la información de un tablero, debes seleccionarlo previamente.</p>
        </div>
    );
};

export default EmptyDashboard;
