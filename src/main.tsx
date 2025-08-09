import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "leaflet/dist/leaflet.css";
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './Provoider/theme-provoider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='system'>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
