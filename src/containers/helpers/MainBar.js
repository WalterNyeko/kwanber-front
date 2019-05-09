import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/HomePage';

class MainBar extends Component {
  render() {
    const { 
      classes: { 
        appBar, 
        appBarShift, 
        toolbar, 
        menuButtonHidden, 
        title, 
        bigAvatar, 
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
            <IconButton color="inherit">
              <Badge badgeContent={3} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Avatar alt="User" src="" className={bigAvatar} />
          </Toolbar>
        </AppBar>
      </>
    )
  }
}
export default withStyles(styles)(MainBar);
