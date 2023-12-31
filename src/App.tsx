import { ThemeProvider } from '@emotion/react'
import { createTheme, CssBaseline, StyledEngineProvider } from '@mui/material'
import fontColorContrast from 'font-color-contrast'
import { StrictMode } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Footer } from './_componentsPages/Footer'
import { Header } from './_componentsPages/Header'
import { Home } from './_pages/Home'
import './App.css'
import { appName, purple, ThemeT } from './_helpers/types'

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
  
  return (
    <StrictMode>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <StyledEngineProvider injectFirst>
            <CssBaseline>
              <Helmet>
                <meta charSet='utf-8' />
                <title>{appName}</title>
                <link rel='canonical' href='http://mysite.com/example' />
              </Helmet>
              <Header/>
              <Home/>
              <Footer/>
            </CssBaseline>
          </StyledEngineProvider>
        </ThemeProvider>
      </HelmetProvider>
    </StrictMode>
  )
}

export default App
