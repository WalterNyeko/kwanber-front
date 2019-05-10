import React from 'react';
import { mount } from 'enzyme';
import { Drawer } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import MainBar from '../../../containers/helpers/MainBar';

describe('Main Bar', () =>{

    const props = {
        classes: {},
        state: {
            open: true
        }
    }

    const wrapper = mount(
        <BrowserRouter>
            <MainBar {...props} />
        </BrowserRouter>
    );
        
    it('should render drawer component', () =>{
        const { open } = wrapper.instance().props.children.props.state;
        expect(open).toBe(true);
    })
} );
