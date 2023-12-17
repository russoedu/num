import { Divider, Typography } from '@mui/material'
import { AdvancedTecniques } from '../../_services/AdvancedTecniques'
import { _array } from '../../helpers/_array'
import { purple } from '../../helpers/types'
import Grid from '@mui/material/Unstable_Grid2/Grid2'

export function Tec4Multiplicidades ({ result }: { result: AdvancedTecniques }) {
  return (
    <>
      <Typography variant='h3' color={purple}>
        Multiplicidades
      </Typography>
      <Divider sx={{ marginBottom: 2 }}/>
      {
        result.multiplicidades.length > 0
          ? result.multiplicidades.map(p => (
            <Grid container spacing={1} key={p.type} justifyContent={'flex-end'}>
              <Grid xs={4}>
                <Typography variant='h6'>
                  {p.type}
                </Typography>
              </Grid>
              {p.multiples.map(m => (
                <Grid container xs={8} key={m.number}>
                  <Grid xs={2}>
                    <Typography variant='h6' color={purple}>
                      {m.number}
                    </Typography>
                  </Grid>
                  <Grid xs={2}>
                    <Typography variant='h6' color={purple}>
                      {m.type}
                    </Typography>
                  </Grid>
                  <Grid xs={6}>
                    {_array.join(m.vns)}
                  </Grid>
                </Grid>
              ))}
            </Grid>
          ))
          : (
            <Typography variant='h6'>
            Não há multiplicidades
            </Typography>
          )
      }
    </>
  )
}