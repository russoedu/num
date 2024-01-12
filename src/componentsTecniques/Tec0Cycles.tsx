import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedGrid } from '../components/AdvancedGrid'
import { NumericMap } from '../services/NumericMap'
import { CSSProperties } from 'react'

/**
 * The cycles
 * @param result - The map
 */
export function Tec0Cycles ({ result }: { result: NumericMap }) {
  const cycles = result.tec0Cycles
  const initialCyclesWidth = `${cycles.c1End * 100 / cycles.c3End}%`
  const finalCycleWidth = `${(cycles.c3End - cycles.c2End) * 100 / cycles.c3End}%`

  const firstRealWidth = `${cycles.r1End * 100 / cycles.c3End }%`
  const realWidth = `${10 * 100 / cycles.c3End}%`
  const finalRealWidth = `${(cycles.c3End - cycles.r3End) * 100 / cycles.c3End}%`
  
  const agePosition = `${(cycles.age * 100) / cycles.c3End}%`

  function overlay (cycle: number): CSSProperties {
    return result.tec0Cycles.cycle === cycle
      ? { backgroundColor: '#000', mixBlendMode: 'overlay' }
      : { backgroundColor: 'transparent' }
  }
  
  return (
    <>
      <div className='cycleRealsContainer'>
        <table className='cycle'>
          <tr>
            <td className='c1' style={{ width: initialCyclesWidth }}>
              <Typography variant='h6' align='center'>
                C1
              </Typography>
            </td>
            <td className='c2' style={{ width: initialCyclesWidth }}>
              <Typography variant='h6' align='center'>
                C2
              </Typography>
            </td>
            <td className='c3' style={{ width: finalCycleWidth }}>
              <Typography variant='h6' align='center'>
                C3
              </Typography>
            </td>
          </tr>
        </table>
        <table className='reals'>
          <tr>
            <td className='r1' style={{ width: firstRealWidth }}>
              <Typography variant='h6' align='center'>
                R1
              </Typography>
            </td>
            <td className='r2' style={{ width: realWidth }}>
              <Typography variant='h6' align='center'>
                R2
              </Typography>
            </td>
            <td className='r3' style={{ width: realWidth }}>
              <Typography variant='h6' align='center'>
                R3
              </Typography>
            </td>
            <td className='r4' style={{ width: finalRealWidth }}>
              <Typography variant='h6' align='center'>
                R4
              </Typography>
            </td>
          </tr>
        </table>
        <table className='overlay'>
          <tr>
            <td style={{ width: initialCyclesWidth, ...overlay(1) }}/>
            <td style={{ width: initialCyclesWidth, ...overlay(2) }}/>
            <td style={{ width: finalCycleWidth, ...overlay(3) }}/>
          </tr>
        </table>
        <div className='ageLine' style={{ left: agePosition }}/>
        <Typography className='age' variant='h6' style={{ left: `calc(${agePosition} - 30px)` }}>
          {cycles.age} anos
        </Typography>
      </div>
      <Grid2 container className='tec-content'>
        {
          result.tec0Cycles.cycles.map((p, i) => (
            <>
              <AdvancedGrid i={i}>
                <Grid2 xs={12} sm={5} md={3}>
                  <Typography variant='h6'>
                    {p.name}
                  </Typography>
                </Grid2>
                <Grid2 container xs={12} sm={7} md={9}>
                  {p.vns.map(m => (
                    <>
                      <Grid2 xs={2} md={1}>
                        <Typography variant='h6'>
                          {m.position}
                        </Typography>
                      </Grid2>
                      <Grid2 xs={10} md={11}>
                        <Typography variant='h5' className='vn'>
                          {m.vn}
                        </Typography>
                      </Grid2>
                    </>
                  ))}
                </Grid2>
              </AdvancedGrid>
            </>
          ))
        }
      </Grid2>
    </>
  )
}