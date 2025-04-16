import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// e.g. src/main.jsx or wherever
console.log(import.meta.env.VITE_API_BASE);
// fetch(import.meta.env.VITE_API_BASE + '/posts')
