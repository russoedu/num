import { Container, Paper } from '@mui/material'
import { Form } from '../_components/Form'
import { useState } from 'react'
import './Home.css'

/**
 * Home page
 */
export function Home () {
  const nameState = useState('')
  const [name] = nameState

  const birthdayState = useState('')
  const [birthday] = birthdayState

  const calculate = () => {
    console.log(name)
    console.log(birthday)
  }

  return (
    <Container maxWidth='md'>
      <Paper variant='outlined' sx={{ padding: 3 }}>
        {/* "lg" | "xs" | "sm" | "md" | "xl" */}
        <Form name={nameState} birthday={birthdayState} calculate={calculate}/>
        {/* Results */}
      </Paper>
    </Container>
  )
}