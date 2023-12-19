import { Typography } from '@mui/material'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import { _array } from '../_helpers/_array'
import { purple } from '../_helpers/types'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedTitle } from '../_components/AdvancedTitle'
import { AdvancedGrid } from '../_components/AdvancedGrid'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

export function Tec4Multiplicidades ({ result }: { result: AdvancedTecniques }) {
  return (
    <>
      <AdvancedTitle>
        Multiplicidades
      </AdvancedTitle>
      <Grid2 container>
        {
          result.multiplicidades.length > 0
            ? (
              result.multiplicidades.map((p, i) => (
                <>
                  <AdvancedGrid i={i} key={p.type}>
                    <Grid xs={12} sm={3}>
                      <Typography variant='h6'>
                        {p.type}
                      </Typography>
                    </Grid>
                    {p.multiples.map(m => (
                      <Grid container xs={12} sm={9} key={m.number}>
                        <Grid xs={2} sm={1}>
                          <Typography variant='h5' color={purple} sx={{ fontWeight: 'bold' }}>
                            {m.number}
                          </Typography>
                        </Grid>
                        <Grid xs={2} sm={1}>
                          <Typography variant='h6'>
                            {m.type}
                          </Typography>
                        </Grid>
                        <Grid xs={8} sm={7}>
                          <Typography variant='h6'>
                            {_array.join(m.vns)}
                          </Typography>
                        </Grid>
                      </Grid>
                    ))}
                  </AdvancedGrid>
                </>
              ))
            )
            : (
              <AdvancedGrid i={0} key='mul'>
                <Typography variant='h6'>
                Não há multiplicidades
                </Typography>
              </AdvancedGrid>
            )
        }
      </Grid2>
    </>
  )
}