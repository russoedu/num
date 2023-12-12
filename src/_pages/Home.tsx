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
  const [name] = nameState

  const birthdayState = useState('')
  const [birthday] = birthdayState

  const [result, setResult] = useState({} as Calculator)
  const [hasResult, setHasResult] = useState(false)

  const calculate = () => {
    const c = new Calculator(name, birthday)
    setResult(c)
    setHasResult(true)
  }

  return (
    <Container maxWidth='md'>
      {/* "lg" | "xs" | "sm" | "md" | "xl" */}
      <Form name={nameState} birthday={birthdayState} calculate={calculate}/>
      {hasResult
        ? <Result result={result}/>
        : <></>
      }
    </Container>
  )
}