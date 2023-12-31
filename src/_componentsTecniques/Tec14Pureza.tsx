import { Typography } from '@mui/material'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import { _array } from '../_helpers/_array'
import { AdvancedTitle } from '../_components/AdvancedTitle'
import { AdvancedGrid } from '../_components/AdvancedGrid'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import './Tec.css'
import { Spacer } from '../_components/Spacer'

export function Tec14Pureza ({ result }: { result: AdvancedTecniques }) {
  const tec14Pureza = result.tec14Pureza
  
  return (
    <>
      <AdvancedTitle>
        Pureza
      </AdvancedTitle>
      <Grid2 container className='tec-content'>
        <AdvancedGrid i={0}>
          <Typography variant='h5'>
            {
              tec14Pureza
                ? `Há pureza de ${tec14Pureza}`
                : 'Não há pureza'
            }
          </Typography>
        </AdvancedGrid>
      </Grid2>
      <Spacer/>
    </>
  )
}