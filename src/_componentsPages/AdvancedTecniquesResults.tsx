import { Paper } from '@mui/material'
import { Tec10InterpretacaoDoPrimeiroCiclo } from '../_componentsTecniques/Tec10InterpretacaoDoPrimeiroCiclo'
import { Tec11DonosPraticantes } from '../_componentsTecniques/Tec11DonosPraticantes'
import { Tec12ConjuncaoCdMoOuMoCd } from '../_componentsTecniques/Tec12ConjuncaoCdMoOuMoCd'
import { Tec13PotenciaisViciosReciclador } from '../_componentsTecniques/i-Tec13PotenciaisViciosReciclador'
import { Tec14Pureza } from '../_componentsTecniques/Tec14Pureza'
import { Tec1Piramide } from '../_componentsTecniques/Tec1Piramide'
import { Tec2Ausencias } from '../_componentsTecniques/Tec2Ausencias'
import { Tec4Multiplicidades } from '../_componentsTecniques/Tec4Multiplicidades'
import { Tec5PotenciaisComoReagem } from '../_componentsTecniques/Tec5PotenciaisComoReagem'
import { Tec6PotenciaisComoSentem } from '../_componentsTecniques/Tec6PotenciaisComoSentem'
import { Tec7Riscos } from '../_componentsTecniques/i-Tec7Riscos'
import { Tec8AdequacaoDaLinguagem } from '../_componentsTecniques/Tec8AdequacaoDaLinguagem'
import { Tec9VibracaoDaExpressao } from '../_componentsTecniques/i-Tec9VibracaoDaExpressao'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import './AdvancedTecniquesResults.css'
/**
 * The main form component
 * @param result - The advanced techniques result
 */
export function AdvancedTecniquesResults ({ result }: { result: AdvancedTecniques }) {
  return (
    <Paper variant='elevation' elevation={3} sx={{ padding: 1, marginTop: 5 }} >
      <Tec8AdequacaoDaLinguagem result={result}/>
      <Tec11DonosPraticantes result={result}/>
      <Tec14Pureza result={result}/>
      <Tec4Multiplicidades result={result}/>
      
      {/* 19 */}
      {/* 20 */}
      
      <Tec1Piramide result={result}/>
      <Tec12ConjuncaoCdMoOuMoCd result={result}/>
      
      {/* NÍVEL II – TÍTULO 5 – VÁLVULA DE ESCAPE/ REFÚGIO – EU */}
      {/* NÍVEL II – TÍTULO 6 – PEDÁGIO – DM */}

      <Tec9VibracaoDaExpressao result={result}/>

      {/* VIBRAÇÕES NUMÉRICAS DOMINANTES */}
      {/* Comparar as fixas e interpretar (não é uma técnica, colocar como observação) */}
      {/* IMPOSIÇÃO /  CONVOCADA – MO ou CD ou EU */}

      <Tec2Ausencias result={result}/>

      {/* NÍVEL II – TÍTULO 2 – POVO DIFERENCIADO */}
      {/* TÉC. 13 –  3ª leitura – POTENCIAIS / VÍCIOS / RECICLADOR DE ENERGIA */}

      <Tec5PotenciaisComoReagem result={result}/>
      <Tec6PotenciaisComoSentem result={result}/>
      <Tec7Riscos result={result}/>
      <Tec10InterpretacaoDoPrimeiroCiclo result={result}/>
      <Tec13PotenciaisViciosReciclador result={result}/>
    </Paper>
  )
}