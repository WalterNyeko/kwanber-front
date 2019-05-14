import React, { Component } from 'react';
import HomePage from '../home/dashboard/HomePage';
import DataTable from './DataTable';

class DataTablePage extends Component {
  render() {
    return (
      <div>
        <HomePage content={<DataTable/>}/>
      </div>
    )
  }
}
export default DataTablePage;
