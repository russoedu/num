import { Typography } from '@mui/material'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import { purple } from '../_helpers/types'
import Grid2 from '@mui/material/Unstable_Grid2'
import { AdvancedGrid } from '../_components/AdvancedGrid'
import { AdvancedTitle } from '../_components/AdvancedTitle'
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
            <AdvancedGrid i={i} key={p.title}>
              <Grid2 className='left-column' xs={12} sm={1}>
                <Typography variant='h6'>
                  {p.title}
                </Typography>
              </Grid2>
              <Grid2 className='righ-column' container xs={12} sm={11}>
                {p.results.map(r => (
                  <>
                    <Grid2 xs={2} sm={1}>
                      <Typography variant='h5' color={purple} sx={{ fontWeight: 'bold' }}>
                        {r.number}
                      </Typography>
                    </Grid2>
                    <Grid2 xs={10} sm={11} key={r.number}>
                      {r.description}
                    </Grid2>
                  </>
                ))}
              </Grid2>
            </AdvancedGrid>
            {/* <Divider sx={{ marginTop: 0.5, marginBottom: 0.5 }}/> */}
          </>
        ))}
      </Grid2>
      <div className='spacer'/>
    </>
  )
}