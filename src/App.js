import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={()=><p>Component Goes Here</p>} />
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </React.Fragment>
    )
  }
}


export default App;
