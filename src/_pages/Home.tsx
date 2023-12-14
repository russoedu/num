import { Container } from '@mui/material'
import { useState } from 'react'
import { Form } from '../_components/Form'
import { Calculator } from '../_services/Calculator'
import './Home.css'
import { Result } from '../_components/Results'
import { AdvancedCalculator } from '../_services/AdvancedCalculator'
import { AdvancedResult } from '../_components/AdvancedResults'

/**
 * Home page
 */
export function Home () {
  const nameState = useState('')
  const [name, setName] = nameState

  const birthdayState = useState('')
  const [birthday, setBirthday] = birthdayState

  const [result, setResult] = useState({} as Calculator)
  const [advancedResult, setAdvancedResult] = useState({} as AdvancedCalculator)
  const [hasResult, setHasResult] = useState(false)

  /** replace by a state - "filled" */
  function calculate () {
    const c = new Calculator(name, birthday)
    const a = new AdvancedCalculator(c)
    setResult(c)
    setAdvancedResult(a)
    setHasResult(true)
  }
  function reset () {
    setResult({} as Calculator)
    setAdvancedResult({} as AdvancedCalculator)
    setName('')
    setBirthday('')
    setHasResult(false)
  }

  return (
    <Container maxWidth='lg'>
      {/* "lg" | "xs" | "sm" | "md" | "xl" */}
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
            <Result result={result}/>
            <AdvancedResult result={advancedResult}/>
          </>
        )
        : <></>
      }
    </Container>
  )
}