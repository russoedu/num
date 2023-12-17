import { Divider, Typography } from '@mui/material'
import { AdvancedTecniques } from '../../_services/AdvancedTecniques'
import { purple } from '../../helpers/types'
import Grid from '@mui/material/Unstable_Grid2'

export function Tec1Piramide ({ result }: { result: AdvancedTecniques }) {
  return (
    <>
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
    </>
  )
}