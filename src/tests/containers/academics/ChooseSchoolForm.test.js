import React from 'react';
import { shallow } from 'enzyme';
import ChooseSchoolForm from '../../../containers/academics/results/ChooseSchoolForm';

describe('ChooseSchoolForm', () =>{

    const props = {
        classes: {}
    }

    const wrapper = shallow(
        <ChooseSchoolForm {...props} />
    ).dive();

    it('should call handleChange', () =>{
        const spy = jest.spyOn(wrapper.instance(), 'handleChange');
        wrapper.instance().handleChange("multi")("test");
        expect(spy).toHaveBeenCalled(); 
    })
} );
