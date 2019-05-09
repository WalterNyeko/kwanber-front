import React from 'react';
import { shallow } from 'enzyme';
import SchoolsNodes from '../../../../containers/home/trees/SchoolsNodes';

describe('SchoolsNodes', () =>{

    const props = {
        classes: {},
    }

    const wrapper = shallow(
        <SchoolsNodes {...props} />
    );

    it('should call onSelect', () =>{
        const spy = jest.spyOn(wrapper.instance(), 'onSelect');
        wrapper.instance().onSelect();
        expect(spy).toHaveBeenCalled(); 
    })
});
