import React from 'react';
import { mount } from 'enzyme';
import { Drawer } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import SideBar from '../../../containers/helpers/SideBar';

describe('Modal', () =>{

    const props = {
        classes: {},
        state: {
            open: false
        }
    }

    const wrapper = mount(
        <BrowserRouter>
            <SideBar {...props} />
        </BrowserRouter>);

    it('should render drawer component', () =>{
        expect(wrapper.instance().state).toBe(null); 
        //this should fail if the component is rendered correctly
    })
} )
