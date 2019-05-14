import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import gown from '../../../images/puremath1.jpeg';
import Modal from '../../helpers/Modal';
import ChooseSchoolForm from './ChooseSchoolForm';
import { styles } from '../../../styles/Results';
import { getLanguages } from '../../languages/GrabLanguage';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const categories = getLanguages();
    const { menu: { 
            title, 
        } 
    } = categories;
const Results = (props) => {
  const { classes: { 
            dashboardMenu, 
            cardMedia, 
            cardContent, 
            footer }, classes } = props;
  
  return (
    <React.Fragment>
      <Paper className={dashboardMenu} elevation={1}>
        <Typography variant="h5" component="h3">
        Academic Results{/* {title.value} */}
        </Typography>
        <Divider/>
        <Typography component="p" style={{padding: '10px'}}>
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
                      className={cardMedia}
                      image={gown} // eslint-disable-line max-len
                      title="Image title"
                    />
                    <CardContent className={cardContent}>
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
        <footer className={footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Kwan Ber Initiative
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            This is an app designed to support the education system in Acholi Sub Region
          </Typography>
        </footer>
        {/* End footer */}
        </Typography>
    </Paper>
      
    </React.Fragment>
  );
}

Results.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Results);
