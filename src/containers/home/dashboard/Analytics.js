import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SchoolsTree from '../trees/SchoolsTree';
import StudentsTree from '../trees/StudentsTree';
import AcademicsTree from '../trees/AcademicsTree';
import { styles } from '../../../styles/Analytics';

const TabContainer = ({ children, dir }) => {
  return (
    <Typography 
      component="div" 
      dir={dir} 
      style={{ padding: 5 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

class Analytics extends React.Component {
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
    const { classes: { root }, theme: { direction } } = this.props;
    const { value } = this.state;
    return (
      <div className={root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Schools Analytics" />
            <Tab label="Students Analytics" />
            <Tab label="Academics Analytics" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={direction}>
            <SchoolsTree />
          </TabContainer>
          <TabContainer dir={direction}>
            <StudentsTree />
          </TabContainer>
          <TabContainer dir={direction}>
            <AcademicsTree />
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

Analytics.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Analytics);