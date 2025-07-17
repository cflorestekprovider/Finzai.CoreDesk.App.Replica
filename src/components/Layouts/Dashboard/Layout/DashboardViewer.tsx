import { useDashboardContext } from '../../../../context/DashboardContext';
import EmptyDashboard from '../../../EmptyDashboard/EmptyDashboard';
import GridLayoutSelector from '../../../Dashboard/GridLayouts/GridLayoutSelector';

export interface WidgetDetail {
    id: number;
    dashboardLayoutId: number;
    dashboardLayout: any;
    widgetId: number;
    order: number;
}

const DashboardViewer = () => {
    const { getBoardItem, state} = useDashboardContext();

    return (
        <div className='tab-content border mt-2'>
            <div className='tab-pane active p-0'>
                <div className='row'>
                {
                    getBoardItem() === 0 || state.layouts.length === 0 ? (
                        <EmptyDashboard />
                    ) : (
                        state.layouts.map((item) => (
                            <GridLayoutSelector
                                key={item.layoutKey}
                                id={item.layoutKey}
                                layoutName={item.layoutName}
                                widgets={item.widgets}
                                readOnly={true}
                            />
                        )
                        )
                    )
                }
                </div>
            </div>
        </div>
    );
};

export default DashboardViewer; 