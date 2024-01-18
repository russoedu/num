import { Box, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedGrid } from '../components/AdvancedGrid'
import { AdvancedTitle } from '../components/AdvancedTitle'
import { AdvancedTecniques } from '../services/AdvancedTecniques'
import './Tec.css'
import { Spacer } from '../components/Spacer'

export function Tec9VibracaoDaExpressao ({ result }: { result: AdvancedTecniques }) {
  const tec9VibracaoDaExpressao = result.tec9VibracaoDaExpressao

  return (
    <>
      <AdvancedTitle>
        Técnica 9 - Vibração da expressão
      </AdvancedTitle>
      <Grid2 container className='tec-content'>
        <AdvancedGrid i={0}>
          <Box>
            <Typography variant='h5' className='vn' gutterBottom>
              {tec9VibracaoDaExpressao.title}
            </Typography>
            {tec9VibracaoDaExpressao.more !== ''
              ? <Typography variant='h5'>
                {tec9VibracaoDaExpressao.more}
              </Typography>
              : <></>
            }
            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
            ---- Calma e delicadeza não tem uma descrição extra na apostila ----
            </Typography>
          </Box>
        </AdvancedGrid>
      </Grid2>
      <Spacer/>
    </>
  )
}