import { Divider, Typography } from '@mui/material'
import { purple } from '../_helpers/types'

/**
 * Advanced title used for all entries in the advanced map
 * @param children - The children string
 * @param maregin - If false, removes the bottom margin
 * @returns The title
 */
export function AdvancedTitle ({ children, margin }: { children: string, margin?: boolean}) {
  return (
    <>
      <Typography variant='h3' color={purple}>
        {children}
      </Typography>
      <Divider sx={{ marginBottom: margin === false ? 0 : 2 }}/>
    </>
  )
}