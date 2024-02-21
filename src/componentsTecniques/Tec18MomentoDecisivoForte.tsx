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
              <>
                <Typography variant='h5' className='vn'>
                  Momento Decisivo Forte entre 27 e 29 anos que termina quando terminar o AP 9 nesse período de idade.
                </Typography>
              </>
            )
            : (
              <Typography variant='h5' className='vn'>
                Não há momento decisivo forte
              </Typography>
            )
        }
        {
          tec18MomentoDecisivoForte.map((mdf, i) => (
            <AdvancedGrid i={i} key={i}>
              <Grid2 xs={12} sm={1}>
                <Typography variant='h6'>
                  {mdf.position}
                </Typography>
              </Grid2>
              <Grid2 xs={12} sm={1}>
                <Typography variant='h5' className='vn'>
                  {mdf.vn}
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
