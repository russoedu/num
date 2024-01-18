import { Box, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import { AdvancedGrid } from '../components/AdvancedGrid'
import { AdvancedTitle } from '../components/AdvancedTitle'
import { AdvancedTecniques } from '../services/AdvancedTecniques'
import './Tec.css'
import { Spacer } from '../components/Spacer'

export function Tec1Piramide ({ result }: { result: AdvancedTecniques }) {
  return (
    <>
      <AdvancedTitle>
        Técnica 1 - Pirâmide
      </AdvancedTitle>
      <Grid2 container className='tec-content'>
        {result.tec1Piramide.map((p, i) => (
          <AdvancedGrid i={i} key={p.position}>
            <Grid2 xs={12} sm={1}>
              <Typography variant='h6'>
                {p.position}
              </Typography>
            </Grid2>
            <Grid2 container xs={12} sm={11}>
              {p.results.map((r, j) => (
                <Box key={'vn-' + j}>
                  <Grid2 xs={2} sm={1}>
                    <Typography variant='h5' className='vn'>
                      {r.vn}
                    </Typography>
                  </Grid2>
                  <Grid2 xs={10} sm={11}>
                    {r.description}
                  </Grid2>
                </Box>
              ))}
            </Grid2>
          </AdvancedGrid>
        ))}
      </Grid2>
      <Spacer/>
    </>
  )
}