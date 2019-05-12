import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../styles/SingleJob';

const SingleScholarshipComponent = (props) => {

    const { classes } = props;
    return (
        <React.Fragment>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="h5" component="h3">
                    Persue Masters Degree in Computer Engineering, 100% Tuition Scholarships
                </Typography>
                <Typography component="p">
                    University of Dakar is looking for students 
                    who have passion in computer programming to apply 
                    for a masters scholarship in computer engineering
                </Typography>
            </Paper>
        </React.Fragment>
    );
};

SingleScholarshipComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleScholarshipComponent);
