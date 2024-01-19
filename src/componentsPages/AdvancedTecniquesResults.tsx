import { Paper } from '@mui/material'
import { Tec10InterpretacaoDoPrimeiroCiclo } from '../componentsTecniques/Tec10InterpretacaoDoPrimeiroCiclo'
import { Tec11DonosPraticantes } from '../componentsTecniques/Tec11DonosPraticantes'
import { Tec12ConjuncaoCdMoOuMoCd } from '../componentsTecniques/Tec12ConjuncaoCdMoOuMoCd'
import { Tec13PotenciaisViciosReciclador } from '../componentsTecniques/i-Tec13PotenciaisViciosReciclador'
import { Tec14Pureza } from '../componentsTecniques/Tec14Pureza'
import { Tec1Piramide } from '../componentsTecniques/Tec1Piramide'
import { Tec2Ausencias } from '../componentsTecniques/Tec2Ausencias'
import { Tec4Multiplicidades } from '../componentsTecniques/Tec4Multiplicidades'
import { Tec5PotenciaisComoReagem } from '../componentsTecniques/Tec5PotenciaisComoReagem'
import { Tec6PotenciaisComoSentem } from '../componentsTecniques/Tec6PotenciaisComoSentem'
import { Tec7Riscos } from '../componentsTecniques/i-Tec7Riscos'
import { Tec8AdequacaoDaLinguagem } from '../componentsTecniques/Tec8AdequacaoDaLinguagem'
import { Tec9VibracaoDaExpressao } from '../componentsTecniques/i-Tec9VibracaoDaExpressao'
import { AdvancedTecniques } from '../services/AdvancedTecniques'
import './AdvancedTecniquesResults.css'
import { Tec15RealizacaoEspontanea } from '../componentsTecniques/Tec15RealizacaoEspontanea'
import { Tec16ConquistaEspontanea } from '../componentsTecniques/Tec16ConquistaEspontanea'
/**
 * The main form component
 * @param result - The advanced techniques result
 */
export function AdvancedTecniquesResults ({ result }: { result: AdvancedTecniques }) {
  return (
    <Paper variant='elevation' elevation={3} sx={{ padding: 1, marginTop: 5 }} >
      <Tec1Piramide result={result}/>
      <Tec2Ausencias result={result}/>
      <Tec4Multiplicidades result={result}/>
      <Tec5PotenciaisComoReagem result={result}/>
      <Tec6PotenciaisComoSentem result={result}/>
      <Tec7Riscos result={result}/>
      <Tec8AdequacaoDaLinguagem result={result}/>
      <Tec9VibracaoDaExpressao result={result}/>
      <Tec10InterpretacaoDoPrimeiroCiclo result={result}/>
      <Tec11DonosPraticantes result={result}/>
      <Tec12ConjuncaoCdMoOuMoCd result={result}/>
      <Tec13PotenciaisViciosReciclador result={result}/>
      <Tec14Pureza result={result}/>
      <Tec15RealizacaoEspontanea result={result}/>
      <Tec16ConquistaEspontanea result={result}/>      
    </Paper>
  )
}