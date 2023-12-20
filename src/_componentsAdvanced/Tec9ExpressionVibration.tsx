import { Box, Typography } from '@mui/material'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import { _array } from '../_helpers/_array'
import { purple } from '../_helpers/types'
import { AdvancedTitle } from '../_components/AdvancedTitle'
import { AdvancedGrid } from '../_components/AdvancedGrid'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import './Tec.css'

export function Tec9ExpressionVibration ({ result }: { result: AdvancedTecniques }) {
  return (
    <>
      <AdvancedTitle>
        Adequação da linguagem
      </AdvancedTitle>
      <Grid2 container className='tec-content'>
        <AdvancedGrid i={0} key='aus'>
          <Box>
            <Typography variant='h5' color={purple} sx={{ fontWeight: 'bold' }} gutterBottom>
              {result.tec9ExpressionVibration.title}
            </Typography>
            {result.tec9ExpressionVibration.more !== ''
              ? <Typography variant='h5'>
                {result.tec9ExpressionVibration.more}
              </Typography>
              : <></>
            }
          </Box>
        </AdvancedGrid>
      </Grid2>
      <div className='spacer'/>
    </>
  )
}