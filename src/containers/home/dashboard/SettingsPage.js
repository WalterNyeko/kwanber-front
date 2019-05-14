import React, { Component } from 'react';
import HomePage from './HomePage';
import Settings from './Settings';

class SettingsPage extends Component {
  render() {
    return (
      <div>
        <HomePage content={<Settings/>}/>
      </div>
    )
  }
}
export default SettingsPage;
