import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedGrid } from '../_components/AdvancedGrid'
import { AdvancedTitle } from '../_components/AdvancedTitle'
import { purple } from '../_helpers/types'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import './Tec.css'

export function Tec10FirstCycleInterpretation ({ result }: { result: AdvancedTecniques }) {
  return (
    <>
      <AdvancedTitle>
        Interpretando o 1º ciclo de vida
      </AdvancedTitle>
      <Grid2 container className='tec-content'>
        {
          result.tec10FirstCycleInterpretation.map((ci, i) => (
            <AdvancedGrid i={i} key={ci.person + ci.relation}>
              <Typography variant='h5' color={purple} sx={{ fontWeight: 'bold' }}>
                {ci.relation}
              </Typography>
              &nbsp;
              <Typography variant='h5'>
                com a figura
              </Typography>
              &nbsp;
              <Typography variant='h5' color={purple} sx={{ fontWeight: 'bold' }}>
                {ci.person}
              </Typography>
            </AdvancedGrid>
          ))
        }
        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
            ---- Calma e delicadeza não tem uma descrição extra na apostila ----
        </Typography>
      </Grid2>
      <div className='spacer'/>
    </>
  )
}