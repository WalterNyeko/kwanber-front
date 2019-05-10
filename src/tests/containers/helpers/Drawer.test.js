import React from 'react';
import { shallow } from 'enzyme';
import { Drawer } from 'antd';
import DetailsDrawer from '../../../containers/helpers/Drawer';

describe('Drawer', () =>{

    const wrapper = shallow(
    <DetailsDrawer 
        classes={{}}
    />);
    
    it('should render drawer component', () =>{
        expect(wrapper.find(Drawer)).toHaveLength(1);
    })

    it('should call onClose when user wants to close the drawer', () =>{
        const spy = jest.spyOn(wrapper.instance(), 'onClose');
        wrapper.instance().onClose();
        expect(spy).toHaveBeenCalled();
    })

    it('should call showDrawer', () =>{
        const spy = jest.spyOn(wrapper.instance(), 'showDrawer');
        wrapper.instance().showDrawer();
        expect(spy).toHaveBeenCalled();
    })
} );
