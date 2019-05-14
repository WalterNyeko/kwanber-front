import React from 'react'
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { styles } from '../../styles/Settings';
import { withStyles } from '@material-ui/core/styles';
import { getLanguages } from '../languages/GrabLanguage';
import { NavLink } from 'react-router-dom';

const DataTable = (props) => {
    const categories = getLanguages();
    const { menu: { 
            title, 
        } 
    } = categories;
    const { classes: { dashboardMenu} } = props;

  return (
    <Paper className={dashboardMenu} elevation={1}>
        <Typography variant="h5" component="h3">
        {title.value}
        </Typography>
        <Divider/>
        <Typography component="p" style={{padding: '10px'}}>
            <div className="row">
            <div className="col-md-6" style={{ margin: '10px', marginRight: '5px' }}>
                <input 
                    type="text" 
                    name="name" 
                    defaultValue="" 
                    className="name"
                    placeholder="Enter Data Table Name"
                    style={{ border: '1px solid gray', width: '200px'}}>
                </input>
                <select 
                    className="language" 
                    name="language"
                    style={{width: '200px'}}>
                    <option value="test" selected>Select Where To Link</option>
                    <option value="test">Clients</option>
                    <option value="test">Users</option>
                    <option value="test">Students</option>
                    
                </select>
            </div>
            <div className="col-md-5" style={{ margin: '10px', float: 'right'}}>
            <button 
                type="button" 
                className="btn btn-primary btn-md ng-binding"
                style={{ float: 'right'}}>
                Add Data Table
            </button>
            </div>
            </div>
            <div className="row">
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name of Data Table</th>
                        <th scope="col">Linked To ?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td><NavLink to="/datatables/1" style={{textDecoration: 'none'}}>Mark</NavLink></td>
                        <td><NavLink to="/datatables/1" style={{textDecoration: 'none'}}>Otto</NavLink></td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td><NavLink to="/datatables/1" style={{textDecoration: 'none'}}>Jacob</NavLink></td>
                        <td><NavLink to="/datatables/1" style={{textDecoration: 'none'}}>Thornton</NavLink></td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td><NavLink to="/datatables/1" style={{textDecoration: 'none'}}>Larry</NavLink></td>
                        <td><NavLink to="/datatables/1" style={{textDecoration: 'none'}}>the Bird</NavLink></td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td><NavLink to="/datatables/1" style={{textDecoration: 'none'}}>Larry</NavLink></td>
                        <td><NavLink to="/datatables/1" style={{textDecoration: 'none'}}>the Bird</NavLink></td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td><NavLink to="/datatables/1" style={{textDecoration: 'none'}}>Larry</NavLink></td>
                        <td><NavLink to="/datatables/1" style={{textDecoration: 'none'}}>the Bird</NavLink></td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td><NavLink to="/datatables/1" style={{textDecoration: 'none'}}>Larry</NavLink></td>
                        <td><NavLink to="/datatables/1" style={{textDecoration: 'none'}}>the Bird</NavLink></td>
                        </tr>
                    </tbody>
                    </table>
            </div>
        </Typography>
    </Paper>
  )
}
export default withStyles(styles)(DataTable);
