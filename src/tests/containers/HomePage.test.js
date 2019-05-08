import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../containers/home/HomePage';
import MainBar from '../../containers/helpers/MainBar';

describe('HomePage',() =>{
    
    const wrapper = shallow(<HomePage/>);
    it('renders homepage without crashing', () => {
        expect(wrapper.find(MainBar)).toHaveLength(0);
    });
})

