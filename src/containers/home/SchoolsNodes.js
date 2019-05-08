import React from 'react';
import { Tree } from 'antd';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;
const { TreeNode } = Tree;
class SchoolsNodes extends React.Component {

  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  }

  render() {
    return (
      <React.Fragment>
        <RangePicker renderExtraFooter={() => 'extra footer'} />
        <Tree
          showLine
          defaultExpandedKeys={['0-0-0']}
          onSelect={this.onSelect}
        >
          <TreeNode title="Schools (Acholi Sub Region)" key="0-0" style={{fontWeight: '24px'}}>
            <TreeNode title="Primary Schools" key="0-0-0">
              <TreeNode title="Koro Abili Primary School" key="0-0-0-0" />
              <TreeNode title="Koro Primary School" key="0-0-0-1" />
              <TreeNode title="Gulu Public School" key="0-0-0-2" />
            </TreeNode>
            <TreeNode title="Secondary Schools" key="0-0-1">
              <TreeNode title="St. Joseph's College Layibi" key="0-0-1-0" />
            </TreeNode>
            <TreeNode title="Tertiary Institutions" key="0-0-2">
              <TreeNode title="Comboni Samaritans Vocational Institute" key="0-0-2-0" />
              <TreeNode title="Koro Vocational Institute" key="0-0-2-1" />
            </TreeNode>
          </TreeNode>
        </Tree>
      </React.Fragment>
    );
  }
}

export default SchoolsNodes;
