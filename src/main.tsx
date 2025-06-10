import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, MantineProvider } from '@mantine/core';
import "@mantine/core/styles.css"
import './index.css'
import App from './App.tsx'

const theme = createTheme({
  colors: {
    coral: [
      "#fff5f3",
      "#ffe6e1",
      "#ffccc4",
      "#ffb3a7",
      "#ff998a",
      "#ff6250",
      "#e5583d",
      "#cc4e2a",
      "#b24417",
      "#993a04",
    ],
    teal: [
      "#f0fffe",
      "#e0fffc",
      "#c1fff9",
      "#a1fff6",
      "#82fff3",
      "#009379",
      "#008269",
      "#007259",
      "#006249",
      "#005239",
    ],
    pink: [
      "#fef9f8",
      "#fdf3f1",
      "#fbe7e3",
      "#f9dbd5",
      "#f7cfc7",
      "#f3afa8",
      "#db9e97",
      "#c38d86",
      "#ab7c75",
      "#936b64",
    ],
    gray: [
      "#f8f9fa",
      "#f1f3f4",
      "#e9ecef",
      "#dee2e6",
      "#ced4da",
      "#adb5bd",
      "#6c757d",
      "#495057",
      "#343a40",
      "#2d2d2d",
    ],
  },
  primaryColor: "coral",
  fontFamily: "Inter, system-ui, sans-serif",
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>,
)
