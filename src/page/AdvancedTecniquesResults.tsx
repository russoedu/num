import { Paper } from '@mui/material'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import { Tec1Piramide } from '../_componentsAdvanced/Tec1Piramide'
import { Tec2Ausencias } from '../_componentsAdvanced/Tec8AdequacaoDaLinguagem'
import './AdvancedTecniquesResults.css'
import { Tec4Multiplicidades } from '../_componentsAdvanced/Tec4Multiplicidades'
import { Tec5PotenciaisComoReagem } from '../_componentsAdvanced/Tec5PotenciaisComoReagem'
/**
 * The main form component
 * @returns Form component
 */
export function AdvancedTecniquesResults ({ result }: { result: AdvancedTecniques }) {
  return (
    <Paper variant='elevation' elevation={3} sx={{ padding: 1, marginTop: 5 }} >
      <Tec1Piramide result={result}/>
      <div className='spacer'/>
      <Tec2Ausencias result={result}/>
      <div className='spacer'/>
      <Tec4Multiplicidades result={result}/>
      <div className='spacer'/>
      <Tec5PotenciaisComoReagem result={result}/>
    </Paper>
  )
}