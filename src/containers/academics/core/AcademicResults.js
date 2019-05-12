import React from 'react';
import Results from '../results/Results';
import HomePage from '../../home/dashboard/HomePage';

class AcademicResults extends React.Component {

    render(){

        return (
            <React.Fragment>
                <HomePage content={<Results/>}/>
            </React.Fragment>
        );
    }
}

export default AcademicResults;
