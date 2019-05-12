import React from 'react';
import { shallow } from 'enzyme';
import AcademicResults from '../../../containers/academics/core/AcademicResults';
import HomePage from '../../../containers/home/dashboard/HomePage';


describe('Results', () =>{

    const wrapper = shallow(
        <AcademicResults />
    );

    it('should render correctly', () =>{
        expect(wrapper.find(HomePage)).toHaveLength(1);
    })
} );
