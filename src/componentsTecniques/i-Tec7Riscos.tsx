import { Typography } from '@mui/material'
import { AdvancedTecniques } from '../services/AdvancedTecniques'
import { _array } from '../helpers/_array'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedTitle } from '../components/AdvancedTitle'
import { AdvancedGrid } from '../components/AdvancedGrid'
import './Tec.css'
import { Spacer } from '../components/Spacer'
import { AdvancedSubTitle } from '../components/AdvancedSubTitle'

export function Tec7Riscos ({ result }: { result: AdvancedTecniques }) {
  const tec7Riscos1aLeitura = result.tec7Riscos1aLeitura
  const tec7Riscos2aLeitura = result.tec7Riscos2aLeitura

  return (
    <>
      <AdvancedTitle margin={false}>
        Técnica 7 - Riscos
      </AdvancedTitle>
      <AdvancedSubTitle>
        1ª leitura
      </AdvancedSubTitle>
      <Typography variant='h5' sx={{ paddingBottom: 1 }}>
        {tec7Riscos1aLeitura.result}
      </Typography>
      <Grid2 container className='tec-content'>
        {
          tec7Riscos1aLeitura.percentage.map((p, i) => (
            <AdvancedGrid i={i} key={i}>
              <Grid2 xs={12} sm={9} md={6}>
                <Typography variant='h6'>
                  {p.name}
                </Typography>
              </Grid2>
              <Grid2 xs={2} sm={3} md={6}>
                <Typography variant='h6'>
                  {p.value}%
                </Typography>
              </Grid2>
            </AdvancedGrid>
          ))
        }
      </Grid2>
      <AdvancedSubTitle>
        2ª leitura
      </AdvancedSubTitle>
      <Typography variant='h5' sx={{ paddingBottom: 1 }}>
        {tec7Riscos2aLeitura.result}
      </Typography>
      <Grid2 container className='tec-content'>
        {
          tec7Riscos2aLeitura.percentage.map((p, i) => (
            <AdvancedGrid i={i} key={i}>
              <Grid2 xs={10} sm={3}>
                <Typography variant='h6'>
                  {p.name}
                </Typography>
              </Grid2>
              <Grid2 xs={2} sm={9}>
                <Typography variant='h6'>
                  {p.value}%
                </Typography>
              </Grid2>
            </AdvancedGrid>
          ))
        }
      </Grid2>
      <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
            ---- Preciso de mais detalhes para calcular ----
      </Typography>
      <Spacer/>
    </>
  )
}