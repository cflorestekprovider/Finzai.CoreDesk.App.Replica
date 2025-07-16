import { StrictMode } from 'react';
import DataEntry from './components/Layouts/Dataentry/MainLayout/DataEntry';
import Dashboard from './components/Layouts/Dashboard/Dashboard';
import DashboardContextProvider from './context/DashboardContext';

export enum Features {
  Nothing = 0,
  DataEntry = 1,
  Dashboard = 2,
  DocumentViewer = 3,
}

interface AppProps {
  feature?: Features;
}

const App: React.FC<AppProps> = ({ feature }) => {
  return (
    <DashboardContextProvider>
      <StrictMode>
        <div className="container-fluid bg-container-main no-width-restrictions">
          {feature === Features.DataEntry && <DataEntry />}
          {feature === Features.Dashboard && <Dashboard />}
        </div>
      </StrictMode>
    </DashboardContextProvider>
  );
};

export default App;