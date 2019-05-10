import React from 'react';
import { mount } from 'enzyme';
import TestDrawerContent, { DescriptionItem } from '../../../containers/fixtures/TestDrawerContent';

describe('TestDrawerContent', () =>{

    const props = {
        classes: {},
    }

    const wrapper = mount(
        <TestDrawerContent {...props} />
    );

    const wrapperDescriptionItem = mount(
        <DescriptionItem title="test" />
    );
        
    it('should render description items', () =>{
        expect(wrapper.find(DescriptionItem)).toBeTruthy();
        expect(wrapperDescriptionItem.find('div')).toHaveLength(1);
    })
} );
