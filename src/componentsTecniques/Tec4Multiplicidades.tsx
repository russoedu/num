import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedGrid } from '../components/AdvancedGrid'
import { AdvancedTitle } from '../components/AdvancedTitle'
import { _array } from '../helpers/_array'
import { AdvancedTecniques } from '../services/AdvancedTecniques'
import './Tec.css'
import { Spacer } from '../components/Spacer'
import { _tec } from '../helpers/_tec'

export function Tec4Multiplicidades ({ result }: { result: AdvancedTecniques }) {
  const tec4Multiplicidades = result.tec4Multiplicidades

  return (
    <>
      <AdvancedTitle>
        Técnica 4 - Duplicidades ou mais
      </AdvancedTitle>
      <Grid2 container className='tec-content'>
        {
          tec4Multiplicidades.data.length > 0
            ? (
              <div className='empty' key={'tec-content-x'}>
                {
                  tec4Multiplicidades.data.map((cycle, i) => (
                    <>
                      <AdvancedGrid i={i} key={'mult-' + i}>
                        <Grid2 xs={12} sm={5} md={3}>
                          <Typography variant='h6'>
                            {cycle.type}
                          </Typography>
                        </Grid2>
                        <Grid2 container xs={12} sm={7} md={9}>
                          {cycle.multiples.map((m, j) => (
                            <div className='empty' key={'mult-vn-' + j}>
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
                                  {_array.join(m.positions)} {
                                    m.start === _tec.cycleStartEnd(cycle.type).start &&
                                  m.end === _tec.cycleStartEnd(cycle.type).end
                                      ? ''
                                      : m.start === 0
                                        ? ` - até os ${m.end} anos`
                                        : m.end === Infinity
                                          ? ` - a partir dos ${m.start} anos`
                                          : ` - dos ${m.start} aos ${m.end} anos`
                                  }
                                </Typography>
                              </Grid2>
                            </div>
                          ))}
                        </Grid2>
                      </AdvancedGrid>
                    </>
                  ))
                }
                <Typography variant='h6'>
                  {tec4Multiplicidades.comments}
                </Typography>
              </div>
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
