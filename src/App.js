import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LandingPage from './containers/home/dashboard/LandingPage';
import Schools from './containers/schools/Schools';
import Students from './containers/students/Students';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/schools" exact component={Schools} />
              <Route path="/students" exact component={Students} />
          </Switch>
        </BrowserRouter>
      <ToastContainer />
      </React.Fragment>
    )
  }
}


export default App;
