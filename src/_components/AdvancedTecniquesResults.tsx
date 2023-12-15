import { Divider, Paper, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import { purple } from '../helpers/types'

/**
 * The main form component
 * @returns Form component
 */
export function AdvancedTecniquesResults ({ result }: { result: AdvancedTecniques }) {
  return (
    <Paper variant='elevation' elevation={3} sx={{ padding: 3, marginTop: 5 }} >
      <Typography variant='h3' color={purple}>
            Pirâmide
      </Typography>
      <Divider sx={{ marginBottom: 2 }}/>
      {result.piramide.map(p => (
        <Grid container spacing={1} key={p.title} justifyContent={'flex-end'}>
          <Grid xs={1}>
            <Typography variant='h6'>
              {p.title}
            </Typography>
          </Grid>
          {p.results.map(r => (
            <Grid container xs={11} key={r.number}>
              <Grid xs={1}>
                <Typography variant='h6' color={purple}>
                  {r.number}
                </Typography>
              </Grid>
              <Grid xs={10}>
                {r.description}
              </Grid>
            </Grid>
          ))}
        </Grid>
      ))}
    </Paper>
  )
}