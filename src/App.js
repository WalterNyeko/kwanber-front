import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import DashboardPage from './containers/home/dashboard/SettingsPage';
import LandingPage from './containers/home/dashboard/LandingPage';
import Schools from './containers/schools/Schools';
import SchoolsSettingsPage from './containers/schools/SettingsPage';
import Students from './containers/students/Students';
import AcademicResults from './containers/academics/core/AcademicResults';
import Jobs from './containers/jobs/JobsComponent';
import Scholarships from './containers/scholarships/ScholarshipsComponent';
import LoginPage from './components/auth/Login';
import SettingsPage from './containers/settings/SettingsPage';
import DataTablesPage from './containers/datatables/DataTablePage';
import ViewDataTablesPage from './containers/datatables/ViewDataTablePage';
import EditDataTablesPage from './containers/datatables/EditDataTablePage';
import StudentsSettingsPage from './containers/students/SettingsPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={LoginPage} />
              <Route path="/dashboard" exact component={DashboardPage} />
              <Route path="/analytics" exact component={LandingPage} />
              <Route path="/schools" exact component={SchoolsSettingsPage} />
              <Route path="/schools/all" exact component={Schools} />
              <Route path="/students" exact component={StudentsSettingsPage} />
              <Route path="/students/all" exact component={Students} />
              <Route path="/academics/results" exact component={AcademicResults} />
              <Route path="/jobs" exact component={Jobs} />
              <Route path="/scholarships" exact component={Scholarships} />
              <Route path="/appconfigs" exact component={SettingsPage} />
              <Route path="/datatables" exact component={DataTablesPage} />
              <Route path="/datatables/1" exact component={ViewDataTablesPage} />
              <Route path="/datatables/edit/1" exact component={EditDataTablesPage} />
          </Switch>
        </BrowserRouter>
      <ToastContainer />
      </React.Fragment>
    )
  }
}


export default App;
