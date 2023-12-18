import { Divider, Typography } from '@mui/material'
import { AdvancedTecniques } from '../../_services/AdvancedTecniques'
import { _array } from '../../_helpers/_array'
import { purple } from '../../_helpers/types'
import Grid from '@mui/material/Unstable_Grid2/Grid2'

export function Tec5Potenciais ({ result }: { result: AdvancedTecniques }) {
  return (
    <>
      <Typography variant='h3' color={purple}>
        Potenciais
      </Typography>
      <Divider sx={{ marginBottom: 2 }}/>
      {
        result.potenciais.percentage.map(p => (
          <Grid container spacing={1} key={p.name} justifyContent={'flex-end'}>
            <Grid xs={3}>
              <Typography variant='h6'>
                {p.name}
              </Typography>
            </Grid>
            <Grid xs={9}>
              <Typography variant='h6'>
                {p.value}%
              </Typography>
            </Grid>
          </Grid>
        ))
      }
      <Typography variant='h5' sx={{ paddingTop: 1 }}>
        {result.potenciais.result}
      </Typography>
    </>
  )
}