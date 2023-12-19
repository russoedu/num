import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { ReactNode } from 'react'
import './AdvancedGrid.css'

export function AdvancedGrid ({ children, key, i }: { children: ReactNode | JSX.Element|JSX.Element[], key: React.Key, i: number}) {
  return(
    <Grid2
      container
      className='advanced-grid'
      key={key}
      sx={{ backgroundColor: i % 2 === 0 ? '#f5f3f3' : '#fbfbfb' }}
    >
      {children}
    </Grid2>
  )
}