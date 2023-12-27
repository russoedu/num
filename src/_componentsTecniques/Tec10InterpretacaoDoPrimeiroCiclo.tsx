import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedGrid } from '../_components/AdvancedGrid'
import { AdvancedTitle } from '../_components/AdvancedTitle'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import './Tec.css'
import { Spacer } from '../_components/Spacer'

export function Tec10InterpretacaoDoPrimeiroCiclo ({ result }: { result: AdvancedTecniques }) {
  return (
    <>
      <AdvancedTitle>
        Interpretando o 1º ciclo de vida
      </AdvancedTitle>
      <Grid2 container className='tec-content'>
        {
          result.tec10InterpretacaoDoPrimeiroCiclo.map((ci, i) => (
            <AdvancedGrid i={i} key={i}>
              <Typography variant='h5' className='vn'>
                {ci.relation}
              </Typography>
              &nbsp;
              <Typography variant='h6'>
                com a figura
              </Typography>
              &nbsp;
              <Typography variant='h5' className='vn'>
                {ci.person}
              </Typography>
            </AdvancedGrid>
          ))
        }
      </Grid2>
      <Spacer/>
    </>
  )
}