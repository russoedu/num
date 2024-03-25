import { ThemeProvider } from '@emotion/react'
import { createTheme, CssBaseline, StyledEngineProvider } from '@mui/material'
import fontColorContrast from 'font-color-contrast'
import { StrictMode } from 'react'
import { Footer } from './componentsPages/Footer'
import { Header } from './componentsPages/Header'
import { Home } from './pages/Home'
import './App.css'
import { purple, ThemeT } from './helpers/types'

export function App () {
  const tm: ThemeT = {
    mode:         'light',
    highContrast: false,
    colour:       purple,
    width:        10,
    height:       10,
  }

  const theme = createTheme(
    {
      palette: {
        getContrastText: fontColorContrast,
        mode:            tm.mode,
        background:      {
          default: '#fff',
          paper:   '#fff',
        },
        primary: {
          main: tm.colour,
        },
      },
    },
  )

  const onTauri = (window as any).__TAURI_INTERNALS__

  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <CssBaseline>
            {onTauri
              ? <></>
              : <Header/>
            }
            <Home/>
            {onTauri
              ? <></>
              : <Footer/>
            }
          </CssBaseline>
        </StyledEngineProvider>
      </ThemeProvider>
    </StrictMode>
  )
}

export default App
