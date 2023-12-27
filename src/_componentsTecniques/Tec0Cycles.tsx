import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedGrid } from '../_components/AdvancedGrid'
import { NumericMap } from '../_services/NumericMap'

/**
 * The cycles
 * @param result - The map
 */
export function Tec0Cycles ({ result }: { result: NumericMap }) {
  const cycles = result.tec0Cycles
  const initialCyclesWidth = cycles.c1End * 100 / cycles.c3End 
  const finalCycleWidth = (cycles.c3End - cycles.c2End) * 100 / cycles.c3End
  const firstRealWidth = cycles.r1End * 100 / cycles.c3End 
  const realWidth = 10 * 100 / cycles.c3End
  const finalRealWidth = (cycles.c3End - cycles.r3End) * 100 / cycles.c3End
  const agePosition = `${(cycles.age * 100) / cycles.c3End}%`
  
  return (
    <>
      <div style={{ width: '100%', borderSpacing: 0, height: 135, marginBottom: 25 }}>
        <table className='cycle' style={{ width: '100%', borderSpacing: 0, height: 50 }}>
          <tr>
            <td className='c1' style={{ width: `${initialCyclesWidth}%`, backgroundColor: '#f5d6d6' }}>
              <Typography variant='h6' align='center'>
              C1
              </Typography>
            </td>
            <td className='c2' style={{ width: `${initialCyclesWidth}%`, backgroundColor: '#d6d6f5' }}>
              <Typography variant='h6' align='center'>
              C2
              </Typography>
            </td>
            <td className='c3' style={{ width: `${finalCycleWidth}%` }}>
              <Typography variant='h6' align='center'>
              C3
              </Typography>
            </td>
          </tr>
        </table>
        <table className='cycle' style={{ width: '100%', borderSpacing: 0, height: 50, marginTop: 1 }}>
          <tr>
            <td className='r1' style={{ width: `${firstRealWidth}%`, backgroundColor: '#f5d6d6' }}>
              <Typography variant='h6' align='center'>
              R1
              </Typography>
            </td>
            <td className='r2' style={{ width: `${realWidth}%`, backgroundColor: '#d6d6f5' }}>
              <Typography variant='h6' align='center'>
              R2
              </Typography>
            </td>
            <td className='r3' style={{ width: `${realWidth}%`, backgroundColor: '#d8f5d6' }}>
              <Typography variant='h6' align='center'>
              R3
              </Typography>
            </td>
            <td className='r4' style={{ width: `${finalRealWidth}%` }}>
              <Typography variant='h6' align='center'>
              R4
              </Typography>
            </td>
          </tr>
        </table>
        <div style={{ width: 1, height: 130, backgroundColor: 'black', position: 'relative', top: -115, left: agePosition }}>
        </div>
        <Typography variant='h6' style={{ display: 'inline', position: 'relative', left: `calc(${agePosition} - 30px)`, top: -115 }}>
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