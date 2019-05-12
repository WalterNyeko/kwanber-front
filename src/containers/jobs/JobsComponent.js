import React from 'react';
import HomePage from '../home/dashboard/HomePage';
import AllJobs from './AllJobs';

class JobsComponent extends React.Component {

    render(){

        return (
            <React.Fragment>
                <HomePage content={<AllJobs />}/>
            </React.Fragment>
        );
    }
}

export default JobsComponent;