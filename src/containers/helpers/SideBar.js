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
import { getLanguages } from '../languages/GrabLanguage';

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
    const customStyle = {textDecoration: 'none'};
    const categories = getLanguages();

    const { sidebar: { 
                analytics, 
                schools, 
                students, 
                academics, 
                jobs, 
                scholarships, 
                appsettings, 
                appconfigs 
            }
    } = categories;
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
                <NavLink to={`/dashboard`} style={customStyle}>
                    <ListItem button>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary={analytics.value} />
                    </ListItem>
                </NavLink>
                <NavLink to={`/schools`} style={customStyle}>
                    <ListItem button>
                        <ListItemIcon>
                            <SchoolIcon />
                        </ListItemIcon>
                        <ListItemText primary={schools.value} />
                    </ListItem>
                </NavLink>
                <NavLink to={`/students`} style={customStyle}>
                    <ListItem button>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary={students.value} />
                    </ListItem>
                </NavLink>
                <NavLink to={`/academics/results`} style={customStyle}>
                    <ListItem button>
                        <ListItemIcon>
                            <LayersIcon />
                        </ListItemIcon>
                        <ListItemText primary={academics.value} />
                    </ListItem>
                </NavLink>
                <NavLink to={`/jobs`} style={customStyle}>
                    <ListItem button>
                        <ListItemIcon>
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary={jobs.value} />
                    </ListItem>
                </NavLink>
                <NavLink to={`/scholarships`} style={customStyle}>
                    <ListItem button>
                        <ListItemIcon>
                            <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText primary={scholarships.value} />
                    </ListItem>
                </NavLink>
            </List>
            <Divider />
            <List>
            <ListSubheader inset>{appsettings.value}</ListSubheader>
                <NavLink to={`/appconfigs`} style={customStyle}>
                <ListItem button>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary={appconfigs.value} />
                </ListItem>
                </NavLink>
            </List>
        </Drawer>
    )
  }
}
const ReturnedSideBar = withStyles(styles)(SideBar);

export default ReturnedSideBar;