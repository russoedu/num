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

  function getOpositionType (oposition: StrongOpositionT) {
    if (oposition.type === CycleType.FIXED) {
      return 'fixa'
    } else {
      return 'no ciclo'
    }
  }

  function getOpositionAge (oposition: StrongOpositionT) {
    if (oposition.type === CycleType.FIXED) {
      return ''
    } else {
      if (oposition.start === 0) {
        return `até os ${oposition.end} anos`
      } else if (oposition.end === Infinity) {
        return `a partir dos ${oposition.start} anos`
      } else {
        return `dos ${oposition.start} até os ${oposition.end} anos`
      }
    }
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
                  <Grid2 xs={2} sm={2} md={2}>
                    <Typography variant='h5' className='vn' display={'contents'}>
                      {p.pair[0]}
                    </Typography>
                    &nbsp;X&nbsp;
                    <Typography variant='h5' className='vn' display={'contents'}>
                      {p.pair[1]}
                    </Typography>
                  </Grid2>
                  <Grid2 xs={3} sm={2} md={2}>
                    <Typography variant='h5' fontWeight='bold'>
                      { getOpositionType(p) }
                    </Typography>
                  </Grid2>
                  <Grid2 xs={7} sm={8} md={8}>
                    <Typography variant='h6'>
                      { getOpositionAge(p) }
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
