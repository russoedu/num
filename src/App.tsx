import { ThemeProvider } from '@emotion/react'
import { createTheme, CssBaseline, PaletteMode, StyledEngineProvider } from '@mui/material'
import fontColorContrast from 'font-color-contrast'
import { StrictMode, useState } from 'react'
import { Header } from './_components/Header'
import './App.css'
import { appName, ThemeT } from './helpers/const'
import { Helmet } from 'react-helmet'

export function App () {
  const [colour] = useState('#fff')
  const [tm] = useState({
    mode:         'light',
    highContrast: false,
    colour:       '#2e59a4',
    width:        10,
    height:       10,
  } as ThemeT)

  const theme = createTheme({
    palette: {
      getContrastText: fontColorContrast,
      mode:            tm.mode as PaletteMode,
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
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <CssBaseline>
            <Helmet>
              <meta charSet="utf-8" />
              <title>{appName}</title>
              <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Header/>
            <div className="container main ng-scope">
              <div className="row">
                <form name="calcForm" className="ng-dirty ng-valid-required ng-invalid ng-invalid-minlength ng-pristine ng-invalid-required ng-valid-mask ng-valid-pattern">
                  <div className="row">
                    <div className="form-group col-md-6 inputs">
                      <label>Nome Completo</label>
                      <input id="fullName" type="text" placeholder="João da Silva" name="name" required={true} className="form-control upper ng-pristine ng-invalid ng-invalid-required ng-touched"/>
                      <div className="error-container ng-hide">
                        {/* ng-show="calcForm.name.$dirty &amp;&amp; calcForm.name.$invalid"  */}
                        <p className="error label label-danger">
                      Por favor, preencha o nome completo
                        </p>
                      </div>
                    </div>
                    <div className="form-group col-md-6 inputs">
                      <label >Data de Nascimento</label>
                      <input id="birthDate" type="text" placeholder="__/__/____" name="birth"  required={true} className="form-control upper ng-pristine ng-untouched ng-valid-mask ng-invalid ng-invalid-required ng-valid-pattern" />
                      {/* ng-model="user.birth" ui-mask="99/99/9999" ng-pattern="/^(0?[1-9]|[12][0-9]|3[01])(0?[1-9]|1[012])\d{4}$/" */}
                      <div className="error-container ng-hide">
                        <p className="error label label-danger">
                      Por favor, preencha a data de nascimento
                        </p>
                        <p className="error ng-hide label label-info">
                      A data de nascimento deve estar no formato dia/mês/ano
                        </p>
                      </div>
                    </div>
                    <div className="form-group col-md-6 col-md-offset-6 submit-button">
                      <button id="send" type="submit" className="btn-lg btn-primary pull-right">Calcular</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </CssBaseline>
        </StyledEngineProvider>
      </ThemeProvider>
    </StrictMode>
  )
}

export default App
