import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import SchoolIcon from '@material-ui/icons/School';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/HomePage';
import { NavLink  } from 'react-router-dom';

class SideBar extends Component {
  render() {
    const { 
        classes: { 
            drawerPaper, 
            drawerPaperClose, 
            toolbarIcon}, 
        state: { open }, 
        handleDrawerClose 
    } = this.props;
    return (
        <Drawer
            variant="permanent"
            classes={{
            paper: classNames(drawerPaper, !open && drawerPaperClose),
            }}
            open={open}
        >
            <div className={toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
            </IconButton>
            </div>
            <Divider />
            <List>
                <NavLink to={`/`}>
                    <ListItem button>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Analytics" />
                    </ListItem>
                </NavLink>
                <NavLink to={`/schools`}>
                    <ListItem button>
                        <ListItemIcon>
                            <SchoolIcon />
                        </ListItemIcon>
                        <ListItemText primary="Schools" />
                    </ListItem>
                </NavLink>
                <NavLink to={`/students`}>
                    <ListItem button>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Students" />
                    </ListItem>
                </NavLink>
                <NavLink to={`/academics`}>
                    <ListItem button>
                        <ListItemIcon>
                            <LayersIcon />
                        </ListItemIcon>
                        <ListItemText primary="Academics" />
                    </ListItem>
                </NavLink>
                <NavLink to={`/jobs`}>
                    <ListItem button>
                        <ListItemIcon>
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Jobs Listings" />
                    </ListItem>
                </NavLink>
                <NavLink to={`/scholarships`}>
                    <ListItem button>
                        <ListItemIcon>
                            <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Scholarships" />
                    </ListItem>
                </NavLink>
            </List>
            <Divider />
            <List>
            <ListSubheader inset>Application Settings</ListSubheader>
                <ListItem button>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Application access" />
                </ListItem>
                <ListItem button>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Application themes" />
                </ListItem>
                <ListItem button>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Application alerts" />
                </ListItem>
            </List>
        </Drawer>
    )
  }
}
const ReturnedSideBar = withStyles(styles)(SideBar);

export default ReturnedSideBar;