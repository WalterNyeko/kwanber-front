import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Schools from '../src/containers/schools/Schools';
import LandingPage from '../src/containers/home/LandingPage';
import Students from '../src/containers/students/Students';


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
