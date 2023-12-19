import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { ReactNode } from 'react'
import './AdvancedGrid.css'

export function AdvancedGrid ({ children, key, i }: { children: ReactNode | JSX.Element|JSX.Element[], key: React.Key, i: number}) {
  return(
    <Grid2
      container
      className='advanced-grid'
      key={key}
      sx={{ backgroundColor: i % 2 === 0 ? 'hsl(266 62% 96% / 1)' : 'hsl(266 62% 90% / 1)', padding: '0.3em' }}
    >
      {children}
    </Grid2>
  )
}