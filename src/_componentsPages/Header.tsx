import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { appName } from '../_helpers/types'
import './HeaderFooter.css'

/**
 * The app header
 * @returns The app header
 */
export function Header () {
  return <Box sx={{ flexGrow: 1 }}>
    <AppBar position='fixed' component='nav'>
      <Toolbar className='header-footer-toolbar' variant='dense'>
        <Typography variant='h6' color='inherit' component='div'>
          {appName}
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
}
