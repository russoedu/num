import { Button, TextField } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import './Form.css'

export function Form () {  
  return (
    <Grid container spacing={3} sx={{ flexGrow: 2 }}>
      <Grid xs={6}>
        <TextField 
          id='name'
          className='input'
          label='Nome completo'
          variant='outlined'
          aria-autocomplete='none'
          focused
          fullWidth
        />
      </Grid>
      <Grid xs={6}>
        <TextField 
          id='name'
          className='input'
          label='Data de nascimento'
          variant='outlined'
          aria-autocomplete='none'
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