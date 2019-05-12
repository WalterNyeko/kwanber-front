import React from 'react';
import { shallow } from 'enzyme';
import ScholarshipsComponent from '../../../containers/scholarships/ScholarshipsComponent';
import HomePage from '../../../containers/home/dashboard/HomePage';


describe('Results', () =>{

    const wrapper = shallow(
        <ScholarshipsComponent />
    );

    it('should render correctly', () =>{
        expect(wrapper.find(HomePage)).toHaveLength(1);
    })
} );
