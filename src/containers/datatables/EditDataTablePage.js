import React, { Component } from 'react'
import HomePage from '../home/dashboard/HomePage';
import EditDataTable from '../../components/datatables/EditDataTable';

class EditTablePage extends Component {
  render() {
    return (
      <div>
        <HomePage content={<EditDataTable/>}/>
      </div>
    )
  }
}
export default EditTablePage;
