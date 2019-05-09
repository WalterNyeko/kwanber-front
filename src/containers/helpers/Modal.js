import React from 'react';
import { Modal, Button, Icon } from 'antd';

class ReusableModal extends React.Component {
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
        visible: false,
    });
  }

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }

  render() {
    const { 
        visible, 
        confirmLoading 
    } = this.state;
    const { 
        buttonText, 
        modalTitle, 
        modalContent, 
        modalButtonType,
        okButtonText,
        modalWidth 
    } = this.props;
    return (
      <>
        <Button type={modalButtonType} onClick={this.showModal}>
            <Icon type="plus" />{buttonText}
        </Button>
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
export default ReusableModal;