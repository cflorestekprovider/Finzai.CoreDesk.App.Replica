import React from 'react';
import { useDashboardContext } from '../../../../context/DashboardContext';
import EmptyDashboard from '../../../EmptyDashboard/EmptyDashboard';
import Board from '../../../Board/Board';

enum contentTypes {
    notSelected = 1,
    showDashboard = 2,
    createDashboard = 3,
}

interface DashboardViewerProps {
    contentState?: contentTypes;
}
const DashboardViewer: React.FC<DashboardViewerProps> = () => {
    const { getBoardItem } = useDashboardContext();

    return (
        <div className='tab-content border mt-2'>
            <div className='tab-pane active p-0'>
                {
                    getBoardItem() == 0 && <EmptyDashboard />
                }
                
                {
                    getBoardItem() != 0 && <Board />
                    
                }
                
            </div>
        </div>
    );
};

export default DashboardViewer; 