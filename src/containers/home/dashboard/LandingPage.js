import React, { Component } from 'react';
import HomePage from './HomePage';
import Analytics from './Analytics';
class LandingPage extends Component {
  render() {
    return (
      <>
        <HomePage content={<Analytics/>}/>
      </>
    )
  }
}
export default LandingPage;