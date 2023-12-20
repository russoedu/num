import { Typography } from '@mui/material'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import { _array } from '../_helpers/_array'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedTitle } from '../_components/AdvancedTitle'
import { AdvancedGrid } from '../_components/AdvancedGrid'
import './Tec.css'

export function Tec5PotenciaisComoReagem ({ result }: { result: AdvancedTecniques }) {
  return (
    <>
      <AdvancedTitle>
        Potenciais como reagem
      </AdvancedTitle>
      <Typography variant='h5' sx={{ paddingBottom: 1 }}>
        {result.tec5PotenciaisComoReagem.result}
      </Typography>
      <Grid2 container className='tec-content'>
        {
          result.tec5PotenciaisComoReagem.percentage.map((p, i) => (
            <AdvancedGrid i={i} key={p.name}>
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
      <div className='spacer'/>
    </>
  )
}