import DeleteIcon from '@mui/icons-material/HighlightOff'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import { Button, InputAdornment, TextField } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useEffect, useState } from 'react'
import { _date } from '../helpers/_date'
import { FormInput } from '../helpers/types'
import './Form.css'

/**
 * The main form component
 * @returns Form component
 */
export function Form ({ name, birthday, today, calculate }: FormInput) {
  const [formName, setName] = name
  const [formBirthday, setBirthday] = birthday
  const [formToday, setToday] = today
  const [hasData, setHasData] = useState(false)

  /**
   * Resets the map
   */
  function reset () {
    setName('')
    setBirthday('')
    setToday(new Date().toISOString().split('T')[0])
    setHasData(false)
    calculate(true)
  }

  /**
   * Updates the name or the birthday
   * @param event - The input change event
   */
  function handleChange (event: React.ChangeEvent<HTMLTextAreaElement>) {
    if (event.target.id === 'name') {
      setName(event.target.value.toUpperCase())
    } else if (event.target.id === 'birthDay') {
      setBirthday(event.target.value)
    } else if (event.target.id === 'year') {
      setToday(event.target.value)
    }
  }

  /**
   * Cleans the name or the birthday
   */
  function inputAction (event: React.MouseEvent<HTMLDivElement>) {
    if (event.currentTarget.id === 'resetName') {
      setName('')
    } else if (event.currentTarget.id === 'resetBirthDay') {
      setBirthday('')
    } else if (event.currentTarget.id === 'resetToday') {
      setToday(new Date().toISOString().split('T')[0])
    }
  }

  /**
   * Checks if both the name and birthday are filled to calculate it or to hide the maps
   */
  useEffect(() => {
    const isValid = formName !== '' && formToday !== '' &&
      _date.isValid(formBirthday) && _date.isValid(formToday)

    if (isValid) {
      calculate()
      setHasData(true)
    } else {
      calculate(true)
      setHasData(false)
    }
  }, [formName, formBirthday, formToday])

  return (
    <Grid container spacing={3} columns={{ xs: 6, md: 12 }}>
      <Grid xs={6}>
        <TextField
          id='name'
          className='input'
          value={formName}
          onChange={handleChange}
          label='Nome completo'
          variant='outlined'
          autoComplete='off'
          autoFocus
          type='text'
          focused
          fullWidth
          InputProps={{
            endAdornment: <InputAdornment position='start'>
              <div id='resetName' onClick={inputAction}>
                <DeleteIcon id='clean-name' className='action-button'/>
              </div>
            </InputAdornment>,
          }}

        />
      </Grid>
      <Grid xs={6}>
        <TextField
          id='birthDay'
          className='input'
          value={formBirthday}
          onChange={handleChange}
          label='Data de nascimento'
          variant='outlined'
          autoComplete='off'
          type='date'
          focused
          fullWidth
          InputProps={{
            endAdornment: <InputAdornment position='start'>
              <div id='resetBirthDay' onClick={inputAction}>
                <DeleteIcon className='action-button'/>
              </div>
            </InputAdornment>,
          }}

        />
      </Grid>

      <Grid xs={6}>
        <TextField
          id='year'
          className='input'
          value={formToday}
          onChange={handleChange}
          label='Data do cálculo'
          variant='outlined'
          autoComplete='off'
          type='date'
          focused
          fullWidth
          InputProps={{
            endAdornment: <InputAdornment position='start'>
              <div id='resetToday' onClick={inputAction}>
                <RestartAltIcon className='action-button'/>
              </div>
            </InputAdornment>,
          }}
        />
      </Grid>

      <Grid xs={6}>
        <Button
          className='form-button'
          size='large'
          variant='contained'
          onClick={reset}
          fullWidth
          disabled={!hasData}
        >
          Limpar
        </Button>
      </Grid>
    </Grid>
  )
}
