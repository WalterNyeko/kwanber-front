import React from 'react';
import { shallow } from 'enzyme';
import Analytics from '../../../../containers/home/dashboard/Analytics';

describe('Analytics', () =>{

    const props = {
        classes: {},
        theme: {
            direction: 'rtl',
        },
    }

    const wrapper = shallow(
        <Analytics {...props} />
        ).dive();

    it('should call handleChange', () =>{
        const spy = jest.spyOn(wrapper.instance(), 'handleChange');
        wrapper.instance().handleChange();
        expect(spy).toHaveBeenCalled(); 
    })

    it('should call handleChangeIndex', () =>{
        const spy = jest.spyOn(wrapper.instance(), 'handleChangeIndex');
        wrapper.instance().handleChangeIndex();
        expect(spy).toHaveBeenCalled(); 
    })
} );
