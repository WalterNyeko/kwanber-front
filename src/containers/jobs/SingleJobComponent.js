import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../styles/SingleJob';

const SingleJobComponent = (props) => {

    const { classes } = props;
    return (
        <React.Fragment>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="h5" component="h3">
                Civil Engineer With 4+ years experience needed
                </Typography>
                <Typography component="p">
                The applicant should be familiar with driving graders, 
                carterpillars, even tankers and mambaz for soldiers 
                because sometimes the field can be insecure.
                </Typography>
            </Paper>
        </React.Fragment>
    );
};

SingleJobComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleJobComponent);
