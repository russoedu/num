import { Typography } from '@mui/material'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import { _array } from '../_helpers/_array'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedTitle } from '../_components/AdvancedTitle'
import { AdvancedGrid } from '../_components/AdvancedGrid'
import './Tec.css'
import { Spacer } from '../_components/Spacer'

export function Tec13PotenciaisViciosReciclador ({ result }: { result: AdvancedTecniques }) {
  return (
    <>
      <AdvancedTitle>
        Potenciais, vícios e reciclador de energias
      </AdvancedTitle>
      <Typography variant='h4' sx={{ paddingBottom: 2 }}>
        1ª leitura
      </Typography>
      <Typography variant='h5' sx={{ paddingBottom: 1 }}>
        {result.tec13PotenciaisViciosReciclador1aLeitura.result}
      </Typography>
      <Grid2 container className='tec-content'>
        {
          result.tec13PotenciaisViciosReciclador1aLeitura.percentage.map((p, i) => (
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
      <Typography variant='h4' sx={{ paddingBottom: 2 }}>
        2ª leitura
      </Typography>
      <Grid2 container className='tec-content'>
        <AdvancedGrid i={0}>
          <Typography variant='h5'>
            {result.tec13PotenciaisViciosReciclador2aLeitura}
          </Typography>
        </AdvancedGrid>
      </Grid2>
      <Typography variant='h4' sx={{ paddingBottom: 2 }}>
        3ª leitura
      </Typography>
      <Grid2 container className='tec-content'>
        {
          result.tec13PotenciaisViciosReciclador3aLeitura.map((p, i) => (
            <AdvancedGrid i={i} key={i}>
              <Grid2 xs={4} sm={3} md={2}>
                <Typography variant='h5' className='vn'>
                  {p.name}
                </Typography>
              </Grid2>
              <Grid2 xs={3} sm={2} md={1}>
                <Typography variant='h6'>
                  {p.percentage}%
                </Typography>
              </Grid2>
              <Grid2 xs={5} sm={7} md={9}>
                <Typography variant='h6'>
                  {p.risk}
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