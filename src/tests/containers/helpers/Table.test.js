import React from 'react';
import { shallow } from 'enzyme';
import Table from '../../../containers/helpers/Table';
import { testTitle, defaultTitles } from '../../../containers/fixtures/TableTitles';
import { testTabledata } from '../../../containers/fixtures/TestTableData';
import TestDrawerContent from '../../../containers/fixtures/TestDrawerContent';



describe('Edit Modal', () =>{

    const wrapper = shallow(
    <Table 
        classes={{}}
        viewTableTitles={defaultTitles} 
        actionTableTitles={testTitle} 
        tableData={testTabledata}
        drawerContent={TestDrawerContent}
    />).dive();

    it('should call handleSwitchChange', () =>{
        const spy = jest.spyOn(wrapper.instance(), 'handleSwitchChange');
        wrapper.instance().handleSwitchChange();
        expect(spy).toHaveBeenCalled();
    })

    it('should call handleChangePage', () =>{
        const spy = jest.spyOn(wrapper.instance(), 'handleChangePage');
        wrapper.instance().handleChangePage();
        expect(spy).toHaveBeenCalled();
    })

    it('should call handleChangeRowsPerPage', () =>{
        const spy = jest.spyOn(wrapper.instance(), 'handleChangeRowsPerPage');
        const event = {
            target: {}
        }
        wrapper.setState({ checked: false });
        wrapper.instance().handleChangeRowsPerPage(event);
        expect(spy).toHaveBeenCalled();
    })
} );
