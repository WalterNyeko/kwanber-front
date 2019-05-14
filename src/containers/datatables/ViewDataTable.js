import React from 'react'
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { styles } from '../../styles/Settings';
import { withStyles } from '@material-ui/core/styles';
import { getLanguages } from '../languages/GrabLanguage';


const ViewDataTable = (props) => {
    const categories = getLanguages();
    const { menu: { 
            title, 
        } 
    } = categories;
    const { classes: { dashboardMenu}, handleEdit } = props;

  return (
    <Paper className={dashboardMenu} elevation={1}>
        <Typography variant="h5" component="h3">
        {title.value}
        </Typography>
        <Divider/>
        <Typography component="p" style={{padding: '10px'}}>
            <div style={{marginBottom: '80px',marginTop: '20px'}}>
                <input 
                    type="text" 
                    name="name" 
                    defaultValue="" 
                    className="name"
                    placeholder="Enter Data Table Name"
                    style={{borderColor: 'green', float: 'left', borderWidth: '1px', width: '200px'}}>
                </input>
                <div style={{float: 'right'}}>
                <button 
                    type="button" 
                    className="btn btn-primary btn-md"
                    onClick={handleEdit}
                    >
                    Edit DataTable
                </button>
                {' '}
                <button 
                    type="button" 
                    className="btn btn-danger btn-md"
                    >
                    Delete DataTable
                </button>
                </div>
                
            </div>
            <div className="row">
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name of Column</th>
                        <th scope="col">DataType of Column</th>
                        <th scope="col">Length</th>
                        <th scope="col">Mandatory</th>
                        <th scope="col">Dropdown Items</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>255</td>
                        <td>
                            <input type="checkbox" name="mandatory"/>
                        </td>
                        <td>Confirm</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>255</td>
                        <td>
                            <input type="checkbox" name="mandatory"/>
                        </td>
                        <td>Confirm</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>255</td>
                        <td>
                            <input type="checkbox" name="mandatory" checked/>
                        </td>
                        <td>Confirm</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>255</td>
                        <td>
                            <input type="checkbox" name="mandatory"/>
                        </td>
                        <td>Confirm</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>255</td>
                        <td>
                            <input type="checkbox" name="mandatory" checked/>
                        </td>
                        <td>Confirm</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>255</td>
                        <td>
                            <input type="checkbox" name="mandatory" checked/>
                        </td>
                        <td>Confirm</td>
                        </tr>
                    </tbody>
                    </table>
            </div>
        </Typography>
    </Paper>
  )
}
export default withStyles(styles)(ViewDataTable);

