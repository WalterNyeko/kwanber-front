import React from 'react';
import SingleJobComponent from './SingleJobComponent';

class AllJobs extends React.Component {

    render(){
        const testNumberOfJobs = [1,2,3,4,5,6,7,8,9]
        return (
            <React.Fragment>
                {testNumberOfJobs.map(eachJob =>(
                    <>
                    <SingleJobComponent />
                    <br></br>
                    </>
                ))}
            </React.Fragment>
        );
    }
}

export default AllJobs;
