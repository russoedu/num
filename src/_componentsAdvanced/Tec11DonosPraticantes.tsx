import { Typography } from '@mui/material'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import { _array } from '../_helpers/_array'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedTitle } from '../_components/AdvancedTitle'
import { AdvancedGrid } from '../_components/AdvancedGrid'
import './Tec.css'
import { Spacer } from '../_components/Spacer'

export function Tec11DonosPraticantes ({ result }: { result: AdvancedTecniques }) {
  return (
    <>
      <AdvancedTitle>
        Donos e praticantes
      </AdvancedTitle>

      <Grid2 container className='tec-content'>
        {
          result.tec11DonosPraticantes.normal.map((p, i) => (
            <AdvancedGrid i={i} key={i}>
              <Grid2 xs={2} sm={1} md={1}>
                <Typography variant='h5' className='vn'>
                  {p.vn}
                </Typography>
              </Grid2>
              <Grid2 xs={3} sm={2} md={1}>
                <Typography variant='h6'>
                  {p.percentage}%
                </Typography>
              </Grid2>
              <Grid2 xs={7} sm={9} md={10}>
                <Typography variant='h6'>
                  {p.support}
                </Typography>
              </Grid2>
            </AdvancedGrid>
          ))
        }
      </Grid2>
      {
        typeof result.tec11DonosPraticantes.zeroAge !== 'undefined'
          ? (
            <>
              <Typography variant='h6' sx={{ paddingTop: 1, paddingBottom: 1 }}>
                AUS que devem ser interpretadas na idade da dificuldade zero
              </Typography>
              <Grid2 container className='tec-content'>
                {
                  result.tec11DonosPraticantes.zeroAge.map((p, i) => (
                    <AdvancedGrid i={i} key={i}>
                      <Grid2 xs={2} sm={1} md={1}>
                        <Typography variant='h5' className='vn'>
                          {p.vn}
                        </Typography>
                      </Grid2>
                      <Grid2 xs={3} sm={2} md={1}>
                        <Typography variant='h6'>
                          {p.percentage}%
                        </Typography>
                      </Grid2>
                      <Grid2 xs={7} sm={9} md={10}>
                        <Typography variant='h6'>
                          {p.support}
                        </Typography>
                      </Grid2>
                    </AdvancedGrid>
                  ))
                }
              </Grid2>
            </>
          )
          : <></>
      }
      <Spacer/>
    </>
  )
}