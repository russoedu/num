import { Typography } from '@mui/material'
import { AdvancedTecniques } from '../services/AdvancedTecniques'
import { _array } from '../helpers/_array'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedTitle } from '../components/AdvancedTitle'
import { AdvancedGrid } from '../components/AdvancedGrid'
import './Tec.css'
import { Spacer } from '../components/Spacer'

export function Tec5PotenciaisComoReagem ({ result }: { result: AdvancedTecniques }) {
  const tec5PotenciaisComoReagem = result.tec5PotenciaisComoReagem

  return (
    <>
      <AdvancedTitle>
        Técnica 5 - Potenciais como reagem
      </AdvancedTitle>
      <Typography variant='h5' sx={{ paddingBottom: 1 }}>
        {tec5PotenciaisComoReagem.result}
      </Typography>
      <Grid2 container className='tec-content'>
        {
          tec5PotenciaisComoReagem.percentage.map((p, i) => (
            <AdvancedGrid i={i} key={i}>
              <Grid2 xs={9} sm={4} md={3}>
                <Typography variant='h6'>
                  {p.name}
                </Typography>
              </Grid2>
              <Grid2 xs={3} sm={8} md={9}>
                <Typography variant='h6'>
                  {p.value}%
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