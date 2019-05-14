import React from 'react';
import { shallow } from 'enzyme';
import StudentsTabs, { TabContainer } from '../../../containers/students/StudentsTabs';
import Typography from '@material-ui/core/Typography';

describe('StudentsTabs', () =>{

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
        <StudentsTabs {...props} />)
    .dive();

    const containerWrapper = shallow(
        <TabContainer {...containerProps} />
    );

    it('should call handleChange', () =>{
        const spy = jest.spyOn(wrapper.instance(), 'handleChange');
        wrapper.instance().handleChange();
        expect(spy).toHaveBeenCalled(); 
    })

    it('should render tab container well', () =>{
        const typography = containerWrapper.find(Typography);
        expect(typography).toHaveLength(1); 
    })
});
