import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
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

  render() {
    return (
        <Paper elevation={1} style={{padding: '35px'}}>
            <Typography variant="h5" component="h3" style={{padding: '0px'}}>
            Schools Analysis Data
            </Typography>
            <Divider/>
            <br></br>
            <SchoolsTree /> 
        </Paper>
    );
  }
}

Analytics.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Analytics);