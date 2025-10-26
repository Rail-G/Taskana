import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/global.css'
import AppLayout from './layouts/AppLayout'
import ThemeProvider from './context/ThemeContext'
import TaskProvider from './context/TaskContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <TaskProvider>
        <AppLayout />
      </TaskProvider>
    </ThemeProvider>
  </StrictMode>
)
