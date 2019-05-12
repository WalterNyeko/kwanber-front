import React from 'react';
import { shallow } from 'enzyme';
import AllScholarships from '../../../containers/scholarships/AllScholarships';
import SingleScholarshipComponent from '../../../containers/scholarships/SingleScholarshipComponent';


describe('Results', () =>{

    const wrapper = shallow(
        <AllScholarships />
    );

    it('should render correctly', () =>{
        expect(wrapper.find(SingleScholarshipComponent)).toHaveLength(9);
    })
} );
