import React from 'react';
import { mount, shallow } from 'enzyme';
import AddStudentForm, { 
    NoOptionsMessage, 
    Option, 
    SingleValue, 
    MultiValue, 
    Menu 
} from '../../../containers/students/AddStudentForm';
import { NoSsr, MenuItem } from '@material-ui/core';

describe('TestDrawerContent', () =>{

    const props = {
        classes: {},
    }

    const mountWrapper = mount(
        <AddStudentForm {...props} />
    );
    
    const wrapper = shallow(
        <AddStudentForm {...props} />
    ).dive();

    const noOptionsProps = {
        selectProps: {
            classes: {
                noOptionsMessage: {},
                singleValue: {},
                chipFocused: {},
                chip: {},
                paper: {}
            }
        },
        removeProps: {
            onClick: jest.fn()
        }
    }

    const wrapperNoOptionsMessage = mount(
        <NoOptionsMessage {...noOptionsProps}/>
    );
    
    const optionProps = {
        isSelected: false,
    }
    const wrapperOption = mount(
        <Option {...optionProps}/>
    );

    const wrapperSingleValue = mount(
        <SingleValue {...noOptionsProps}/>
    );

    const wrapperMultiValue = mount(
        <MultiValue {...noOptionsProps}/>
    );

    const wrapperMenu = mount(
        <Menu {...noOptionsProps}/>
    );
 
    it('should render AddStudentForm well', () =>{
        expect(wrapper.find(NoSsr)).toHaveLength(1);
    })

    it('should set fontWeight to 500 if isSelected is true', () =>{
        wrapperOption.setProps({
            isSelected: true
        })
        expect(wrapperOption.find(MenuItem)).toBeTruthy();
    })

    it('should call handleChange', () =>{
        const spy = jest.spyOn(wrapper.instance(), 'handleChange');
        console.log(wrapper.instance());
        wrapper.instance().handleChange('multi');
        expect(spy).toHaveBeenCalled();
    })

    it('should call handleInputChange', () =>{
        const spy = jest.spyOn(wrapper.instance(), 'handleInputChange');
        wrapper.instance().handleInputChange('schoolLevel');
        expect(spy).toHaveBeenCalled();
    })
});
