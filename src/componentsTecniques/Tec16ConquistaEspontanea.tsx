import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedGrid } from '../components/AdvancedGrid'
import { AdvancedTitle } from '../components/AdvancedTitle'
import { AdvancedTecniques } from '../services/AdvancedTecniques'
import './Tec.css'
import { Spacer } from '../components/Spacer'

export function Tec16ConquistaEspontanea ({ result }: { result: AdvancedTecniques }) {
  const tec16ConquistaEspontanea = result.tec16ConquistaEspontanea
  
  return (
    <>
      <AdvancedTitle>
        Técnica 16 - Conquista Espontânea
      </AdvancedTitle>
      <Grid2 container className='tec-content'>
        {
          tec16ConquistaEspontanea.length > 0
            ? (
              tec16ConquistaEspontanea.map((ce, i) => (
                <AdvancedGrid i={i} key={i}>
                  <Typography variant='h6'>
                    Conquista do
                  </Typography>
                  &nbsp;
                  <Typography variant='h5' className='vn'>
                    {ce.position}
                  </Typography>
                  &nbsp;
                  {ce.end === Infinity
                    ? (
                      <>
                        <Typography variant='h6'>
                          a partir dos
                        </Typography>
                        &nbsp;
                        <Typography variant='h5' className='vn'>
                          {ce.start}
                        </Typography>
                        &nbsp;
                        <Typography variant='h6'>
                          anos
                        </Typography>
                      </>
                    )
                    : (
                      <>
                        <Typography variant='h6'>
                          dos
                        </Typography>
                        &nbsp;
                        <Typography variant='h5' className='vn'>
                          {ce.start}
                        </Typography>
                        &nbsp;
                        <Typography variant='h6'>
                          aos
                        </Typography>
                        &nbsp;
                        <Typography variant='h5' className='vn'>
                          {ce.end}
                        </Typography>
                        &nbsp;
                        <Typography variant='h6'>
                          anos
                        </Typography>
                      </>
                    )}
                </AdvancedGrid>
              ))
            )
            : (
              <Typography variant='h5' className='vn'>
                Não há conquistas espontânes no mapa
              </Typography>
            )
        }
      </Grid2>
      <Typography variant='h6'>
        --- no outro programa há um comentário relacionado ao zero, mas não encontrei nada na apostila ---
      </Typography>
      <Typography variant='h6'>
        --- como lidar com 11 e 22? (Desafios não tem 11 e 22, então assumi que converto os Rs pra 2 e 4) ---
      </Typography>
      <Spacer/>
    </>
  )
}