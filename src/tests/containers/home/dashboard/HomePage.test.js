import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../../../containers/home/dashboard/HomePage';

describe('HomePage', () =>{

    const props = {
        classes: {},
        theme: {
            direction: 'rtl',
        },
        state: {
            open: false
        }
    }

    const wrapper = shallow(
        <HomePage {...props} />)
    .dive();

    it('should call handleDrawerOpen', () =>{
        const spy = jest.spyOn(wrapper.instance(), 'handleDrawerOpen');
        wrapper.instance().handleDrawerOpen();
        expect(spy).toHaveBeenCalled(); 
    })

    it('should call handleDrawerClose', () =>{
        const spy = jest.spyOn(wrapper.instance(), 'handleDrawerClose');
        wrapper.instance().handleDrawerClose();
        expect(spy).toHaveBeenCalled(); 
    })
} );
