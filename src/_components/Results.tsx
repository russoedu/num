import { Paper, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Calculator } from '../_services/Calculator'
import './Form.css'

/**
 * The main form component
 * @returns Form component
 */
export function Result ({ result }: { result: Calculator }) {
  return (
    <Paper variant='outlined' sx={{ padding: 3, marginTop: 5 }}>
      <Grid container spacing={1} columns={{ xs: 5, md: 20 }} sx={{ flexGrow: 2 }}>
        <Grid xs={1}>
          <Typography variant='h6' align='right'>
            MO
          </Typography>
          <Typography variant='h6' align='right'>
            EU
          </Typography>
          <Typography variant='h6' align='right'>
            EX
          </Typography>
        </Grid>
        <Grid xs={1}>
          <Typography variant='h6' color={'#894fd6'} sx={{ fontWeight: 'bold' }}>
            {result.mo}
          </Typography>
          <Typography variant='h6' color={'#894fd6'}>
            {result.eu}
          </Typography>
          <Typography variant='h6' color={'#894fd6'}>
            {result.ex}
          </Typography>
        </Grid>
        <Grid xs={1}></Grid>
        <Grid xs={1}>
          <Typography variant='h6' align='right'>
            CD
          </Typography>
        </Grid>
        <Grid xs={1}>
          <Typography variant='h6' color={'#894fd6'}>
            {result.cd}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}