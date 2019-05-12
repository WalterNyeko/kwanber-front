import React from 'react';
import HomePage from '../home/dashboard/HomePage';
import AllScholarships from './AllScholarships';

class ScholarshipsComponent extends React.Component {

    render(){

        return (
            <React.Fragment>
                <HomePage content={<AllScholarships />}/>
            </React.Fragment>
        );
    }
}

export default ScholarshipsComponent;
