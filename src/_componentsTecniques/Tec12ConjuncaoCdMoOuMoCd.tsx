import { Box, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedGrid } from '../_components/AdvancedGrid'
import { AdvancedTitle } from '../_components/AdvancedTitle'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import './Tec.css'
import { Spacer } from '../_components/Spacer'

export function Tec12ConjuncaoCdMoOuMoCd ({ result }: { result: AdvancedTecniques }) {
  return (
    <>
      <AdvancedTitle>
        Conjunção CD x MO e MO x CD
      </AdvancedTitle>
      <Grid2 container className='tec-content'>
        <AdvancedGrid i={0}>
          <Box>
            <Typography variant='h5' className='vn' gutterBottom>
              {result.tec12ConjuncaoCdMoOuMoCd}
            </Typography>
          </Box>
        </AdvancedGrid>
        <Typography variant='h6'>
              Obs.: Falar após interpretar CD e MO
        </Typography>
      </Grid2>
      <Spacer/>
    </>
  )
}