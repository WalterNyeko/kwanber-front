import Table from '../helpers/Table';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { getLanguages } from '../languages/GrabLanguage';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
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

  render() {
    const categories = getLanguages();
    const { menu: { 
            title, 
        } 
    } = categories;
    return (
      <div>
        <Paper elevation={1} style={{padding: '35px'}}>
          <Typography variant="h5" component="h3" style={{padding: '0px'}}>
            {title.value}
          </Typography>
            <Divider/>
              <br></br>
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
                <footer>
                <Typography variant="h6" align="center" gutterBottom>
                    Kwan Ber Initiative
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    This is an app designed to support the education system in Acholi Sub Region
                </Typography>
                </footer>
        </Paper>     
      </div>
    );
  }
}

StudentsTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object,
};

export default withStyles(styles)(StudentsTabs);