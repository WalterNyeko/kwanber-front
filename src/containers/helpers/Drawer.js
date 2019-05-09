import React from 'react';
import { Drawer } from 'antd';
  
  class DetailsDrawer extends React.Component {
    state = { visible: false };
  
    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
  
    onClose = () => {
      this.setState({
        visible: false,
      });
    };
  
    render() {
      const { 
        spanText, 
        drawerWidth,
        placement,
        drawerContent 
      } = this.props;
      return (
        <>
          <span onClick={this.showDrawer} style={{cursor: 'pointer'}}>
            {spanText}
          </span>
          <Drawer
            width={drawerWidth}
            placement={placement}
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            {drawerContent}
          </Drawer>
        </>
      );
    }
  }
export default DetailsDrawer;