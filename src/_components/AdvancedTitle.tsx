import { Divider, Typography } from '@mui/material'
import { purple } from '../_helpers/types'

export function AdvancedTitle ({ children }: { children: string}) {
  return (
    <>
      <Typography variant='h3' color={purple}>
        {children}
      </Typography>
      <Divider sx={{ marginBottom: 2 }}/>
    </>
  )
}