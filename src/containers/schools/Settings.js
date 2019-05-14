import React from 'react'
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import { styles } from '../../styles/Settings';
import { withStyles } from '@material-ui/core/styles';
import { getLanguages } from '../languages/GrabLanguage';

const Settings = (props) => {
    const categories = getLanguages();
    const { schools: { 
            title, 
            primary, 
            secondary, 
        } 
    } = categories;
    const { classes: { root, dashboardMenu} } = props;
    const customStyleLeft = {
        border: '1px solid #ebeff1', 
        borderRadius: '5px',
        minHeight: '100px',
        marginTop: '10px'

    }
    const customStyleRight = {
        border: '1px solid #ebeff1', 
        borderRadius: '5px',
        marginTop: '10px'
    }
  return (
    <Paper className={dashboardMenu} elevation={1} style={{padding: '35px'}}>
        <Typography variant="h5" component="h3" style={{padding: '0px'}}>
            {title.value}
        </Typography>
        <Divider/>
            <div className="row">
                <div className="col-md-6" style={customStyleLeft}>
                <List
                    component="nav"
                    subheader={<ListSubheader component="div"><strong>{primary.value}</strong></ListSubheader>}
                    className={root}
                    style={{float: 'left'}}
                >
                    <NavLink to="/schools/all"  style={{textDecoration: 'none'}}>
                    <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={primary.general}/>
                    </ListItem>
                    </NavLink>
                    <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={primary.population} />
                    </ListItem>

                    <NavLink to="/schools/all"  style={{textDecoration: 'none'}}>
                    <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={primary.performance}/>
                    </ListItem>
                    </NavLink>
                    <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={primary.staffs} />
                    </ListItem>

                    <NavLink to="/schools/all"  style={{textDecoration: 'none'}}>
                    <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={primary.dropOut}/>
                    </ListItem>
                    </NavLink>
                    <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={primary.needCareer} />
                    </ListItem>
                </List>
                </div>
                <div className="col-md-6" style={customStyleRight}>
                <List
                    component="nav"
                    subheader={<ListSubheader component="div"><strong>{secondary.value}</strong></ListSubheader>}
                    className={root}
                    style={{float: 'right'}}
                >
                    <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={secondary.general} />
                    </ListItem>
                    <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={secondary.population} />
                    </ListItem>
                    <NavLink to="/schools/all"  style={{textDecoration: 'none'}}>
                    <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={secondary.performance}/>
                    </ListItem>
                    </NavLink>
                    <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={secondary.staffs} />
                    </ListItem>
                    <NavLink to="/datatables"  style={{textDecoration: 'none'}}>
                    <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={secondary.dropOut}/>
                    </ListItem>
                    </NavLink>
                    <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={secondary.needCareer} />
                    </ListItem>
                </List>
                </div>
            </div>
    </Paper>
  )
}
export default withStyles(styles)(Settings);
