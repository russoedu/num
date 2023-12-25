import { Typography } from '@mui/material'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'

export function Tec0Cycles ({ result }: { result: AdvancedTecniques }) {
  const cycles = result.tec0Cycles
  const initialCyclesWidth = cycles.c1End * 100 / cycles.c3End 
  const finalCycleWidth = (cycles.c3End - cycles.c2End) * 100 / cycles.c3End
  const firstRealWidth = cycles.r1End * 100 / cycles.c3End 
  const realWidth = 10 * 100 / cycles.c3End
  const finalRealWidth = (cycles.c3End - cycles.r3End) * 100 / cycles.c3End
  const agePosition = `${(cycles.age * 100) / cycles.c3End}%`
  
  return (
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
  )
}