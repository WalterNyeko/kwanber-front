import React, { Component } from 'react'
import HomePage from '../home/dashboard/HomePage';
import ViewDataTable from './ViewDataTable';

class ViewDataTablePage extends Component {
    handleEdit = () => {
        this.props.history.push(`/datatables/edit/1`);
    }
  render() {
    return (
      <div>
        <HomePage content={<ViewDataTable handleEdit={this.handleEdit}/>}/>        
      </div>
    )
  }
}
export default ViewDataTablePage;
