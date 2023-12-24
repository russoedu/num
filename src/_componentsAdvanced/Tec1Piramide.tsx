import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import { AdvancedGrid } from '../_components/AdvancedGrid'
import { AdvancedTitle } from '../_components/AdvancedTitle'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import './Tec.css'

export function Tec1Piramide ({ result }: { result: AdvancedTecniques }) {
  return (
    <>
      <AdvancedTitle>
        Pirâmide
      </AdvancedTitle>
      <Grid2 container className='tec-content'>
        {result.tec1Piramide.map((p, i) => (
          <>
            <AdvancedGrid i={i}>
              <Grid2 xs={12} sm={1}>
                <Typography variant='h6'>
                  {p.position}
                </Typography>
              </Grid2>
              <Grid2 container xs={12} sm={11}>
                {p.results.map(r => (
                  <>
                    <Grid2 xs={2} sm={1}>
                      <Typography variant='h5' className='vn'>
                        {r.vn}
                      </Typography>
                    </Grid2>
                    <Grid2 xs={10} sm={11} key={r.vn}>
                      {r.description}
                    </Grid2>
                  </>
                ))}
              </Grid2>
            </AdvancedGrid>
          </>
        ))}
      </Grid2>
      <div className='spacer'/>
    </>
  )
}