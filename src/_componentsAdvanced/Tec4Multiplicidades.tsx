import { Typography } from '@mui/material'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import { _array } from '../_helpers/_array'
import { purple } from '../_helpers/types'
import { AdvancedTitle } from '../_components/AdvancedTitle'
import { AdvancedGrid } from '../_components/AdvancedGrid'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import './Tec.css'

export function Tec4Multiplicidades ({ result }: { result: AdvancedTecniques }) {
  return (
    <>
      <AdvancedTitle>
        Multiplicidades
      </AdvancedTitle>
      <Grid2 container className='tec-content'>
        {
          result.tec4Multiplicidades.length > 0
            ? (
              result.tec4Multiplicidades.map((p, i) => (
                <>
                  <AdvancedGrid i={i} key={p.type}>
                    <Grid2 xs={12} sm={5} md={3}>
                      <Typography variant='h6'>
                        {p.type}
                      </Typography>
                    </Grid2>
                    <Grid2 container xs={12} sm={7} md={9}>
                      {p.multiples.map(m => (
                        <>
                          <Grid2 xs={2} md={1}>
                            <Typography variant='h5' color={purple} sx={{ fontWeight: 'bold' }}>
                              {m.number}
                            </Typography>
                          </Grid2>
                          <Grid2 xs={2} md={1}>
                            <Typography variant='h6'>
                              {m.type}
                            </Typography>
                          </Grid2>
                          <Grid2 xs={8} md={10}>
                            <Typography variant='h6'>
                              {_array.join(m.vns)}
                            </Typography>
                          </Grid2>
                        </>
                      ))}
                    </Grid2>
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
      <div className='spacer'/>
    </>
  )
}