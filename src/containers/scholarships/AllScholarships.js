import React from 'react';
import SingleScholarshipComponent from './SingleScholarshipComponent';

class AllScholarships extends React.Component {

    render(){
        const testNumberOfScholarships = [1,2,3,4,5,6,7,8,9]
        return (
            <React.Fragment>
                {testNumberOfScholarships.map(eachScholarship =>(
                    <>
                    <SingleScholarshipComponent />
                    <br></br>
                    </>
                ))}
            </React.Fragment>
        );
    }
}

export default AllScholarships;
