import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/HomePage';
import logout from '../../images/logout.png';
import { NavLink } from 'react-router-dom';
import LanguageChanger from '../languages/LanguageChanger';
class MainBar extends Component {
  render() {
    const { 
      classes: { 
        appBar, 
        appBarShift, 
        toolbar, 
        menuButtonHidden, 
        title, 
        menuButton
      }, 
      state: { 
        open 
      }, 
      handleDrawerOpen 
    } = this.props;
    return (
      <>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={classNames(appBar, open && appBarShift)}
        >
          <Toolbar disableGutters={!open} className={toolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classNames(
                menuButton, open && menuButtonHidden,
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={title}
            >
              Kwan Ber Initiative
            </Typography>
            <LanguageChanger />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Tooltip title="Log Me Out">
                <NavLink to="/" >
                  <img src={logout} alt="out"/>
                </NavLink>
            </Tooltip>
            
          </Toolbar>
        </AppBar>
      </>
    )
  }
}
export default withStyles(styles)(MainBar);
