import React from 'react';
import { shallow } from 'enzyme';
import AllJobs from '../../../containers/jobs/AllJobs';
import SingleJobComponent from '../../../containers/jobs/SingleJobComponent';


describe('Results', () =>{

    const wrapper = shallow(
        <AllJobs />
    );

    it('should render correctly', () =>{
        expect(wrapper.find(SingleJobComponent)).toHaveLength(9);
    })
} );
