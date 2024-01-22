import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedGrid } from '../components/AdvancedGrid'
import { AdvancedTitle } from '../components/AdvancedTitle'
import { AdvancedTecniques } from '../services/AdvancedTecniques'
import './Tec.css'
import { Spacer } from '../components/Spacer'

export function Tec18MomentoDecisivoForte ({ result }: { result: AdvancedTecniques }) {
  const tec18MomentoDecisivoForte = result.tec18MomentoDecisivoForte
  
  return (
    <>
      <AdvancedTitle>
        Técnica 18 - Momento Decisivo Forte
      </AdvancedTitle>
      <Grid2 container className='tec-content'>
        {
          tec18MomentoDecisivoForte.length > 0
            ? (
              tec18MomentoDecisivoForte.map((mdf, i) => (
                <AdvancedGrid i={i} key={i}>
                  <Typography variant='h6'>
                    Momento Decisivo Forte no
                  </Typography>
                  &nbsp;
                  <Typography variant='h5' className='vn'>
                    {mdf.position}
                  </Typography>
                  &nbsp;
                  <Typography variant='h6'>
                    com VN
                  </Typography>
                  &nbsp;
                  <Typography variant='h5' className='vn'>
                    {mdf.vn}
                  </Typography>
                </AdvancedGrid>
              ))
            )
            : (
              <Typography variant='h5' className='vn'>
                Não há momento decisivo forte
              </Typography>
            )
        }
      </Grid2>
      <Spacer/>
    </>
  )
}