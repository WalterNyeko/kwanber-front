import React from 'react';
import { shallow } from 'enzyme';
import SchoolsNodes from '../../../../containers/home/trees/SchoolsNodes';
import StudentsTree from '../../../../containers/home/trees/StudentsTree';

describe('StudentTree', () =>{

    const props = {
        classes: {},
    }

    const wrapper = shallow(
        <StudentsTree {...props} />
    );

    it('should render component well', () =>{
        expect(wrapper.find(SchoolsNodes)).toHaveLength(1); 
    })
});
