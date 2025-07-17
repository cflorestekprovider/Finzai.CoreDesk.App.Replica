import React from 'react';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import InputWithIcon from '../../../BasicComponents/InputWithIcon/IconWithIcon';
import { EditIcon, FormIcon, SaveBoardIcon, UpdateBoardIcon } from '../../../../api/models/IconsModels/IconsModels';
import { getLayoutsComponents, createDashboard, updateDashboard, getDashboardsByUserId } from '../../../../api/dashboard/Dashboard'
import DashboardModel from '../../../../api/models/DashboardModels/DashboardModel';
import GridLayoutSelector from '../../../Dashboard/GridLayouts/GridLayoutSelector';
import { v4 as uuidv4 } from 'uuid';
import { useDashboardContext } from '../../../../context/DashboardContext';
import { contentTypes } from '../../../../reducers/DashboardReducer';
import gridsLayoutModel from '../../../../api/models/DashboardModels/gridsLayoutCatalog';

interface DashboardContentProps {
    contentState?: contentTypes;
}

const DashboardSettings: React.FC<DashboardContentProps> = () => {

    const { t } = useTranslation();
    const [gridLayouts, setGridLayouts] = useState<any[]>([]);

    const [dashboardNameError, setBoardNameError] = useState<string>('');
    const { state, addLayout, removeLayout, getBoardItem, setBoardItem, setDashboardName, setBoardOptions } = useDashboardContext();

    const fetchBoards = async () => {
        const data = await getDashboardsByUserId(321);
        if (data) {
            const dashboards = data.dashboards;

            const mappedOptions = dashboards
                .filter((dashboard: any) => {
                    if (state.isAdminRole) return true;

                    const normalizedDashboardName = dashboard.name?.trim().toLowerCase();
                    const normalizedRoleName = state.currentRoleName?.trim().toLowerCase();
                    return normalizedDashboardName === normalizedRoleName;
                })
                .map((dashboard: any) => ({
                    value: dashboard.id.toString(),
                    option: dashboard.name,
                }));

            setBoardOptions(mappedOptions);
        }
    };

    useEffect(() => {
        const fetchLayouts = async () => {
            try {
                const response = await getLayoutsComponents();
                setGridLayouts(response.layouts);
            } catch (err: any) {
            }
        };
        fetchLayouts();
    }, []);

    useEffect(() => {
        const boardItem = getBoardItem();
        if (boardItem == 0) {
            setDashboardName("");
        }
    }, [state.boardItem]);

    const validateDashboardName = (): boolean => {
        if (!state.dashboardName.trim()) {
            setBoardNameError(t("dashboard.name_required"));
            Swal.fire({
                title: t("alerts.validation_error"),
                text: t("dashboard.name_required"),
                icon: "error"
            });
            return false;
        }
        setBoardNameError('');
        return true;
    };

    const handleSaveDashboard = async () => {
        if (!validateDashboardName()) {
            return;
        }

        const newDashboard: DashboardModel = {
            id: 0,
            name: state.dashboardName,
            userId: 321,
            status: 0,
            layouts: state.layouts,
        };

        try {
            const response = await createDashboard(newDashboard);
            if (response) {
                Swal.fire({
                    title: t("alerts.success"),
                    text: t("dashboard.save_board_alert"),
                    icon: "success"
                });
                setBoardItem(response)
                fetchBoards();
            }
        } catch (error) {
            Swal.fire({
                title: t("alerts.error"),
                text: t("dashboard.save_board_error"),
                icon: "error"
            });
            console.error("Error creating dashboard:", error);
        }
    };

    const handleUpdateDashboard = async () => {
        if (!validateDashboardName()) {
            return;
        }

        const dashboardId = state.boardItem;
        const updatedDashboard = {
            id: 0,
            name: state.dashboardName,
            userId: 321,
            status: 0,
            layouts: state.layouts,
        };

        try {
            const response = await updateDashboard(dashboardId, updatedDashboard);

            if (response) {
                Swal.fire({
                    title: t("alerts.success"),
                    text: t("dashboard.update_board_alert"),
                    icon: "success"
                });

            }

            fetchBoards();
        } catch (error) {
            Swal.fire({
                title: t("alerts.error"),
                text: t("dashboard.save_board_error"),
                icon: "error"
            });
            console.error("Error updating dashboard:", error);
        }
    };

    const handleAddLayout = async (layout: any) => {

        const result = await Swal.fire({
            title: t("dashboard.add_to_structure"),
            text: t("dashboard.create_component_message"),
            showCancelButton: true,
            confirmButtonColor: "#2381E3",
            cancelButtonColor: "#919b9f",
            confirmButtonText: t("dashboard.confirm_add"),
            cancelButtonText: t("dashboard.cancel"),
            imageUrl: `${import.meta.env.BASE_URL}assets/images/layout-icon.png`,
        });

        if (result.isConfirmed) {

            const layoutDesing = gridsLayoutModel.find((x) => x.layoutName === layout.name)?.props;
            addLayout(
                {
                    id: layout.id,
                    name: layout.name,
                    layoutId: layout.id,
                    layoutOrder: state.layouts.length,
                    widgets: layoutDesing?.items.map((_, index) => ({
                        widgetId: 0,
                        widgetOrder: index
                    })) || [],
                    layoutDetail: [],
                    layoutName: layout.name,
                    layoutKey: uuidv4()
                });
        }
    }

    const handleDeleteLayout = (layoutKey: string) => {
        removeLayout(layoutKey);
    };

    return (
        <div className='tab-content border mt-2'>
            <div className='tab-pane active p-0'>
                <div className="dashboard-box-holder new-dashboard-canvas">
                    <div className="pre-head-slot">
                        <InputWithIcon
                            classInput={`form-control ${dashboardNameError ? 'is-invalid' : ''}`}
                            iconLeft={<FormIcon />}
                            iconRight={<EditIcon />}
                            id='dashboardName'
                            readonly={false}
                            required={true}
                            title=''
                            placeholder={t("dashboard.dashboard_name")}
                            value={state.dashboardName}
                            onChange={(e) => {
                                setDashboardName(e.target.value);
                                if (e.target.value.trim()) {
                                    setBoardNameError('');
                                }
                            }}
                        />
                        {dashboardNameError && <div className="invalid-feedback">{dashboardNameError}</div>}

                        {/* LAYOUTS DISPONIBLES */}
                        <div className="tab-drawer-menu" role="tablist">
                            {Array.isArray(gridLayouts) && gridLayouts.map((layout) => {
                                return (
                                    <a
                                        key={layout.id}
                                        type='button'
                                        className="layout-component-pickup"
                                        aria-label={t(`dashboard.${layout.description}`)}
                                        onClick={() => { handleAddLayout(layout) }}
                                    >
                                        <img src={`${import.meta.env.BASE_URL}assets/images/icon/layout/${layout.name.replace("Layout_", "")}.png`} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* TABLERO */}
                    <div className="new-grid-layout-body" id="new-grid-layout-body">
                        {state.layouts.length === 0 ? (
                            <div className="dashboard-empty-scenario">
                                <img src={`${import.meta.env.BASE_URL}assets/images/layout-build.png`} alt={t("dashboard.no_board_selected")} className="empty-icon" />
                                <h2>{t("dashboard.board_under_construction")}</h2>
                                <p className="text-center"> {t("dashboard.structure_info")} <b>{t("dashboard.components")}</b> {t("dashboard.top_section")}.</p>
                            </div>
                        ) : (
                            <div className="row angular-fundation-row">
                                {
                                    state.layouts.map((item) => {
                                        return (
                                            <GridLayoutSelector
                                                key={item.layoutKey}
                                                id={item.layoutKey}
                                                layoutName={item.layoutName}
                                                onDelete={() => handleDeleteLayout(item.layoutKey)}
                                                widgets={item.widgets}
                                            />
                                        )
                                    })
                                }
                            </div>
                        )}
                    </div>
                </div>
                <div className="new-dashboard-save-holder">
                    {Number(state.boardItem) === 0 && (
                        <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center save-dashborad-trigger" onClick={handleSaveDashboard}>
                            <SaveBoardIcon />
                            {t("dashboard.save_board")}
                        </a>
                    )}
                    {Number(state.boardItem) !== 0 && (
                        <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center update-dashborad-trigger" onClick={handleUpdateDashboard}>
                            <UpdateBoardIcon />
                            {t("dashboard.update_board")}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashboardSettings;