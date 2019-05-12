import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Schools from '../../../containers/schools/Schools';
import SchoolsTabs from '../../../containers/schools/SchoolsTabs'

describe('Schools', () =>{

    const props = {
        classes: {},
    }

    const wrapper = mount(
        <BrowserRouter>
            <Schools {...props} />
        </BrowserRouter>
    );
        
    it('should render schools component', () =>{
        expect(wrapper.find(SchoolsTabs)).toHaveLength(1);
    })
});
