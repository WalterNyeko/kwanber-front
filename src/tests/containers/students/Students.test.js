import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Students from '../../../containers/students/Students';
import StudentsTabs from '../../../containers/students/StudentsTabs'

describe('StudentsTabs', () =>{

    const props = {
        classes: {},
        theme: {},
    }

    const wrapper = mount(
        <BrowserRouter>
            <Students {...props} />
        </BrowserRouter>
    );
        
    it('should render students component', () =>{
        expect(wrapper.find(StudentsTabs)).toHaveLength(1);
    })
});
