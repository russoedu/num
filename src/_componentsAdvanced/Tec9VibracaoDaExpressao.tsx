import { Box, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedGrid } from '../_components/AdvancedGrid'
import { AdvancedTitle } from '../_components/AdvancedTitle'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import './Tec.css'

export function Tec9VibracaoDaExpressao ({ result }: { result: AdvancedTecniques }) {
  return (
    <>
      <AdvancedTitle>
        Vibração da expressão
      </AdvancedTitle>
      <Grid2 container className='tec-content'>
        <AdvancedGrid i={0}>
          <Box>
            <Typography variant='h5' className='vn' gutterBottom>
              {result.tec9ExpressionVibration.title}
            </Typography>
            {result.tec9ExpressionVibration.more !== ''
              ? <Typography variant='h5'>
                {result.tec9ExpressionVibration.more}
              </Typography>
              : <></>
            }
            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
            ---- Calma e delicadeza não tem uma descrição extra na apostila ----
            </Typography>
          </Box>
        </AdvancedGrid>
      </Grid2>
      <div className='spacer'/>
    </>
  )
}