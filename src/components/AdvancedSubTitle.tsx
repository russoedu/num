import { Typography } from '@mui/material'

/**
 * Advanced sub-title used for multiple readings in the advanced map
 * @param children - The children string
 * @returns The sub-title
 */
export function AdvancedSubTitle ({ children }: { children: string }) {
  return (
    <>
      <Typography variant='h4' sx={{ paddingBottom: 1.1, paddingTop: 2 }}>
        {children}
      </Typography>
    </>
  )
}