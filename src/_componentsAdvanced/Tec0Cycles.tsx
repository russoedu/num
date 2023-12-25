import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedGrid } from '../_components/AdvancedGrid'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import { AdvancedTitle } from '../_components/AdvancedTitle'
import { useState } from 'react'

/*
 * https://stackoverflow.com/questions/4932181/rounded-table-corners-css-only
 * 
 * th:first-of-type {
 * border-top-left-radius: 10px;
 * }
 * th:last-of-type {
 * border-top-right-radius: 10px;
 * }
 * tr:last-of-type td:first-of-type {
 * border-bottom-left-radius: 10px;
 * }
 * tr:last-of-type td:last-of-type {
 * border-bottom-right-radius: 10px;
 * }
 * table {
 *   border-collapse:separate;
 *   border:solid black 1px;
 *   border-radius:6px;
 *   -moz-border-radius:6px;
 * }
 */

/*
 * td, th {
 *   border-left:solid black 1px;
 *   border-top:solid black 1px;
 * }
 */

/*
 * th {
 *   background-color: blue;
 *   border-top: none;
 * }
 */

/*
 * td:first-child, th:first-child {
 *    border-left: none;
 * }
 */
export function Tec0Cycles ({ result }: { result: AdvancedTecniques }) {
  const [show, setShow] = useState(false)
  const cycles = result.tec0Cycles
  const initialCyclesWidth = cycles.c1End * 100 / cycles.c3End 
  const finalCycleWidth = (cycles.c3End - cycles.c2End) * 100 / cycles.c3End
  const firstRealWidth = cycles.r1End * 100 / cycles.c3End 
  const realWidth = 10 * 100 / cycles.c3End
  const finalRealWidth = (cycles.c3End - cycles.r3End) * 100 / cycles.c3End
  const agePosition = `${(cycles.age * 100) / cycles.c3End}%`
  
  return (
    <>
      <div style={{ cursor: 'pointer' }} onClick={() => setShow(!show)}>
        <AdvancedTitle>
          Ciclos
        </AdvancedTitle>
      </div>
      { show
        ? (
          <>
            <p>Usando para ver se estou calculando certo. Pode ou não ficar no final.</p>
            <div style={{ width: '100%', borderSpacing: 0, height: 160, paddingTop: 25, marginBottom: 25 }}>
              <table style={{ width: '100%', borderSpacing: 0, height: 50 }}>
                <tr>
                  <td style={{ width: `${initialCyclesWidth}%`, backgroundColor: '#f5d6d6' }}>
                    <Typography variant='h6' align='center'>
              C1
                    </Typography>
                  </td>
                  <td style={{ width: `${initialCyclesWidth}%`, backgroundColor: '#d6d6f5' }}>
                    <Typography variant='h6' align='center'>
              C2
                    </Typography>
                  </td>
                  <td style={{ width: `${finalCycleWidth}%`, backgroundColor: '#d8f5d6' }}>
                    <Typography variant='h6' align='center'>
              C3
                    </Typography>
                  </td>
                </tr>
              </table>
              <table style={{ width: '100%', borderSpacing: 0, height: 50, marginTop: 1 }}>
                <tr>
                  <td style={{ width: `${firstRealWidth}%`, backgroundColor: '#f5d6d6' }}>
                    <Typography variant='h6' align='center'>
              R1
                    </Typography>
                  </td>
                  <td style={{ width: `${realWidth}%`, backgroundColor: '#d6d6f5' }}>
                    <Typography variant='h6' align='center'>
              R2
                    </Typography>
                  </td>
                  <td style={{ width: `${realWidth}%`, backgroundColor: '#d8f5d6' }}>
                    <Typography variant='h6' align='center'>
              R3
                    </Typography>
                  </td>
                  <td style={{ width: `${finalRealWidth}%`, backgroundColor: '#f5ebd6' }}>
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
            <p>(ciclos mostrando só valores do ciclo, excluindo os fixos)</p>
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
            <div className='spacer'/>
          </>
        )
        :(
          <>
            <p>Clique no título para ver os valores</p>
          </>
        )}      
    </>
  )
}