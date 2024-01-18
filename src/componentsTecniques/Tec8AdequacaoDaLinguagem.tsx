import { Typography } from '@mui/material'
import { AdvancedTecniques } from '../services/AdvancedTecniques'
import { _array } from '../helpers/_array'
import { AdvancedTitle } from '../components/AdvancedTitle'
import { AdvancedGrid } from '../components/AdvancedGrid'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import './Tec.css'
import { Spacer } from '../components/Spacer'

export function Tec8AdequacaoDaLinguagem ({ result }: { result: AdvancedTecniques }) {
  const tec8AdequacaoDaLinguagem = result.tec8AdequacaoDaLinguagem

  return (
    <>
      <AdvancedTitle>
        Técnica 8 - Adequação da linguagem
      </AdvancedTitle>
      <Grid2 container className='tec-content'>
        {
          tec8AdequacaoDaLinguagem.map((tec, i) => (
            <AdvancedGrid i={i} key={i}>
              <Grid2 container sm={12} md={4} lg={3}>
                <Typography variant='h6'>
                  {tec.reason}
                </Typography>
                &nbsp;
                <Typography variant='h5' className='vn'>
                  {tec.vn}
                </Typography>
              </Grid2>
              <Grid2 sm={12} md={8} lg={9}>
                <Typography variant='h6'>
                  {tec.content}
                </Typography>
              </Grid2>
            </AdvancedGrid>
          ))
        }
      </Grid2>
      <Spacer/>
    </>
  )
}