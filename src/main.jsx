import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import ScrollToTop from './pages/ScrollToTop.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />         
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
