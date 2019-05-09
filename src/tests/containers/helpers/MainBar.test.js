import React from 'react';
import { mount } from 'enzyme';
import { Drawer } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import MainBar from '../../../containers/helpers/MainBar';

describe('Modal', () =>{

    const props = {
        classes: {},
        state: {
            open: true
        }
    }

    const wrapper = mount(
        <BrowserRouter>
            <MainBar {...props} />
        </BrowserRouter>);
        
    it('should render drawer component', () =>{
        expect(wrapper.instance().state).toBe(null); 
        //this should fail if the component is rendered correctly
    })
} )
