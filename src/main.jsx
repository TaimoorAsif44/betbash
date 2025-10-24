import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import './assets/css/common.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
