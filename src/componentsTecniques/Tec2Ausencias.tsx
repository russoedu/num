import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedGrid } from '../components/AdvancedGrid'
import { AdvancedTitle } from '../components/AdvancedTitle'
import { _array } from '../helpers/_array'
import { AdvancedTecniques } from '../services/AdvancedTecniques'
import './Tec.css'
import { Spacer } from '../components/Spacer'

export function Tec2Ausencias ({ result }: { result: AdvancedTecniques }) {
  const tec2Ausencia = result.tec2Ausencia

  return (
    <>
      <AdvancedTitle>
        Técnica 2 - Ausências (AUS)
      </AdvancedTitle>
      <Grid2 container className='tec-content'>
        <AdvancedGrid i={0}>
          <Typography variant='h5' dangerouslySetInnerHTML={{ __html:
               tec2Ausencia.length > 0
                 ? _array.join(
                   tec2Ausencia,
                   '<span class="vn">',
                   '</span>',
                 )
                 : 'Não há ausência',
          }}>
          </Typography>
        </AdvancedGrid>
      </Grid2>
      <Spacer/>
    </>
  )
}