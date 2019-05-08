import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePaginationActions from './PaginationActions';
import { defaultTitles, testTitle } from './TableTitles';
import { testTabledata } from './TestTableData';
import MUIDataTable from "mui-datatables";
import Switch from '@material-ui/core/Switch';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';
import DetailsDrawer from './DetailsDrawer';
import TestDrawerContent from './TestDrawerContent';
import LinearProgress from '@material-ui/core/LinearProgress';
import { spinnerStyles } from '../../styles/Spinner';
import { actionsStyles } from '../../styles/ReusableTable';

const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
  TablePaginationActions,
);

class ReusableTable extends React.Component {
  state = {
    page: 0,
    rowsPerPage: 5,
    checked: true,
  };

  handleSwitchChange = name => event => {
    const { checked } = event.target;
    this.setState({ [name]: checked });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    const { value } = event.target;
    this.setState({ page: 0, rowsPerPage: value });
  };

  render() {
    const { classes } = this.props;
    const { rowsPerPage, page, checked } = this.state;
    const emptyRows = rowsPerPage - 
    Math.min(rowsPerPage, testTabledata.length - page * rowsPerPage);
    const options = {
      filterType: 'checkbox',
    };
    return (
      <Paper className={classes.root}>
        <Switch
          checked={checked}
          onChange={this.handleSwitchChange('checked')}
          value="checked"
          color="primary"
        />
        <div className={classes.tableWrapper}>
          {checked ?
          <>
          <LinearProgress
            classes={{
              colorPrimary: classes.linearColorPrimary,
              barColorPrimary: classes.linearBarColorPrimary,
            }}
          />
          <MUIDataTable
              title={"Employee List"}
              data={testTabledata}
              columns={defaultTitles}
              options={options}
          />
          </>:
          <>
            <LinearProgress
              classes={{
                colorPrimary: classes.linearColorPrimary,
                barColorPrimary: classes.linearBarColorPrimary,
              }}
            />
            <Table className={classes.table}>
              <TableHead> 
                <TableRow>
                    {testTitle.map((header, index) =>(
                      <TableCell key={index}>{header}</TableCell>
                    ))}
                </TableRow>
              </TableHead>
                <TableBody>
                  {testTabledata.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                    <TableRow key={index}>
                        {Object.entries(row).map(([key, value]) => {
                          return (
                            <TableCell align="left">
                              <DetailsDrawer 
                                spanText={value}
                                drawerWidth="640"
                                placement="right"
                                drawerContent={<TestDrawerContent/>}/>
                            </TableCell>)
                        })}
                        <TableCell align="left">
                          <EditModal 
                            modalTitle="Edit Selected Item"
                            modalButtonType="primary"
                            modalContent="Pass here as props, the form for editing"
                            okButtonText="Edit Item"
                            modalWidth="400px"/>
                          <DeleteModal 
                            modalTitle="Delete Item"
                            modalOkButton="Delete"
                            modalButtonType="danger"
                            modalContent="Are you sure you want to delete this item?"
                            okButtonText="Delete Item"
                            modalWidth="400px"/>
                        </TableCell>
                    </TableRow>
                  ))}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 0 * emptyRows }}/>
                  )}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 15, 25, 50, 100]}
                      colSpan={3}
                      count={testTabledata.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      SelectProps={{
                        native: true,
                      }}
                      onChangePage={this.handleChangePage}
                      onChangeRowsPerPage={this.handleChangeRowsPerPage}
                      ActionsComponent={TablePaginationActionsWrapped}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </>
          }  
        </div>
      </Paper>
    );
  }
}

ReusableTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(spinnerStyles)(ReusableTable);