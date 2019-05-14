import React from 'react';
import SingleScholarshipComponent from './SingleScholarshipComponent';
import { getLanguages } from '../languages/GrabLanguage';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';


class AllScholarships extends React.Component {

    render(){

        const categories = getLanguages();
        const { menu: { 
                title, 
            } 
        } = categories;
        const testNumberOfScholarships = [1,2,3,4,5,6,7,8,9]
        return (
            <React.Fragment>
                <Paper elevation={1} style={{padding: '35px'}}>
                        <Typography variant="h5" component="h3" style={{padding: '0px'}}>
                        All Scholarships Info {/* {title.value} */}
                        </Typography>
                        <Divider/>
                        <br></br>
                        {testNumberOfScholarships.map(eachScholarship =>(
                            <>
                            <SingleScholarshipComponent />
                            <br></br>
                            </>
                        ))}  
                        <footer>
                        <Typography variant="h6" align="center" gutterBottom>
                            Kwan Ber Initiative
                        </Typography>
                        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                            This is an app designed to support the education system in Acholi Sub Region
                        </Typography>
                        </footer>
                    </Paper>
                
            </React.Fragment>
        );
    }
}

export default AllScholarships;
