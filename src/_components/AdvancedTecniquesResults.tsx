import { Paper } from '@mui/material'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import { Tec1Piramide } from './AdvancedTecniques/Tec1Piramide'
import { Tec2Ausencias } from './AdvancedTecniques/Tec2Ausencias'
import './AdvancedTecniquesResults.css'
import { Tec4Multiplicidades } from './AdvancedTecniques/Tec4Multiplicidades'
/**
 * The main form component
 * @returns Form component
 */
export function AdvancedTecniquesResults ({ result }: { result: AdvancedTecniques }) {
  return (
    <Paper variant='elevation' elevation={3} sx={{ padding: 3, marginTop: 5 }} >
      <Tec1Piramide result={result}/>
      <div className='spacer'/>
      <Tec2Ausencias result={result}/>
      <div className='spacer'/>
      <Tec4Multiplicidades result={result}/>
    </Paper>
  )
}