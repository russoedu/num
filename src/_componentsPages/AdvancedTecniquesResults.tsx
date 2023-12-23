import { Paper } from '@mui/material'
import { Tec10FirstCycleInterpretation } from '../_componentsAdvanced/Tec10FirstCycleInterpretation'
import { Tec14Pureza } from '../_componentsAdvanced/Tec14Pureza'
import { Tec1Piramide } from '../_componentsAdvanced/Tec1Piramide'
import { Tec2Ausencias } from '../_componentsAdvanced/Tec2Ausencias'
import { Tec4Multiplicidades } from '../_componentsAdvanced/Tec4Multiplicidades'
import { Tec5PotenciaisComoReagem } from '../_componentsAdvanced/Tec5PotenciaisComoReagem'
import { Tec6PotenciaisComoSentem } from '../_componentsAdvanced/Tec6PotenciaisComoSentem'
import { Tec7Riscos } from '../_componentsAdvanced/Tec7Riscos'
import { Tec8AdequacaoDaLinguagem } from '../_componentsAdvanced/Tec8AdequacaoDaLinguagem'
import { Tec9ExpressionVibration } from '../_componentsAdvanced/Tec9ExpressionVibration'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import './AdvancedTecniquesResults.css'
/**
 * The main form component
 * @returns Form component
 */
export function AdvancedTecniquesResults ({ result }: { result: AdvancedTecniques }) {
  return (
    <Paper variant='elevation' elevation={3} sx={{ padding: 1, marginTop: 5 }} >
      <Tec8AdequacaoDaLinguagem result={result}/>
      <Tec1Piramide result={result}/>
      <Tec14Pureza result={result}/>
      <Tec2Ausencias result={result}/>
      <Tec4Multiplicidades result={result}/>
      <Tec5PotenciaisComoReagem result={result}/>
      <Tec6PotenciaisComoSentem result={result}/>
      <Tec7Riscos result={result}/>
      <Tec9ExpressionVibration result={result}/>
      <Tec10FirstCycleInterpretation result={result}/>
    </Paper>
  )
}