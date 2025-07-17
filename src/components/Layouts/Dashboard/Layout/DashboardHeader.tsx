import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Select from '../../../BasicComponents/Select/Select';
import Button from '../../../BasicComponents/Button/Button';
import { AddPlusIcon, BackIcon, PlusIcon, IndicatorIcon } from '../../../../api/models/IconsModels/IconsModels';
import { getDashboardLayoutByDashboardId, getDashboardsByUserId, getLayoutsComponents } from '../../../../api/dashboard/Dashboard';
import { useDashboardContext } from '../../../../context/DashboardContext';
import Layout from '../../../../api/models/DashboardModels/LayoutModel';
import { WidgetDetail } from './DashboardViewer';
import { v4 as uuidv4 } from 'uuid';

const DashboardHeader: React.FC = () => {

    const { t } = useTranslation();
    const [gridLayouts, setGridLayouts] = useState<Layout[]>([]);
    const { setBoardItem, setDashboardToShow, state, setLayouts, getDashboardToShow, setDashboardName, setBoardOptions } = useDashboardContext();
    const { setShowDashboardSettings } = useDashboardContext();
    const [hasLoadedFromRole, setHasLoadedFromRole] = useState(false);
    const { currentRoleName } = useDashboardContext();


    useEffect(() => {
        const fetchGetLayouts = async () => {
            const data = await getDashboardsByUserId(321);
            if (data) {
                const dashboards = data.dashboards;

                const mappedOptions = dashboards
                    .filter((dashboard: any) => state.isAdminRole || dashboard.name === currentRoleName)
                    .map((dashboard: any) => ({
                        value: dashboard.id.toString(),
                        option: dashboard.name,
                    }));
                setBoardOptions(mappedOptions);
            }
        };

        fetchGetLayouts();
    }, [currentRoleName]);

    const handleSetDashboardToShow = () => {
        setDashboardToShow(3);
    };

    const handleBack = () => {
        setDashboardToShow(2);
    };

    useEffect(() => {
        const fetchLayouts = async () => {
            try {
                const fetchedLayouts = await getLayoutsComponents();
                setGridLayouts(fetchedLayouts.layouts);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchLayouts();
    }, []);

    useEffect(() => {
        const fetchAndAssignDashboardByRole = async () => {
            if (currentRoleName || hasLoadedFromRole || gridLayouts.length === 0) return;

            try {
                const data = await getDashboardsByUserId(321);
                const matchingDashboard = data?.dashboards.find(
                    (dashboard: any) => dashboard.name === currentRoleName
                );

                if (matchingDashboard) {
                    setBoardItem(matchingDashboard.id.toString());

                    const dataLayout = await getDashboardLayoutByDashboardId(matchingDashboard.id);
                    const dashboardInfo = dataLayout.dashboardLayout[0];

                    setDashboardName(dashboardInfo.dashboard.name);

                    const computedLayouts = dashboardInfo.layouts.map((item: any) => {
                        const layout = gridLayouts.find(g => g.id === item.layoutId);
                        const widgets = item.layoutDetail?.map((detail: WidgetDetail) => ({
                            widgetId: detail.widgetId,
                            widgetOrder: detail.order
                        })) || [];

                        return {
                            ...item,
                            layoutKey: uuidv4(),
                            layoutName: layout ? layout.name : `Layout ${item.layoutId}`,
                            widgets
                        };
                    });

                    setLayouts(computedLayouts);
                    setHasLoadedFromRole(true);
                }
            } catch (error) {
                console.error("Error loading dashboard by role:", error);
            }
        };

        fetchAndAssignDashboardByRole();
    }, [currentRoleName, gridLayouts, hasLoadedFromRole]);

        const handleSetBoardItem = async (e: React.ChangeEvent<HTMLSelectElement>) => {
            const dashboardId = Number(e.target.value);
            setBoardItem(e.target.value);

            try {
                if (dashboardId == 0) {
                    setLayouts([]);
                } else {
                    const data = await getDashboardLayoutByDashboardId(dashboardId);
                    const dashboardData = data.dashboardLayout[0];
                    setDashboardName(dashboardData.dashboard.name)
                    const computedLayouts = dashboardData.layouts.map((item: any) => {
                        const matchingLayout = gridLayouts.find(layoutItem => layoutItem.id === item.layoutId);
                        const widgets = item.layoutDetail ? item.layoutDetail.map((detail: WidgetDetail) => ({
                            widgetId: detail.widgetId,
                            widgetOrder: detail.order
                        })) : [];
                        return {
                            ...item,
                            layoutKey: uuidv4(),
                            layoutName: matchingLayout ? matchingLayout.name : `Layout ${item.layoutId}`,
                            widgets: widgets
                        };
                    });


                    setLayouts(computedLayouts);

                }


            } catch (error) {
                console.error("Error fetching dashboard layout:", error);
            }
        };


        return (
            <div className="page-titles bg-white">
                <div className="row">
                    <div className="col-lg-8 d-flex align-self-center ">
                        <div className="content-head-dashboards ">
                            <h3 className="mb-0 fw-bold">{t("dashboard.today")}</h3>
                            <h6 className="text-muted mb-0 fw-normal">06 de Marzo, 2025</h6>
                        </div>
                        {currentRoleName && (
                            <Select
                                id="selectBoard"
                                title={t("dashboard.select_board")}
                                readonly={false}
                                required={false}
                                classInput='col-12 col-md-6 col-lg-3 col-xl-3 ms-3'
                                options={state.boardOptions}
                                onChange={handleSetBoardItem}
                                selectedValue={state.boardItem.toString()}
                            />
                        )}
                        <div className="d-flex align-items-center ms-3 user-in-dashboard">

                            <a href="#" className="me-1
                                    round-md
                                    rounded-circle
                                    d-flex
                                    align-items-center
                                    justify-content-center
                                    bg-light-success
                                    text-success
                                    " data-bs-toggle="tooltip" data-bs-placement="top" aria-label={t("dashboard.invite_dashboard")} data-bs-original-title={t("dashboard.invite_dashboard")}>
                                <AddPlusIcon />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12 d-flex align-items-center justify-content-md-end justify-content-start">

                        {getDashboardToShow() === 3 && (
                            <>
                                <Button
                                    id="return-btn"
                                    title={t("buttons.back")}
                                    type="primaryButton"
                                    icon={<BackIcon />}
                                    onClick={handleBack}
                                />
                                <div className="m-1"></div>
                            </>
                        )}

                        {getDashboardToShow() === 2 && (
                            <Button
                                id="new-dashboard-btn"
                                title={Number(state.boardItem) !== 0 ? t("dashboard.update_dashboard") : t("dashboard.create_dashboard")}
                                type="primaryButton"
                                icon={<PlusIcon />}
                                onClick={handleSetDashboardToShow}
                            />
                        )}

                        <div className="m-1"></div>
                        {state.isAdminRole && (
                            <Button
                                id="dashboard-settings-btn"
                                title="Configuraci&oacute;n de Dashboard"
                                type="primaryButton"
                                icon={<IndicatorIcon />}
                                onClick={() => setShowDashboardSettings(true)}
                            />
                        )}
                    </div>
                </div>
            </div>
        );
};

export default DashboardHeader;