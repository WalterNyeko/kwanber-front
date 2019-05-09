import React from 'react';
import { shallow } from 'enzyme';
import SchoolsNodes from '../../../../containers/home/trees/SchoolsNodes';
import AcademicsTree from '../../../../containers/home/trees/AcademicsTree';

describe('AcademicTree', () =>{

    const props = {
        classes: {},
    }

    const wrapper = shallow(
        <AcademicsTree {...props} />
    );

    it('should render component well', () =>{
        expect(wrapper.find(SchoolsNodes)).toHaveLength(1); 
    })
});
