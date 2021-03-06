import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import gown from '../../../images/puremath1.jpeg';
import Modal from '../../helpers/Modal';
import ChooseSchoolForm from './ChooseSchoolForm';
import { styles } from '../../../styles/Results';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Results = (props) => {
  const { classes } = props;
  return (
    <React.Fragment>
      <main>
        <Typography component="h2" variant="h4" align="center" color="textPrimary" gutterBottom>
          Gulu Public School Results {' '}
          <Modal 
            buttonText="Choose Another School"
            modalTitle="Choose The School"
            modalContent={<ChooseSchoolForm/>}
            modalButtonType="primary"
            okButtonText="Apply"
            modalWidth="600px"/>
        </Typography>

          <Grid container spacing={40}>
            {cards.map(card => (
              <Grid item key={card} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={gown} // eslint-disable-line max-len
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Mid Term I 2019
                    </Typography>
                    <Typography>
                      This is a test that pupils did in March 2019 during the 
                      middle of the term to test whether the students are understanding.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View Results
                    </Button>
                    <Button size="small" color="primary">
                      Edit Results
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Kwan Ber Initiative
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          This is an app designed to support the education system in Acholi Sub Region
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Results.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Results);
