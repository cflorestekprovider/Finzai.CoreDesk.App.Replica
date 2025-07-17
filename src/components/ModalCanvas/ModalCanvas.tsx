import React, { useEffect, useState } from 'react';
import { IndicatorIcon } from '../../api/models/IconsModels/IconsModels';
import Indicator from '../Indicator/Indicator';
import { useDashboardContext } from '../../context/DashboardContext';
import { getWidgets, getWidgetProfileByTenantId } from '../../api/dashboard/Dashboard';

const ModalCanvas: React.FC = () => {
    const { state } = useDashboardContext();
    const { indicatorSize, tenantId, roleId, isAdminRole } = state;

    const [widgets, setWidgets] = useState<any[]>([]);
    const [allowedWidgetIds, setAllowedWidgetIds] = useState<number[]>([]);
    const [filteredWidgets, setFilteredWidgets] = useState<any[]>([]);

    useEffect(() => {
        const modalElement = document.getElementById('offcanvasAddIndicator');

        const handleShown = async () => {

            if (!tenantId || !roleId) {
                return;
            }

            const widgetsResponse = await getWidgets(indicatorSize);
            setWidgets(widgetsResponse);

            if (!isAdminRole) {
                const response = await getWidgetProfileByTenantId(tenantId, roleId);

                const allowedIds = Array.isArray(response) ? response : [];
                setAllowedWidgetIds(allowedIds);
            } else {
                setAllowedWidgetIds([]);
            }
        };

        if (modalElement) {
            modalElement.addEventListener('shown.bs.offcanvas', handleShown);
        }

        return () => {
            if (modalElement) {
                modalElement.removeEventListener('shown.bs.offcanvas', handleShown);
            }
        };
    }, [indicatorSize, tenantId, roleId, isAdminRole]);

    useEffect(() => {
        if (!widgets.length) return;

        if (isAdminRole) {
            setFilteredWidgets(widgets);
        } else {
            const filtered = widgets.filter(w => allowedWidgetIds.includes(w.id));
            setFilteredWidgets(filtered);
        }
    }, [widgets, allowedWidgetIds, isAdminRole]);

    return (
        <div
            className="offcanvas offcanvas-end offcanvas-medium"
            id="offcanvasAddIndicator"
            aria-labelledby="offcanvasAddIndicatorLabel"
        >
            <div className="offcanvas-header offcanvas-ui">
                <input type="hidden" name="indicator-selected-slot" id="indicator-selected-slot" />
                <h5 className="offcanvas-title" id="offcanvasAddIndicatorLabel">
                    <IndicatorIcon /> Indicadores disponibles
                </h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className="mb-3">
                    Indicadores disponibles para ser agregados a este nodo.
                    Los indicadores se muestran por categoría y según sean compatibles con el nodo seleccionado.
                    Tomar en cuenta que nodos de distinta forma o tamaño, podrían tener distintos indicadores disponibles.
                </div>

                <div className="indicator-info-cells category-1">
                    {filteredWidgets.length > 0 ? (
                        filteredWidgets.map((indicador: any) => (
                            <Indicator
                                key={indicador.id}
                                id={indicador.id}
                                title={indicador.title}
                                description={indicador.description}
                                previewImage={
                                    <img
                                        src={`${import.meta.env.BASE_URL}assets/images/background/indicators/${indicador.backgroundImageURL}`}
                                        alt={`Indicador ${indicador.id}`}
                                    />
                                }
                            />
                        ))
                    ) : (
                        <div className="text-muted text-center mt-4">
                            No hay indicadores disponibles para este nodo.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ModalCanvas;
