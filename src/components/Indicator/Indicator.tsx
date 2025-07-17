import React from 'react';
import { IndicatorItemIcon, SuccessIcon } from '../../api/models/IconsModels/IconsModels';
import { useDashboardContext } from '../../context/DashboardContext';
import Layout from '../../api/models/DashboardModels/LayoutModel';

interface IndicatorProps {
    title: string;
    description: string;
    previewImage: React.ReactNode;
    id: string;
}

const Indicator: React.FC<IndicatorProps> = ({ title, description, previewImage, id }) => {

    const { state, updateLayout } = useDashboardContext();


    const handleSetWidget = (widgetId: string) => {
        const layout = state.layouts.find(x => x.layoutKey === state.layoutKey);
        const widgetIndex = layout?.widgets.findIndex(w => w.widgetOrder === state.layoutIndex);
    
        if (layout && widgetIndex !== undefined && widgetIndex !== -1) {
            const updatedLayout: Layout = {
                ...layout,
                widgets: layout.widgets.map((w, index) =>
                    index === widgetIndex ? { ...w, widgetId: parseInt(widgetId) } : w
                )
            };
    
            updateLayout(updatedLayout);
        }
    };

    return (
        <>

            <div className="indicator-wrapper">
                <div className="indicator-header">
                    <div className="header-plate">
                        <span>Indicador</span>
                        <h5>
                            <IndicatorItemIcon /> {title}</h5>
                    </div>
                    {previewImage}
                </div>
                <div className="indicator-description">
                    {description}
                </div>
                <button
                    type='button'
                    className="btn btn-primary d-flex align-items-center justify-content-center select-indicator"
                    data-indicator-selected={id}
                    data-bs-dismiss="offcanvas"
                    onClick={() => handleSetWidget(id)}
                    aria-label="Close">
                    <SuccessIcon /> Seleccionar Indicador
                </button>
            </div>

        </>
    );
};

export default Indicator;
