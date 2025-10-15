import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/global.css'
import AppLayout from './layouts/AppLayout'
import AppContext from './context/AppContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContext>
      <AppLayout />
    </AppContext>
  </StrictMode>
)
