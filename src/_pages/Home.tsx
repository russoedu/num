import { Container } from '@mui/material'
import { useState } from 'react'
import { Form } from '../_components/Form'
import { Calculator } from '../_services/Calculator'
import './Home.css'
import { Result } from '../_components/Results'

/**
 * Home page
 */
export function Home () {
  const nameState = useState('')
  const [name, setName] = nameState

  const birthdayState = useState('')
  const [birthday, setBirthday] = birthdayState

  const [result, setResult] = useState({} as Calculator)
  const [hasResult, setHasResult] = useState(false)

  /** replace by a state - "filled" */
  function calculate () {
    const c = new Calculator(name, birthday)
    setResult(c)
    setHasResult(true)
  }
  function reset () {
    setResult({} as Calculator)
    setName('')
    setBirthday('')
    setHasResult(false)
  }

  return (
    <Container maxWidth='md'>
      {/* "lg" | "xs" | "sm" | "md" | "xl" */}
      <Form
        name={nameState}
        birthday={birthdayState}
        calculate={calculate}
        reset={reset}
        hasResult={hasResult}
      />
      {hasResult
        ? <Result result={result}/>
        : <></>
      }
    </Container>
  )
}