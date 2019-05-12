import React from 'react';
import { shallow } from 'enzyme';
import JobsComponent from '../../../containers/jobs/JobsComponent';
import HomePage from '../../../containers/home/dashboard/HomePage';


describe('Results', () =>{

    const wrapper = shallow(
        <JobsComponent />
    );

    it('should render correctly', () =>{
        expect(wrapper.find(HomePage)).toHaveLength(1);
    })
} );
