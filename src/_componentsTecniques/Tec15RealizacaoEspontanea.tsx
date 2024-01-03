import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AdvancedGrid } from '../_components/AdvancedGrid'
import { AdvancedTitle } from '../_components/AdvancedTitle'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import './Tec.css'
import { Spacer } from '../_components/Spacer'

export function Tec15RealizacaoEspontanea ({ result }: { result: AdvancedTecniques }) {
  const tec15RealizacaoEspontanea = result.tec15RealizacaoEspontanea
  
  return (
    <>
      <AdvancedTitle>
        Realização Espontânea
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
      <Spacer/>
    </>
  )
}