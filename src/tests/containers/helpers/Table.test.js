import React from 'react';
import { shallow } from 'enzyme';
import Table from '../../../containers/helpers/Table';
import { testTitle, defaultTitles } from '../../../containers/fixtures/TableTitles';
import { testTableData } from '../../../containers/fixtures/TestTableData';
import TestDrawerContent from '../../../containers/fixtures/TestDrawerContent';



describe('Table', () =>{

    const wrapper = shallow(
    <Table 
        classes={{}}
        viewTableTitles={defaultTitles} 
        actionTableTitles={testTitle} 
        tableData={testTableData}
        drawerContent={TestDrawerContent}
    />).dive();

    it('should call handleSwitchChange', () =>{
        console.log(wrapper.instance().props.tableData.length - 1)
        wrapper.setState({
            page: 1,
            rowsPerPage: 5
        })
        const spy = jest.spyOn(wrapper.instance(), 'handleSwitchChange');
        const checked = {
            target: {
                value: "test"
            }
        }
        wrapper.instance().handleSwitchChange("something")(checked);
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
