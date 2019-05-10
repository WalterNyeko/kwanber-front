import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Table from '../../containers/helpers/Table';
import { defaultTitles, testTitle } from '../fixtures/TableTitles';
import { testTabledata } from '../fixtures/TestTableData';
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

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
});

class SchoolsTabs extends React.Component {
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
    const { classes: { root, button }, theme: { direction } } = this.props;
    const { value } = this.state;
    return (
      <div className={root} style={{paddingLeft: '0px'}}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Primary Schools" />
            <Tab label="Secondary Schools" />
            <Tab label="Tertiary Institutions" />
          </Tabs>
        </AppBar >
        <SwipeableViews
          axis={direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={direction}>
                <Button variant="contained" color="primary" className={button}>
                    Add Primary School
                </Button>
                <Table 
                  viewTableTitles={defaultTitles} 
                  actionTableTitles={testTitle} 
                  tableData={testTabledata}
                  drawerContent={TestDrawerContent}
                />
          </TabContainer>
          <TabContainer dir={direction}>
                <Button variant="contained" color="primary" className={button}>
                    Add Secondar School
                </Button>
                <Table 
                  viewTableTitles={defaultTitles} 
                  actionTableTitles={testTitle} 
                  tableData={testTabledata}
                  drawerContent={TestDrawerContent}
                />
          </TabContainer>
          <TabContainer dir={direction}>
                <Button variant="contained" color="primary" className={button}>
                    Add Institution
                </Button>
                <Table 
                  viewTableTitles={defaultTitles} 
                  actionTableTitles={testTitle} 
                  tableData={testTabledata}
                  drawerContent={TestDrawerContent}
                />
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

SchoolsTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SchoolsTabs);