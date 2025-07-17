// main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Features } from './reducers/DashboardReducer.ts';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
            <App
                config={{
                    feature: Features.DataEntry,
                    tenantId: "0197b01b-d0e1-765d-8f95-abc275be3cc4",
                    customerId: 1,
                    roleId: "695af12f-1c2a-45aa-8015-aed373d5c186" // Rol de admin
                }}
            />
    </StrictMode>,
);
