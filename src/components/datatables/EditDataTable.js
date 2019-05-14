import React, { Component } from 'react';
import EditDataTableComponent from '../../containers/datatables/EditDataTable';

class EditDataTable extends Component {
    state = {
        columnsCounter: 1,
        columnName: '',
        columnDataType: '',
        columnDetails: [
            { 
                id: 1, 
                columnName: "username", 
                columnDataType: "String", 
                columnLength: 255, 
                fieldMandatory: false, 
                dropdownItems: { 
                    itemId: 1, 
                    itemName: "Confirmation"
                }
            },
            { 
                id: 2, 
                columnName: "email", 
                columnDataType: "Decimal", 
                columnLength: 250, 
                fieldMandatory: true,
                dropdownItems: {
                    itemId: '',
                    itemName: ''
                }
            }
        ],
        dataTypes: [
            { id: 1, name: "String"},
            { id: 2, name: "Number"},
            { id: 3, name: "Decimal"},
            { id: 4, name: "Boolean"},
            { id: 5, name: "Date"},
            { id: 6, name: "Date & Time"},
            { id: 7, name: "Text"},
            { id: 8, name: "Dropdown"}
        ]
    }

    handleInputChange = async (event) => {
        const { name, value } = event.target;
        await this.setState({[name]: value});
        await this.populateColumnDetails();
    }

    populateColumnDetails = async () => {
        const { columnName, columnDataType, columnDetails, columnsCounter } = this.state;
        const { id } = columnDetails[columnsCounter] || {};
        let newId = id + 1;
        const newObj = {
            id: newId,
            columnName: columnName,
            columnDataType: columnDataType,
            columnLength: '',
            fieldMandatory: false,
            dropdownItems: columnDataType === "Dropdown"? {
                itemId: 1,
                itemName: 'test'
            }: {
                itemId: '',
                itemName: ''
            }
        }
        let currentArray = columnDetails;
        const ourNewArray =  currentArray.filter((element) => element.id !== newId)
        ourNewArray.push(newObj);
        await this.setState((prevState, props) =>({
            columnDetails: ourNewArray
        }));
    
    }

    handleClick = async () => {
        let columnsCounter = this.state.columnsCounter;
        columnsCounter ++;
        await this.setState({columnsCounter})
    }
  render() {
    return (
      <div>
        <EditDataTableComponent 
            columnDetails={this.state}
            handleInputChange={this.handleInputChange}
            handleClick={this.handleClick}/>
      </div>
    )
  }
}
export default EditDataTable;
