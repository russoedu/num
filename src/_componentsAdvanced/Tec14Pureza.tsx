import { Typography } from '@mui/material'
import { AdvancedTecniques } from '../_services/AdvancedTecniques'
import { _array } from '../_helpers/_array'
import { AdvancedTitle } from '../_components/AdvancedTitle'
import { AdvancedGrid } from '../_components/AdvancedGrid'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import './Tec.css'

export function Tec14Pureza ({ result }: { result: AdvancedTecniques }) {
  return (
    <>
      <AdvancedTitle>
        Pureza
      </AdvancedTitle>
      <Grid2 container className='tec-content'>
        <AdvancedGrid i={0} key='aus'>
          <Typography variant='h5'>
            {
              result.tec14Pureza
                ? `Há pureza de ${result.tec14Pureza}`
                : 'Não há pureza'
            }
          </Typography>
        </AdvancedGrid>
      </Grid2>
      <div className='spacer'/>
    </>
  )
}