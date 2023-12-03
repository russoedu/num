import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { appName } from '../helpers/const'
import './Header.css'

export function Header () {
  return <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" component="nav">
      <Toolbar variant="regular">
        <Typography variant="h6" color="inherit" component="div">
          {appName}
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
}

/*
 * export function Header () {
 *   return (
 *     <nav className="navbar navbar-fixed-top navbar-default">
 *       <div className="container">
 *         <div className="navbar-header ng-scope">
 *           <a href="/" className="navbar-brand">Numerologia Pitagórica 1.1.0 <span className="glyphicon glyphicon-{{appCache()}}" aria-hidden="true"></span></a>
 *         </div>
 *       </div>
 *     </nav>
 *   )
 * }
 */