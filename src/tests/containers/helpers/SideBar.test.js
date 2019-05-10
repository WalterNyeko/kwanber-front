import React from 'react';
import { mount } from 'enzyme';
import { Drawer } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import SideBar from '../../../containers/helpers/SideBar';

describe('SideBar', () =>{

    const props = {
        state: {
            open: false
        },
        handleDrawerClose: jest.fn(),
    }

    const wrapper = mount(
        <BrowserRouter>
            <SideBar {...props} />
        </BrowserRouter>
    );

    it('should render drawer component', () =>{
        const { open } = wrapper.instance().props.children.props.state;
        expect(open).toBe(false);
    })
} );
