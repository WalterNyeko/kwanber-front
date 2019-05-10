import React, { Component } from 'react';
import HomePage from '../home/dashboard/HomePage';
import StudentsTabs from './StudentsTabs';

class Students extends Component {
  render() {
    return (
      <>
        <HomePage content={<StudentsTabs/>}/>
      </>
    )
  }
}
export default Students;