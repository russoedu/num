import { ThemeProvider } from '@emotion/react'
import { Container, createTheme, CssBaseline, StyledEngineProvider } from '@mui/material'
import fontColorContrast from 'font-color-contrast'
import { StrictMode, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Calc } from './_components/Calc'
import { Footer } from './_components/Footer'
import { Header } from './_components/Header'
import './App.css'
import { appName, ThemeT } from './helpers/types'

export function App () {
  const [colour] = useState('#fff')
  const [tm] = useState({
    mode:         'light',
    highContrast: false,
    colour:       '#894fd6',
    width:        10,
    height:       10,
  } as ThemeT)

  const theme = createTheme({
    palette: {
      getContrastText: fontColorContrast,
      mode:            tm.mode,
      background:      {
        default: tm.mode === 'dark' ? '#000' : '#fff',
        paper:   tm.mode === 'dark' ? '#000' : '#fff',
      },
      primary: {
        main: tm.colour,
      },
    },
  },
  [
    { iconColour: colour },
  ])
  
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
              {/* "lg" | "xs" | "sm" | "md" | "xl" */}
              <Container maxWidth='md'>
                <Calc/>
              </Container>
              <Footer/>
            </CssBaseline>
          </StyledEngineProvider>
        </ThemeProvider>
      </HelmetProvider>
      
    </StrictMode>
  )
}

export default App
