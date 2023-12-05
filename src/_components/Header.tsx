import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { appName } from '../helpers/const'
import './HeaderFooter.css'

export function Header () {
  return <Box sx={{ flexGrow: 1 }}>
    <AppBar position='fixed' component='nav'>
      <Toolbar className='header-toolbar' variant='dense'>
        <Typography variant='h6' color='inherit' component='div'>
          {appName}
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
}
