import { Divider, Typography } from '@mui/material'
import { AdvancedTecniques } from '../../_services/AdvancedTecniques'
import { _array } from '../../_helpers/_array'
import { purple } from '../../_helpers/types'

export function Tec2Ausencias ({ result }: { result: AdvancedTecniques }) {
  return (
    <>
      <Typography variant='h3' color={purple}>
        Ausências
      </Typography>
      <Divider sx={{ marginBottom: 2 }}/>
      <Typography variant='h5' className='vn'>
        {
          result.tec2Ausencia.length > 0
            ? _array.join(result.tec2Ausencia)
            : 'Não há ausência'
        }
      </Typography>
      {/* <Divider sx={{ marginTop: 0.5, marginBottom: 0.5 }}/> */}
    </>
  )
}