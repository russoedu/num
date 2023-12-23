import { Breakpoint, Button, ButtonGroup, Container } from '@mui/material'
import { useState } from 'react'
// import { Advancedbuttons } from '../_components/AdvancedButtons'
import { AdvancedTecniquesResults } from '../_componentsPages/AdvancedTecniquesResults'
import { Form } from '../_componentsPages/Form'
import { NumericMapResults } from '../_componentsPages/NumericMapResults'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import { NumericMap } from '../_services/NumericMap'
import './Home.css'

/**
 * Home page
 */
export function Home () {
  const nameState = useState('')
  const [name, setName] = nameState

  const birthdayState = useState('')
  const [birthday, setBirthday] = birthdayState

  const [result, setResult] = useState({} as NumericMap)
  const [advancedResult, setAdvancedResult] = useState({} as AdvancedTecniques)
  const [hasResult, setHasResult] = useState(false)
  const [size, setSize] = useState('lg' as Breakpoint)

  /*
   * const advancedMap = useState(false)
   * const advancedTecniques = useState(false)
   */


  /** replace by a state - "filled" */
  function calculate () {
    console.log('calc')
    const map = new NumericMap(name, birthday)
    const advanced = new AdvancedTecniques(map)
    setResult(map)
    setAdvancedResult(advanced)
    setHasResult(true)
  }
  function reset () {
    setResult({} as NumericMap)
    setAdvancedResult({} as AdvancedTecniques)
    setName('')
    setBirthday('')
    setHasResult(false)
  }

  return (
    <Container maxWidth={size}>
      {/*  "xs" | "sm" | "md" | "lg" | "xl" */}
      <div style={{ textAlign: 'center' }}>
        <p>Size test</p>
        <ButtonGroup sx={{ paddingBottom: 2 }}>
          <Button variant={ size=== 'xs' ? 'contained' : 'outlined'} onClick={() => setSize('xs')}>pp</Button>
          <Button variant={ size=== 'sm' ? 'contained' : 'outlined'} onClick={() => setSize('sm')}>p</Button>
          <Button variant={ size=== 'md' ? 'contained' : 'outlined'} onClick={() => setSize('md')}>m</Button>
          <Button variant={ size=== 'lg' ? 'contained' : 'outlined'} onClick={() => setSize('lg')}>g</Button>
          <Button variant={ size=== 'xl' ? 'contained' : 'outlined'} onClick={() => setSize('xl')}>gg</Button>
        </ButtonGroup>
      </div>
      <Form
        name={nameState}
        birthday={birthdayState}
        calculate={calculate}
        reset={reset}
        hasResult={hasResult}
      />
      {hasResult
        ? (
          <>
            <NumericMapResults result={result}/>
            {/* <Advancedbuttons advancedMap={advancedMap} advancedTecniques={advancedTecniques}/> */}
            <AdvancedTecniquesResults result={advancedResult}/>
          </>
        )
        : <></>
      }
    </Container>
  )
}