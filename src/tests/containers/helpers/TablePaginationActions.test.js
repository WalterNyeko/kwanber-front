import React from 'react';
import { mount } from 'enzyme';
import TablePaginationActions from '../../../containers/helpers/TablePaginationActions';

describe('TablePaginationActions', () =>{

    const props = {
        classes: {},
        theme: {
            direction: 'rtl'
        },
        page: 1,
    }

    const wrapper = mount(
        <TablePaginationActions 
            {...props} 
            onChange={jest.fn()}
            onChangePage={jest.fn()}/>
    );
        
    it('should call handleFirstPageButtonClick', () =>{
        const spy = jest.spyOn(wrapper.instance(), 'handleFirstPageButtonClick');
        wrapper.instance().handleFirstPageButtonClick();
        expect(spy).toHaveBeenCalled();
    })

    it('should call handleBackButtonClick', () =>{
        const spy = jest.spyOn(wrapper.instance(), 'handleBackButtonClick');
        wrapper.instance().handleBackButtonClick();
        expect(spy).toHaveBeenCalled();
    })

    it('should call handleNextButtonClick', () =>{
        const spy = jest.spyOn(wrapper.instance(), 'handleNextButtonClick');
        wrapper.instance().handleNextButtonClick();
        expect(spy).toHaveBeenCalled();
    })

    it('should call handleLastPageButtonClick', () =>{
        wrapper.setProps({
            theme: {
                direction: 'rtl1'
            }
        })
        const spy = jest.spyOn(wrapper.instance(), 'handleLastPageButtonClick');
        wrapper.instance().handleLastPageButtonClick();
        expect(spy).toHaveBeenCalled();
    })
});
