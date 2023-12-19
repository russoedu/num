import { Typography } from '@mui/material'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import { _array } from '../_helpers/_array'
import { purple } from '../_helpers/types'
import { AdvancedTitle } from '../_components/AdvancedTitle'
import { AdvancedGrid } from '../_components/AdvancedGrid'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import './Tec.css'

export function Tec2Ausencias ({ result }: { result: AdvancedTecniques }) {
  return (
    <>
      <AdvancedTitle>
        Ausências
      </AdvancedTitle>
      <Grid2 container className='tec-content'>
        <AdvancedGrid i={0} key='aus'>
          <Typography variant='h5' color={purple} sx={{ fontWeight: 'bold' }}>
            {
              result.tec2Ausencia.length > 0
                ? _array.join(result.tec2Ausencia)
                : 'Não há ausência'
            }
          </Typography>
        </AdvancedGrid>
      </Grid2>
      <div className='spacer'/>
    </>
  )
}