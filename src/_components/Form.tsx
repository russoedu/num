import DeleteIcon from '@mui/icons-material/HighlightOff'
import { Alert, Button, InputAdornment, TextField } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useEffect, useState } from 'react'
import { _date } from '../helpers/_date'
import { FormInput } from '../helpers/types'
import './Form.css'

/**
 * The main form component
 * @returns Form component
 */
export function Form ({ name, birthday, hasResult, calculate, reset }: FormInput) {
  const [formName, setName] = name
  const [formBirthday, setBirthday] = birthday
  const [valid, setValid] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  /**
   * Updates the name
   * @param event - The input change event
   */
  function handleNameChange (event: React.ChangeEvent<HTMLTextAreaElement>) {
    setName(event.target.value.toUpperCase())
  }

  /**
   * Cleans the name
   */
  function cleanName () {
    setName('')
    reset()
  }

  /**
   * Updates the birthday
   * @param event - The input change event
   */
  function handleBirthdayChange (event: React.ChangeEvent<HTMLTextAreaElement>) {
    setBirthday(event.target.value)
  }

  /**
   * Cleans the birthday
   */
  function cleanBirthday () {
    setBirthday('')
    reset()
  }

  /**
   * Handles the "Enter" press to calculate. If the fields are not filled, shows the alert
   * @param event - The key down event
   */
  function handleKeyDown (event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Enter') {
      if (valid) {
        calculate()
      } else {
        setShowAlert(true)
        setTimeout(() => {
          setShowAlert(false)
        }, 5000)
      }
    }
  }

  /**
   * Checks if bot the name and birthday are filled to set valid to true
   */
  useEffect(() => {
    const isValid = formName !== '' && _date.isValid(formBirthday)
    setValid(isValid)
    if(isValid) {
      setShowAlert(false)
    }
  }, [formName, formBirthday])

  return (
    <Grid container spacing={3} columns={{ xs: 6, md: 12 }} sx={{ flexGrow: 2 }}>
      <Grid container xs={12}>
        <Grid xs={6}>
          <TextField 
            id='name'
            className='input'
            value={formName}
            onChange={handleNameChange}
            onKeyDown={handleKeyDown}
            label='Nome completo'
            variant='outlined'
            aria-autocomplete='none'
            autoComplete='off'
            autoFocus
            type='text'
            helperText='Nome completo como no nascimento'
            InputProps={{
              endAdornment: <InputAdornment position='start'>
                <div onClick={cleanName}>
                  <DeleteIcon id='clean-name' className='clean-button'/>
                </div>
              </InputAdornment>,
            }}
            focused
            fullWidth
          />
        </Grid>
        <Grid xs={6}>
          <TextField 
            id='birthDay'
            className='input'
            value={formBirthday}
            onChange={handleBirthdayChange}
            onKeyDown={handleKeyDown}
            label='Data de nascimento'
            variant='outlined'
            aria-autocomplete='none'
            type='date'
            InputProps={{
              endAdornment: <InputAdornment position='start'>
                <div onClick={cleanBirthday}>
                  <DeleteIcon className='clean-button'/>
                </div>
              </InputAdornment>,
            }}
            focused
            fullWidth
          />
        </Grid>
      </Grid>
      {showAlert
        ? (
          <Grid xs={12}>
            <Alert severity='info' color='info'>
              Por favor preencha o nome completo e a data de nascimento para calcular
            </Alert>
          </Grid>
        )
        : (
          <Grid container xs={6} mdOffset={6}>
            {hasResult
              ? (
                <Grid xs={6}>
                  <Button
                    size='large'
                    variant='contained'
                    onClick={reset}
                    fullWidth
                  >
                    Limpar
                  </Button>
                </Grid>
              )
              : (<></>)
            }
            <Grid xs md={hasResult ? 6: 12}>
              <Button
                size='large'
                variant='contained'
                disabled={!valid}
                onClick={calculate}
                fullWidth
              >
                Calcular
              </Button>
            </Grid>
          </Grid>
        )}
    </Grid>
  )
}