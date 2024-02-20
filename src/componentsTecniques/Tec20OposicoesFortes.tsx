import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedGrid } from '../components/AdvancedGrid'
import { AdvancedTitle } from '../components/AdvancedTitle'
import { AdvancedTecniques } from '../services/AdvancedTecniques'
import './Tec.css'
import { Spacer } from '../components/Spacer'
import { CycleType, StrongOpositionT } from '../helpers/types'

export function Tec20OposicoesFortes ({ result }: { result: AdvancedTecniques }) {
  const tec20OposicoesFortes = result.tec20OposicoesFortes
  
  function getOpositionString(oposition: StrongOpositionT) {
    let result = ''
    if (oposition.type === CycleType.FIXED) {
      result = 'fixa'
    } else {
      result = 'no ciclo, '
      if (oposition.start === 0) {
        result += `do nascimento até os ${oposition.end} anos`
      } else if (oposition.end === Infinity) {
        result += `a partir dos ${oposition.start} anos`
      } else {
        result += `dos ${oposition.start} até os ${oposition.end} anos`
      }
    }

    return result
  }
  return (
    <>
      <AdvancedTitle>
        Técnica 20 - Oposições Fortes
      </AdvancedTitle>
      <Grid2 container className='tec-content'>
        {
          tec20OposicoesFortes.length > 0
            ? (
              tec20OposicoesFortes.map((p, i) => (
                <AdvancedGrid i={i} key={i}>
                  <Grid2 xs={2} sm={1} md={1}>
                    <Typography variant='h5' className='vn'>
                      {p.pair[0]}
                    </Typography>
                  </Grid2>
                  <Grid2 xs={2} sm={1} md={1}>
                    <Typography variant='h5' className='vn'>
                      {p.pair[1]}
                    </Typography>
                  </Grid2>
                  <Grid2 xs={8} sm={10} md={10}>
                    <Typography variant='h6'>
                  { getOpositionString(p) }
                    </Typography>
                  </Grid2>
                </AdvancedGrid>
              ))
            )
            : (
              <Typography variant='h5' className='vn'>
                Não há Oposições Fortes
              </Typography>
            )
        }
      </Grid2>
      <Spacer/>
    </>
  )
}