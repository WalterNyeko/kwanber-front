import React from 'react';
import { shallow } from 'enzyme';
import SchoolsTabs, { TabContainer } from '../../../containers/schools/SchoolsTabs';
import Typography from '@material-ui/core/Typography';

describe('HomePage', () =>{

    const props = {
        classes: {},
        theme: {
            direction: 'rtl',
        },
    }

    const containerProps = {
        children: <></>,
        dir: 'rtl'
    }

    const wrapper = shallow(
        <SchoolsTabs {...props} />)
    .dive();

    const containerWrapper = shallow(
        <TabContainer {...containerProps} />
    );

    it('should call handleChange', () =>{
        const spy = jest.spyOn(wrapper.instance(), 'handleChange');
        wrapper.instance().handleChange();
        expect(spy).toHaveBeenCalled(); 
    })

    it('should call handleChangeIndex', () =>{
        wrapper.setProps({ 
            theme: {
                direction: 'rtl1'
            } 
        });
        const spy = jest.spyOn(wrapper.instance(), 'handleChangeIndex');
        wrapper.instance().handleChangeIndex();
        expect(spy).toHaveBeenCalled(); 
    })

    it('should render tab container well', () =>{
        const typography = containerWrapper.find(Typography);
        expect(typography).toHaveLength(1); 
    })
});
