import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedGrid } from '../_components/AdvancedGrid'
import { AdvancedTitle } from '../_components/AdvancedTitle'
import { _array } from '../_helpers/_array'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import './Tec.css'
import { Spacer } from '../_components/Spacer'

export function Tec4Multiplicidades ({ result }: { result: AdvancedTecniques }) {
  return (
    <>
      <AdvancedTitle>
        Multiplicidades
      </AdvancedTitle>
      <Grid2 container className='tec-content'>
        {
          result.tec4Multiplicidades.data.length > 0
            ? (
              <>
                {
                  result.tec4Multiplicidades.data.map((p, i) => (
                    <>
                      <AdvancedGrid i={i}>
                        <Grid2 xs={12} sm={5} md={3}>
                          <Typography variant='h6'>
                            {p.type}
                          </Typography>
                        </Grid2>
                        <Grid2 container xs={12} sm={7} md={9}>
                          {p.multiples.map(m => (
                            <>
                              <Grid2 xs={2} md={1}>
                                <Typography variant='h5' className='vn'>
                                  {m.vn}
                                </Typography>
                              </Grid2>
                              <Grid2 xs={2} md={1}>
                                <Typography variant='h6'>
                                  {m.type}
                                </Typography>
                              </Grid2>
                              <Grid2 xs={8} md={10}>
                                <Typography variant='h6'>
                                  {_array.join(m.positions)}
                                </Typography>
                              </Grid2>
                            </>
                          ))}
                        </Grid2>
                      </AdvancedGrid>
                    </>
                  ))
                }
                <Typography variant='h6' marginTop={2}>
                  {result.tec4Multiplicidades.comments}
                </Typography>
              </>
            )
            : (
              <AdvancedGrid i={0}>
                <Typography variant='h6'>
                Não há multiplicidades
                </Typography>
              </AdvancedGrid>
            )
        }
      </Grid2>
      <Spacer/>
    </>
  )
}