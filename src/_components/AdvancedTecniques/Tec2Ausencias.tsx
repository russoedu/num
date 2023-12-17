import { Divider, Typography } from '@mui/material'
import { AdvancedTecniques } from '../../_services/AdvancedTecniques'
import { _array } from '../../helpers/_array'
import { purple } from '../../helpers/types'

export function Tec2Ausencias ({ result }: { result: AdvancedTecniques }) {
  return (
    <>
      <Typography variant='h3' color={purple}>
        Ausências
      </Typography>
      <Divider sx={{ marginBottom: 2 }}/>
      <Typography variant='h6'>
        {_array.join(result.ausencia)}
      </Typography>
    </>
  )
}