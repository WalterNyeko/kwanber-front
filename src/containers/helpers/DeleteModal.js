import React from 'react';
import { Modal, Button } from 'antd';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../styles/DeleteModal';
class DeleteModal extends React.Component {
  state = {
    visible: false,
    confirmLoading: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { visible, confirmLoading } = this.state;
    const {  
        modalTitle, 
        modalContent,
        okButtonText,
        modalWidth,
        modalButtonType,
        classes 
    } = this.props;
    return (
      <>
        <DeleteIcon 
            className={classes.icon} 
            style={{cursor: 'pointer', color: 'red'}}
            onClick={this.showModal}
        />
        <Modal
            title={modalTitle}
            visible={visible}
            onOk={this.handleOk}
            confirmLoading={confirmLoading}
            onCancel={this.handleCancel}
            footer={[
                <Button key="back" onClick={this.handleCancel}>Cancel</Button>,
                <Button key="submit" type={modalButtonType} onClick={this.handleOk}>
                    {okButtonText}
                </Button>,
            ]}
            width={modalWidth}
        >
          <p>{modalContent}</p>
        </Modal>
      </>
    );
  }
}
export default withStyles(styles)(DeleteModal);
