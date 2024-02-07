import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedGrid } from '../components/AdvancedGrid'
import { AdvancedTitle } from '../components/AdvancedTitle'
import { AdvancedTecniques } from '../services/AdvancedTecniques'
import './Tec.css'
import { Spacer } from '../components/Spacer'

export function Tec19AusenciaDeVibracaoPositiva ({ result }: { result: AdvancedTecniques }) {
  const tec19AusenciaDeVibracaoPositiva = result.tec19AusenciaDeVibracaoPositiva
  
  return (
    <>
      <AdvancedTitle>
        Técnica 19 - AVP (Ausência de Vibração Positiva)
      </AdvancedTitle>
      <Grid2 container className='tec-content'>
        {
          tec19AusenciaDeVibracaoPositiva.length > 0
            ? (
              tec19AusenciaDeVibracaoPositiva.map((avp, i) => (
                <AdvancedGrid i={i} key={i}>
                  <Typography variant='h6'>
                    AVP do 
                  </Typography>
                  &nbsp;
                  <Typography variant='h5' className='vn'>
                    {avp.vn}
                  </Typography>
                  &nbsp;
                  <Typography variant='h6'>
                    na 
                  </Typography>
                  &nbsp;
                  <Typography variant='h5' className='vn'>
                    {avp.position}
                  </Typography>
                  &nbsp;
                  {
                    avp.receivedAge > 0 && avp.receivedAge < Infinity
                      ? (
                        <>
                          <Typography variant='h6'>
                            até os
                          </Typography>
                          &nbsp;
                          <Typography variant='h5' className='vn'>
                            {avp.receivedAge}
                          </Typography>
                          &nbsp;
                          <Typography variant='h6'>
                            anos
                          </Typography>
                        </>
                      )
                      : (
                        <Typography variant='h6'>
                          por toda a vida
                        </Typography>
                      )
                  }

                </AdvancedGrid>
              ))
            )
            : (
              <Typography variant='h5' className='vn'>
                Não há AVP
              </Typography>
            )
        }
      </Grid2>
      <Spacer/>
    </>
  )
}