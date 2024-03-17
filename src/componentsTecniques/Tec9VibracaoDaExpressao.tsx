import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedGrid } from '../components/AdvancedGrid'
import { AdvancedTitle } from '../components/AdvancedTitle'
import { Spacer } from '../components/Spacer'
import { AdvancedTecniques } from '../services/AdvancedTecniques'
import './Tec.css'

export function Tec9VibracaoDaExpressao ({ result }: { result: AdvancedTecniques }) {
  const tec9VibracaoDaExpressao = result.tec9VibracaoDaExpressao

  return (
    <>
      <AdvancedTitle>
        Técnica 9 - Vibração da expressão
      </AdvancedTitle>
      <Grid2 container className='tec-content'>
        <AdvancedGrid i={0}>
          <Typography variant='h5' className='vn' gutterBottom>
            {tec9VibracaoDaExpressao.title}
          </Typography>
        </AdvancedGrid>
        <AdvancedGrid i={1}>
          <Typography variant='h5'>
            {tec9VibracaoDaExpressao.more}
          </Typography>
        </AdvancedGrid>
        {
          tec9VibracaoDaExpressao.exIs3
            ? <AdvancedGrid i={2}>
              <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                  Obs.: a pessoa com EX <span className='vn'>3</span> potencializa a fala.
              </Typography>
            </AdvancedGrid>
            : <></>
        }
      </Grid2>
      <Spacer/>
    </>
  )
}
