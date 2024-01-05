import { Container } from '@mui/material'
import { useState } from 'react'
// import { Advancedbuttons } from '../_components/AdvancedButtons'
import { AdvancedTecniquesResults } from '../_componentsPages/AdvancedTecniquesResults'
import { Form } from '../_componentsPages/Form'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import { NumericMap } from '../_services/NumericMap'
import { Spacer } from '../_components/Spacer'
import { MapOrCycle } from '../_componentsPages/MapOrCycle'

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

  return (
    <Container maxWidth='lg'>
      <Form
        name={nameState}
        birthday={birthdayState}
        calculate={calculate}
        today={todayState}
      />
      {hasResult
        ? (
          <>
            <MapOrCycle result={result}/>
            {/* <Advancedbuttons advancedMap={advancedMap} advancedTecniques={advancedTecniques}/> */}
            <AdvancedTecniquesResults result={advancedResult}/>
          </>
        )
        : <></>
      }
      <Spacer/>
    </Container>
  )
}