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
import { styles } from '../../../styles/Settings';
import { withStyles } from '@material-ui/core/styles';
import { getLanguages } from '../../languages/GrabLanguage';

const Settings = (props) => {
    const categories = getLanguages();
    const { districts: { 
            title, 
            primary,
            secondary
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
            {title}
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
                    <NavLink to="/analytics"  style={{textDecoration: 'none'}}>
                    <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={primary.district1}/>
                    </ListItem>
                    </NavLink>
                    <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={primary.district2} />
                    </ListItem>

                    <NavLink to="/analytics"  style={{textDecoration: 'none'}}>
                    <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={primary.district3}/>
                    </ListItem>
                    </NavLink>
                    <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={primary.district4} />
                    </ListItem>

                    <NavLink to="/analytics"  style={{textDecoration: 'none'}}>
                    <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={primary.district5}/>
                    </ListItem>
                    </NavLink>
                    <NavLink to="/analytics"  style={{textDecoration: 'none'}}>
                    <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={primary.district6}/>
                    </ListItem>
                    </NavLink>
                    <NavLink to="/analytics"  style={{textDecoration: 'none'}}>
                    <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={primary.district7}/>
                    </ListItem>
                    </NavLink>
                    <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={primary.district8} />
                    </ListItem>
                </List>
                </div>
                <div className="col-md-6" style={customStyleRight}>
                <List
                    component="nav"
                    subheader={<ListSubheader component="div"><strong>{secondary.value}</strong></ListSubheader>}
                    className={root}
                    style={{float: 'left'}}
                >
                    <NavLink to="/analytics"  style={{textDecoration: 'none'}}>
                    <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={secondary.district1}/>
                    </ListItem>
                    </NavLink>
                    <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={secondary.district2} />
                    </ListItem>

                    <NavLink to="/analytics"  style={{textDecoration: 'none'}}>
                    <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={secondary.district3}/>
                    </ListItem>
                    </NavLink>
                    <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={secondary.district4} />
                    </ListItem>

                    <NavLink to="/analytics"  style={{textDecoration: 'none'}}>
                    <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={secondary.district5}/>
                    </ListItem>
                    </NavLink>
                    <NavLink to="/analytics"  style={{textDecoration: 'none'}}>
                    <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={secondary.district6}/>
                    </ListItem>
                    </NavLink>
                    <NavLink to="/analytics"  style={{textDecoration: 'none'}}>
                    <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={secondary.district7}/>
                    </ListItem>
                    </NavLink>
                    <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={secondary.district8} />
                    </ListItem>
                </List>
                </div>
            </div>
    </Paper>
  )
}
export default withStyles(styles)(Settings);
