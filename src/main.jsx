// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DataProvider from './store/DataProvider.jsx'



createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  // </StrictMode>,
)
