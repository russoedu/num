import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedGrid } from '../components/AdvancedGrid'
import { AdvancedTitle } from '../components/AdvancedTitle'
import { AdvancedTecniques } from '../services/AdvancedTecniques'
import './Tec.css'
import { Spacer } from '../components/Spacer'

export function Tec10InterpretacaoDoPrimeiroCiclo ({ result }: { result: AdvancedTecniques }) {
  const tec10InterpretacaoDoPrimeiroCiclo = result.tec10InterpretacaoDoPrimeiroCiclo

  return (
    <>
      <AdvancedTitle>
        Técnica 10 - Interpretando o 1º ciclo de vida
      </AdvancedTitle>
      <Grid2 container className='tec-content'>
        {
          tec10InterpretacaoDoPrimeiroCiclo.relations.map((ci, i) => (
            <AdvancedGrid i={i} key={'rel-' + i}>
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
      <Typography variant='h5' padding='20px 0 5px'>
        Demais leituras das VNs no primeiro Ciclo de vida
      </Typography>
      <Grid2 container className='tec-content'>
        {
          tec10InterpretacaoDoPrimeiroCiclo.extra.map((ci, i) => (
            <AdvancedGrid i={i} key={'extra-' + i}>
              <Grid2 container xs={1} sm={1}>
                <Typography variant='h6'>
                  {ci.position}
                </Typography>
              </Grid2>
              <Grid2 xs={11} sm={1}>
                <Typography variant='h5' className='vn'>
                  {ci.vn}
                </Typography>
              </Grid2>
              <Grid2 xs={12} sm={10}>
                <Typography variant='h6'>
                  {ci.description}
                </Typography>
              </Grid2>
              {
                ci.obs
                  ? <Grid2 xs={12} smOffset={2} sm={10}>
                    <Typography variant='h6'>
                      {ci.obs}
                    </Typography>
                  </Grid2>
                  : <></>
              }
            </AdvancedGrid>
          ))
        }
      </Grid2>
      <Typography variant='h5' padding='20px 0 5px'>
        Conjunções com as VNs de espiritualidade
      </Typography>
        ---
      <Spacer/>
    </>
  )
}
