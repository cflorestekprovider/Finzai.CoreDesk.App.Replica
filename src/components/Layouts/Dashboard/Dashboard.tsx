import React from 'react';
import DashboardHeader from './Layout/DashboardHeader';
import DashboardSettings from './Layout/DashboardSettings';
import ModalCanvas from '../../ModalCanvas/ModalCanvas';
import DashboardViewer from './Layout/DashboardViewer';
import { useDashboardContext } from '../../../context/DashboardContext';
import { contentTypes } from '../../../reducers/DashboardReducer';
import DashboardConfiguratorModal from '../../Dashboard/DashboardConfiguration/DashboardConfigurationModal';

const Dashboard: React.FC = () => {
    const { getDashboardToShow, getShowDashboardSettings, setShowDashboardSettings } = useDashboardContext();

    if (getShowDashboardSettings()) {
        return (
            <DashboardConfiguratorModal
                show={true}
                onClose={() => setShowDashboardSettings(false)}
            />
        );
    }

    return (
        <>
            <DashboardHeader />

            {getDashboardToShow() === contentTypes.createDashboard && <DashboardSettings />}

            {getDashboardToShow() === contentTypes.showDashboard && <DashboardViewer />}

            <ModalCanvas />
        </>
    );
};

export default Dashboard;
