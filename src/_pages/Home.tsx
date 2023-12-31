import { Breakpoint, Button, ButtonGroup, Container } from '@mui/material'
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

  const [result, setResult] = useState({} as NumericMap)
  const [advancedResult, setAdvancedResult] = useState({} as AdvancedTecniques)
  const [hasResult, setHasResult] = useState(false)
  const [size, setSize] = useState('lg' as Breakpoint)

  /*
   * const advancedMap = useState(false)
   * const advancedTecniques = useState(false)
   */


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
      const map = new NumericMap(name, birthday)
      const advanced = new AdvancedTecniques(map)
      
      setResult(map)
      setAdvancedResult(advanced)
      setHasResult(true)
    }
  }

  return (
    <Container maxWidth={size}>
      <Form
        name={nameState}
        birthday={birthdayState}
        calculate={calculate}
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
      {/*  "xs" | "sm" | "md" | "lg" | "xl" */}
      <Spacer/>
      <div style={{ textAlign: 'center' }}>
        <ButtonGroup sx={{ paddingBottom: 2 }}>
          <Button variant={ size=== 'xs' ? 'contained' : 'outlined'} onClick={() => setSize('xs')}>pp</Button>
          <Button variant={ size=== 'sm' ? 'contained' : 'outlined'} onClick={() => setSize('sm')}>p</Button>
          <Button variant={ size=== 'md' ? 'contained' : 'outlined'} onClick={() => setSize('md')}>m</Button>
          <Button variant={ size=== 'lg' ? 'contained' : 'outlined'} onClick={() => setSize('lg')}>g</Button>
          <Button variant={ size=== 'xl' ? 'contained' : 'outlined'} onClick={() => setSize('xl')}>gg</Button>
        </ButtonGroup>
      </div>
    </Container>
  )
}