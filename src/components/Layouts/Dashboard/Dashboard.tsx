import React from 'react';
import DashboardHeader from './Layout/DashboardHeader';
import DashboardSettings from './Layout/DashboardSettings';
import ModalCanvas from '../../ModalCanvas/ModalCanvas';
import DashboardViewer from './Layout/DashboardViewer';
import { useDashboardContext } from '../../../context/DashboardContext';
import { DashboardType } from '../../../reducers/DashboardReducer';

const Dashboard: React.FC = () => {
    const { getDashboardToShow } = useDashboardContext();

    return (
        <div className="p-3">
            <div className="container-fluid bg-container-main no-width-restrictions">
                <DashboardHeader  />
                {
                    getDashboardToShow() == DashboardType.DashBoardSettings && <DashboardSettings  />
                }
                {
                    getDashboardToShow() == DashboardType.DashBoardViewer && <DashboardViewer />
                }
                
                <ModalCanvas />
            </div>
        </div>
    );
};

export default Dashboard;
