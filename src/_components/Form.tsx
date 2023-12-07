import DeleteIcon from '@mui/icons-material/HighlightOff'
import { Button, InputAdornment, TextField } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useEffect, useState } from 'react'
import './Form.css'
import { _date } from '../_services/_date'

/**
 * The main form component
 * @returns Form component
 */
export function Form () {
  const [name, setName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [valid, setValid] = useState(false)

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
  }

  /**
   * Checks if bot the name and birthday are filled to set valid to true
   */
  useEffect(() => {
    const date = new Date(birthday)

    setValid(name !== '' && _date.isValid(date))
  }, [name, birthday])

  return (
    <Grid container spacing={3} sx={{ flexGrow: 2 }}>
      <Grid xs={6}>
        <TextField 
          id='name'
          className='input'
          value={name}
          onChange={handleNameChange}
          label='Nome completo'
          variant='outlined'
          aria-autocomplete='none'
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
          value={birthday}
          onChange={handleBirthdayChange}
          label='Data de nascimento'
          variant='outlined'
          aria-autocomplete='none'
          type='date'
          helperText='Data no formato dd/mm/aaaa'
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
      <Grid xs md={4} mdOffset={8}>
        <Button
          size='large'
          variant='contained'
          sx={{ float: 'right' }}
          disabled={!valid}
        >
          Calcular
        </Button>
      </Grid>
    </Grid>
  )
}