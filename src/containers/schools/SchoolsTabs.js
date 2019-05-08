
import SimpleTable from '../helpers/ReusableTable';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import { Window, TitleBar } from 'react-desktop/macOs';

const TabContainer = ({ children, dir }) => {
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
    const { classes, theme } = this.props;

    return (
      <div className={classes.root} style={{paddingLeft: '0px'}}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Primary Schools" />
            <Tab label="Secondary Schools" />
            <Tab label="Tertiary Institutions" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
                <Button variant="contained" color="primary" className={classes.button}>
                    Add Primary School
                </Button>
                <SimpleTable />
          </TabContainer>
          <TabContainer dir={theme.direction}>
                <Button variant="contained" color="primary" className={classes.button}>
                    Add Secondar School
                </Button>
                <SimpleTable />
          </TabContainer>
          <TabContainer dir={theme.direction}>
                <Button variant="contained" color="primary" className={classes.button}>
                    Add Institution
                </Button>
                <SimpleTable />
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
