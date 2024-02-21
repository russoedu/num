import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedGrid } from '../components/AdvancedGrid'
import { AdvancedTitle } from '../components/AdvancedTitle'
import { AdvancedTecniques } from '../services/AdvancedTecniques'
import './Tec.css'
import { Spacer } from '../components/Spacer'

export function Tec15RealizacaoEspontanea ({ result }: { result: AdvancedTecniques }) {
  const tec15RealizacaoEspontanea = result.tec15RealizacaoEspontanea

  return (
    <>
      <AdvancedTitle>
        Técnica 15 - Realização Espontânea
      </AdvancedTitle>
      <Grid2 container className='tec-content'>
        {
          tec15RealizacaoEspontanea.length > 0
            ? (
              tec15RealizacaoEspontanea.map((re, i) => (
                <AdvancedGrid i={i} key={i}>
                  <Typography variant='h6'>
                    Realização {re.position === 'MO' ? ' da' : ' do'}
                  </Typography>
                  &nbsp;
                  <Typography variant='h5' className='vn'>
                    {re.position}
                  </Typography>
                  &nbsp;
                  {re.end === Infinity
                    ? (
                      <>
                        <Typography variant='h6'>
                          a partir dos
                        </Typography>
                        &nbsp;
                        <Typography variant='h5' className='vn'>
                          {re.start}
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
                          {re.start}
                        </Typography>
                        &nbsp;
                        <Typography variant='h6'>
                          aos
                        </Typography>
                        &nbsp;
                        <Typography variant='h5' className='vn'>
                          {re.end}
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
                Não há realizações espontânes no mapa
              </Typography>
            )
        }
      </Grid2>
      <Typography variant='h6'>
        --- no outro programa há um comentário relacionado ao zero, mas não encontrei nada na apostila ---
      </Typography>
      <Typography variant='h6'>
        --- como lidar com 11 e 22? Converto os dois (fixa e R) pra 2 e 4? ---
      </Typography>
      <Spacer/>
    </>
  )
}
