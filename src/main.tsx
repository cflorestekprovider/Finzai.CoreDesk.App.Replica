import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App, { Features } from './App.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App feature={Features.Nothing} />
  </StrictMode>,
)
