import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material'
import './HeaderFooter.css'

export function Footer () {
  const currentYear = new Date().getFullYear()
  const c = currentYear === 2015
    ? '2015'
    : `2015 - ${currentYear}`

  return <Box sx={{ flexGrow: 1 }}>
    <AppBar position='fixed' component='nav' sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar className='header-toolbar' variant='dense'>
        <Typography color='inherit' component='div'>
          <Link className='copyright' href='https://www.linkedin.com/in/russoedu/'>
            © {c} Eduardo Russo
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
}
