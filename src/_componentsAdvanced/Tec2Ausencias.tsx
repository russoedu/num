import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedGrid } from '../_components/AdvancedGrid'
import { AdvancedTitle } from '../_components/AdvancedTitle'
import { _array } from '../_helpers/_array'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import './Tec.css'
import { Spacer } from '../_components/Spacer'

export function Tec2Ausencias ({ result }: { result: AdvancedTecniques }) {
  return (
    <>
      <AdvancedTitle>
        Ausências (AUS)
      </AdvancedTitle>
      <Grid2 container className='tec-content'>
        <AdvancedGrid i={0}>
          <Typography variant='h5' dangerouslySetInnerHTML={{ __html:
               result.tec2Ausencia.length > 0
                 ? _array.join(
                   result.tec2Ausencia,
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