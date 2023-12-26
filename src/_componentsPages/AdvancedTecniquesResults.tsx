import { Paper } from '@mui/material'
import { Tec0Cycles } from '../_componentsAdvanced/Tec0Cycles'
import { Tec10InterpretacaoDoPrimeiroCiclo } from '../_componentsAdvanced/Tec10InterpretacaoDoPrimeiroCiclo'
import { Tec11DonosPraticantes } from '../_componentsAdvanced/Tec11DonosPraticantes'
import { Tec12ConjuncaoCdMoOuMoCd } from '../_componentsAdvanced/Tec12ConjuncaoCdMoOuMoCd'
import { Tec13PotenciaisViciosReciclador } from '../_componentsAdvanced/Tec13PotenciaisViciosReciclador'
import { Tec14Pureza } from '../_componentsAdvanced/Tec14Pureza'
import { Tec1Piramide } from '../_componentsAdvanced/Tec1Piramide'
import { Tec2Ausencias } from '../_componentsAdvanced/Tec2Ausencias'
import { Tec4Multiplicidades } from '../_componentsAdvanced/Tec4Multiplicidades'
import { Tec5PotenciaisComoReagem } from '../_componentsAdvanced/Tec5PotenciaisComoReagem'
import { Tec6PotenciaisComoSentem } from '../_componentsAdvanced/Tec6PotenciaisComoSentem'
import { Tec7Riscos } from '../_componentsAdvanced/Tec7Riscos'
import { Tec8AdequacaoDaLinguagem } from '../_componentsAdvanced/Tec8AdequacaoDaLinguagem'
import { Tec9VibracaoDaExpressao } from '../_componentsAdvanced/Tec9VibracaoDaExpressao'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import './AdvancedTecniquesResults.css'
/**
 * The main form component
 * @returns Form component
 */
export function AdvancedTecniquesResults ({ result }: { result: AdvancedTecniques }) {
  return (
    <Paper variant='elevation' elevation={3} sx={{ padding: 1, marginTop: 5 }} >
      <Tec0Cycles result={result}/>
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