import React from 'react'
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { styles } from '../../styles/Settings';
import { withStyles } from '@material-ui/core/styles';
import { getLanguages } from '../languages/GrabLanguage';

const EditDataTable = (props) => {
    const categories = getLanguages();
    const { menu: { 
            title, 
        } 
    } = categories;
    const { 
      handleInputChange,
      columnDataType,
      columnName,
      handleClick,
      classes: { dashboardMenu}, 
      columnDetails: { 
        columnDetails, 
        dataTypes }, 
    } = props;

  return (
    <Paper className={dashboardMenu} elevation={1}>
        <Typography variant="h5" component="h3">
        {title.value}
        </Typography>
        <Divider/>
        <Typography component="p" style={{padding: '10px'}}>
            <div style={{marginBottom: '20px',marginTop: '20px'}}>
                <input 
                    type="text" 
                    name="columnName" 
                    defaultValue={columnName} 
                    className="name"
                    onChange={handleInputChange}
                    placeholder="Enter Column Name"
                    style={{borderColor: 'gray', float: 'left', borderWidth: '1px', width: '200px'}}>
                </input>
                {" "}
                <select 
                    className="language" 
                    name="columnDataType"
                    onChange={handleInputChange}
                    style={{width: '200px', marginLeft: '10px'}}>
                    <option value="test" selected>Select Data Type</option>
                    {dataTypes.map(({id, name}) =>(
                    <option value={columnDataType} key={id}>{name}</option>
                    ))}
                </select>
                <button 
                    type="button" 
                    className="btn btn-primary btn-sm"
                    style={{marginLeft: '10px'}}
                    onClick={handleClick}
                    >
                    Add
                </button>
                
            </div>
            <div 
              className="row" 
              style={{
                height: '40px', 
                backgroundColor: 'gray', 
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '5px',
                paddingRight: '5px'}}
            >
              <div className="col-md-1" ><strong>#</strong></div>
              <div className="col-md-3" ><strong>Name of Coulmn</strong></div>
              <div className="col-md-3" ><strong>DataType of Column</strong></div>
              <div className="col-md-1" ><strong>Length</strong></div>
              <div className="col-md-1" ><strong>Mandatory</strong></div>
              <div className="col-md-3" ><strong>Dropdown Items</strong></div>
            </div>
            {columnDetails.map(({ 
              id, 
              columnName, 
              columnDataType, 
              columnLength, 
              fieldMandatory, 
              dropdownItems: { 
                itemId, 
                itemName
              }
            }) => (
            <div 
              className="row" 
              style={{
                height: '55px', 
                backgroundColor: 'lightgray', 
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '5px',
                paddingRight: '5px'}}
            >
              <div className="col-md-1" ><strong>{id}</strong></div>
              <div className="col-md-3" >
              <input 
                    type="text" 
                    name={columnName} 
                    defaultValue={columnName} 
                    className={columnName}
                    placeholder="Column Name"
                    style={{
                      borderColor: 'gray', 
                      float: 'left', 
                      borderWidth: '1px', 
                      width: '150px',
                      marginLeft: '0px'}}>
                </input>
              </div>
              <div className="col-md-3" >
              <select 
                    className="language" 
                    name={columnDataType}
                    style={{width: '150px', marginLeft: '0px'}}>
                    {dataTypes.map(({id, name}) =>(
                      name === columnDataType?
                    <option value="test" key={id} selected>{name}</option>:
                    <option value="test" key={id}>{name}</option>
                    ))}
                </select>
              </div>
              <div className="col-md-1" >
              <input 
                    type="text" 
                    name="test1" 
                    defaultValue={columnLength} 
                    className="test1"
                    placeholder="Length"
                    style={{
                      borderColor: 'gray', 
                      float: 'left', 
                      borderWidth: '1px', 
                      width: '60px',
                      marginLeft: '0px'}}>
                </input>
              </div>
              <div className="col-md-1" >
              {fieldMandatory? 
              <input type="checkbox" checked name="mandatory" style={{marginLeft: '20px'}}/>:
              <input type="checkbox" name="mandatory" style={{marginLeft: '20px'}}/>
              }
              </div>
              <div className="col-md-3" >
              {itemId === '' || itemName === '' ? null : (
                <select 
                    className="language" 
                    name="language"
                    style={{width: '150px', marginLeft: '0px'}}>
                    <option value="test" selected>Select Data Type</option>
                    {dataTypes.map(({id, name}) =>(
                    <option value="test" key={id}>{name}</option>
                    ))}
                </select>
              )}
              
              </div>
            </div>
            ))}
            
            <div className="row" style={{paddingTop: '10px'}}>
              <br/>
                 <button 
                      type="button" 
                      className="btn btn-danger btn-md btn-flat"
                      >
                      Cancel
                    </button>
                    {" "}
                    <button 
                      type="button" 
                      className="btn btn-primary btn-md"
                      style={{marginLeft: '10px'}}
                      >
                      Submit
                    </button>
            </div>
        </Typography>
    </Paper>
  )
}
export default withStyles(styles)(EditDataTable);

