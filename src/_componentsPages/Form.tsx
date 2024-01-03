import DeleteIcon from '@mui/icons-material/HighlightOff'
import { Button, InputAdornment, TextField } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useEffect, useState } from 'react'
import { _date } from '../_helpers/_date'
import { FormInput } from '../_helpers/types'
import './Form.css'

/**
 * The main form component
 * @returns Form component
 */
export function Form ({ name, birthday, calculate }: FormInput) {
  const [formName, setName] = name
  const [formBirthday, setBirthday] = birthday
  const [hasData, setHasData] = useState(false)

  /**
   * Resets the map
   */
  function reset () {
    setName('')
    setBirthday('')
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
    }
  }

  /**
   * Cleans the name or the birthday
   */
  function cleanInput (event: React.MouseEvent<HTMLDivElement>) {
    if (event.currentTarget.id === 'resetName') {
      setName('')
    } else if (event.currentTarget.id === 'resetBirthDay') {
      setBirthday('')
    }
  }

  /**
   * Checks if both the name and birthday are filled to calculate it or to hide the maps
   */
  useEffect(() => {
    const isValid = formName !== '' && _date.isValid(formBirthday)
    if(isValid) {
      calculate()
      setHasData(true)
    } else {
      calculate(true)
      setHasData(false)
    }
  }, [formName, formBirthday, calculate])

  return (
    <Grid container spacing={3} columns={{ xs: 6, md: 12 }} sx={{ flexGrow: 2 }}>
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
          InputProps={{
            endAdornment: <InputAdornment position='start'>
              <div id='resetName' onClick={cleanInput}>
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
          onChange={handleChange}
          label='Data de nascimento'
          variant='outlined'
          autoComplete='off'
          type='date'
          InputProps={{
            endAdornment: <InputAdornment position='start'>
              <div id='resetBirthDay' onClick={cleanInput}>
                <DeleteIcon className='clean-button'/>
              </div>
            </InputAdornment>,
          }}
          focused
          fullWidth
        />
      </Grid>

      <Grid xs={12} md={6} lg={3} mdOffset={6} lgOffset={9}>
        <Button
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