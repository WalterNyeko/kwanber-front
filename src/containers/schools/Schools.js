import React, { Component } from 'react';
import HomePage from '../../containers/home/dashboard/HomePage';
import SchoolsTabs from './SchoolsTabs';

class Schools extends Component {
  render() {
    return (
      <>
        <HomePage content={<SchoolsTabs/>}/>
      </>
    )
  }
}
export default Schools;