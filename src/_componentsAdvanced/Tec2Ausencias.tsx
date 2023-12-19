import { Typography } from '@mui/material'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import { _array } from '../_helpers/_array'
import { purple } from '../_helpers/types'
import { AdvancedTitle } from '../_components/AdvancedTitle'
import { AdvancedGrid } from '../_components/AdvancedGrid'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

export function Tec2Ausencias ({ result }: { result: AdvancedTecniques }) {
  return (
    <>
      <AdvancedTitle>
        Ausências
      </AdvancedTitle>
      <Grid2 container>
        <AdvancedGrid i={0} key='aus'>
          <Typography variant='h5' color={purple} sx={{ fontWeight: 'bold' }}>
            {
              result.ausencia.length > 0
                ? _array.join(result.ausencia)
                : 'Não há ausência'
            }
          </Typography>
        </AdvancedGrid>
      </Grid2>
      {/* <Divider sx={{ marginTop: 0.5, marginBottom: 0.5 }}/> */}
    </>
  )
}