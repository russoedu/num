import DeleteIcon from '@mui/icons-material/HighlightOff'
import { Button, InputAdornment, TextField } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import './Form.css'
import { useState } from 'react'
import { normaliseName } from '../_services/normaliseName'

export function Form () {
  const [name, setName] = useState('')
  const [birthday, setBirthday] = useState('')
  function clean () {
    console.log('clean')
  }

  const handleNameChange = (event: any) => {
    console.log(event?.target.value)
    setName(normaliseName(event.target.value as string).toUpperCase())
    // setValid(FormService.validateInput(event.target.value, validation))
  }
  const handleBirthdayChange = (event: any) => {
    setBirthday(event.target.value)
    console.log(event?.target.value)
    // setValid(FormService.validateInput(event.target.value, validation))
  }

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
          helperText='Nome completo como registrado'
          InputProps={{
            endAdornment: <InputAdornment position='start'><div onClick={clean}>
              <DeleteIcon id='clean-name' className='clean-button'/></div></InputAdornment>,
          }}
          focused
          fullWidth
        />
      </Grid>
      <Grid xs={6}>
        <TextField 
          id='name'
          className='input'
          value={birthday}
          onChange={handleBirthdayChange}
          label='Data de nascimento'
          variant='outlined'
          aria-autocomplete='none'
          type='date'
          helperText='Data no formato dd/mm/aaaa'
          InputProps={{
            endAdornment: <InputAdornment position='start'><div onClick={ () => alert('ok') }>
              <DeleteIcon id='clean-birthday' className='clean-button'/></div></InputAdornment>,
          }}
          focused
          fullWidth
        />
      </Grid>
      <Grid xs md={4} mdOffset={8}>
        <Button size='large' variant='contained' sx={{ float: 'right' }}>
          Calcular
        </Button>
      </Grid>
    </Grid>
  )
}