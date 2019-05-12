import Table from '../helpers/Table';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Modal from '../helpers/Modal';
import AddStudentForm from './AddStudentForm';
import { styles } from '../../styles/StudentsTabs';
import { defaultTitles, testTitle } from '../fixtures/TableTitles';
import { testTableData } from '../fixtures/TestTableData';
import TestDrawerContent from '../fixtures/TestDrawerContent';

export const TabContainer = ({ children, dir }) => {
  return (
    <Typography component="div" dir={dir} style={{ padding: 5 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

class StudentsTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" style={{}}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Primary Pupils" />
            <Tab label="Secondary Students" />
            <Tab label="Tertiary Institution Students" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <Modal 
              buttonText="Register Pupils"
              modalTitle="Register New Pupils"
              modalContent={<AddStudentForm/>}
              modalButtonType="primary"
              okButtonText="Register"
              modalWidth="600px"/>
            <Table 
                  viewTableTitles={defaultTitles} 
                  actionTableTitles={testTitle} 
                  tableData={testTableData}
                  drawerContent={<TestDrawerContent/>}
                />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Modal 
              buttonText="Register Students"
              modalTitle="Register New Students"
              modalContent={<AddStudentForm/>}
              modalButtonType="primary"
              okButtonText="Register"
              modalWidth="600px"/>
            <Table 
                  viewTableTitles={defaultTitles} 
                  actionTableTitles={testTitle} 
                  tableData={testTableData}
                  drawerContent={<TestDrawerContent/>}
                />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Modal 
              buttonText="Add Institution Students"
              modalTitle="Register New Students"
              modalContent={<AddStudentForm/>}
              modalButtonType="primary"
              okButtonText="Register"
              modalWidth="600px"/>
            <Table 
                  viewTableTitles={defaultTitles} 
                  actionTableTitles={testTitle} 
                  tableData={testTableData}
                  drawerContent={<AddStudentForm/>}
                />
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

StudentsTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(StudentsTabs);