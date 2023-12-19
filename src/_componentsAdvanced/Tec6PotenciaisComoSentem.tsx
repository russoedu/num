import { Typography } from '@mui/material'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import { _array } from '../_helpers/_array'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedTitle } from '../_components/AdvancedTitle'
import { AdvancedGrid } from '../_components/AdvancedGrid'
import './Tec.css'

export function Tec6PotenciaisComoSentem ({ result }: { result: AdvancedTecniques }) {
  return (
    <>
      <AdvancedTitle>
        Potenciais como sentem
      </AdvancedTitle>
      <Typography variant='h5' sx={{ paddingBottom: 1 }}>
        {result.tec6PotenciaisComoSentem.result}
      </Typography>
      <Grid2 container className='tec-content'>
        {
          result.tec6PotenciaisComoSentem.percentage.map((p, i) => (
            <AdvancedGrid i={i} key={p.name}>
              <Grid2 xs={9} sm={3}>
                <Typography variant='h6'>
                  {p.name}
                </Typography>
              </Grid2>
              <Grid2 xs={3} sm={9}>
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