import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import './HeaderFooter.css'

/**
 * The app header
 * @returns The app header
 */
export function Header () {
  return <Box sx={{ flexGrow: 1 }}>
    <AppBar position='fixed' component='nav'>
      <Toolbar className='header-footer-toolbar' variant='dense'>
        <Typography className='header-logo' variant='h6' color='inherit' component='div'>
          <img src='logo.svg' alt='NumPi' height={52}/>
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
}
