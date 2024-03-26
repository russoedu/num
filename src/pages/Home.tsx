import { Container } from '@mui/material'
import { useEffect, useState } from 'react'
// import { Advancedbuttons } from '../_components/AdvancedButtons'
import { AdvancedTecniquesResults } from '../componentsPages/AdvancedTecniquesResults'
import { Form } from '../componentsPages/Form'
import { AdvancedTecniques } from '../services/AdvancedTecniques'
import { NumericMap } from '../services/NumericMap'
import { Spacer } from '../components/Spacer'
import { MapOrCycle } from '../componentsPages/MapOrCycle'
import { DebugForm } from '../componentsPages/DebugForm'
import './Home.css'
import { _onTauri } from '../helpers/_onTauri'

/**
 * Home page
 */
export function Home () {
  const nameState = useState('')
  const name = nameState[0]

  const birthdayState = useState('')
  const birthday = birthdayState[0]

  const todayState = useState(new Date().toISOString().split('T')[0])
  const today = todayState[0]

  const debugState = useState(false)
  const debug = debugState[0]

  const [result, setResult] = useState({} as NumericMap)
  const [advancedResult, setAdvancedResult] = useState({} as AdvancedTecniques)
  const [hasResult, setHasResult] = useState(false)

  /**
   * Calculates the map
   * @param clean - Used when the person is typing and the data is not complete
   */
  function calculate (clean = false) {
    if (clean) {
      setResult({} as NumericMap)
      setAdvancedResult({} as AdvancedTecniques)
      setHasResult(false)
    } else {
      const map = new NumericMap(name, birthday, today)
      const advanced = new AdvancedTecniques(map)

      setResult(map)
      setAdvancedResult(advanced)
      setHasResult(true)
    }
  }

  useEffect(() => {
    if (typeof result.C1 === 'undefined') {
      setAdvancedResult({} as AdvancedTecniques)
      setHasResult(false)
    } else {
      const advanced = new AdvancedTecniques(result)
      setAdvancedResult(advanced)
      setHasResult(true)
    }
  }, [result])

  return (
    <Container className={ _onTauri ? 'tauri-container' : 'web-container'} maxWidth='lg'>
      <Form
        name={nameState}
        birthday={birthdayState}
        calculate={calculate}
        today={todayState}
        debug={debugState}
      />
      {hasResult
        ? (
          <>
            {/* <Advancedbuttons advancedMap={advancedMap} advancedTecniques={advancedTecniques}/> */}
            {
              debug
                ? <DebugForm resultForm={[result, setResult]}/>
                : <MapOrCycle result={result}/>
            }
            <AdvancedTecniquesResults result={advancedResult}/>
          </>
        )
        : <></>
      }
      <Spacer/>
    </Container>
  )
}
