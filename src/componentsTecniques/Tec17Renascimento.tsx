import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedGrid } from '../components/AdvancedGrid'
import { AdvancedTitle } from '../components/AdvancedTitle'
import { AdvancedTecniques } from '../services/AdvancedTecniques'
import './Tec.css'
import { Spacer } from '../components/Spacer'

export function Tec17Renascimento ({ result }: { result: AdvancedTecniques }) {
  const tec17Renascimento = result.tec17Renascimento

  return (
    <>
      <AdvancedTitle>
        Técnica 17 - Renascimento
      </AdvancedTitle>
      <Grid2 container className='tec-content'>
        {
          tec17Renascimento.length > 0
            ? (
              tec17Renascimento.map((re, i) => (
                <AdvancedGrid i={i} key={i}>
                  <Typography variant='h6'>
                    Renascimento no
                  </Typography>
                  &nbsp;
                  <Typography variant='h5' className='vn'>
                    {re.position}
                  </Typography>
                  &nbsp;
                  <Typography variant='h6'>
                    aos
                  </Typography>
                  &nbsp;
                  <Typography variant='h5' className='vn'>
                    {re.age}
                  </Typography>
                  &nbsp;
                  <Typography variant='h6'>
                    anos
                  </Typography>
                </AdvancedGrid>
              ))
            )
            : (
              <Typography variant='h5' className='vn'>
                Não há renascimento
              </Typography>
            )
        }
      </Grid2>
      <Spacer/>
    </>
  )
}
