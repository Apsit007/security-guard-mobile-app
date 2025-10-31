import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "@mui/material/styles";
import './index.css'
import App from './App.tsx'
import { MuiTheme } from './theme/index.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode >
    <ThemeProvider theme={MuiTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
