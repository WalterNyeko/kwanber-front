import React from 'react';
import PropTypes from 'prop-types';
import SideBar from '../helpers/SideBar';
import MainBar from '../helpers/MainBar';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/HomePage';

export class HomePage extends React.Component {
    state = {
        open: true,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };
    
    handleDrawerClose = () => {
        this.setState({ open: false });
    };

  render() {
    const { classes, content } = this.props;
    return (
        <div className={classes.root}>
            <MainBar 
                state={this.state}
                handleDrawerOpen={this.handleDrawerOpen}/>
            <SideBar  
                state={this.state}
                handleDrawerClose={this.handleDrawerClose}/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                {content}
            </main>
        </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
