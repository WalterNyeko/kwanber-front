import React from "react";
import { Tree } from "antd";
import { DatePicker } from "antd";
import { compose, graphql } from "react-apollo";
import GET_UNEB_RESULTS_BY_ID_AND_GRADE from "../../../graphql/queries/results/uneb";

const { RangePicker } = DatePicker;
const { TreeNode } = Tree;
class SchoolsNodes extends React.Component {
  onSelect = async (selectedKeys, info) => {
    await this.handleRefetch(selectedKeys[0]);
    const {
      updateParent,
      uneb: { unebSummaryBySchoolIdAndGrade },
      state
    } = this.props;
    await updateParent("mapData", unebSummaryBySchoolIdAndGrade);
    console.log(state);
  };

  handleRefetch = schoolId => {
    const { refetch } = this.props.uneb;
    refetch({ school_id: parseInt(schoolId), grade: 1 });
  };

  render() {
    const { schools, theDistrict } = this.props;
    let district;
    if (theDistrict) {
      district = theDistrict;
    }
    const {
      updateParent,
      uneb: { unebSummaryBySchoolIdAndGrade }
    } = this.props;
    updateParent("mapData", unebSummaryBySchoolIdAndGrade);
    return (
      <React.Fragment>
        <RangePicker />
        <Tree showLine defaultExpandedKeys={["0-0-0"]} onSelect={this.onSelect}>
          <TreeNode
            title="Schools (Acholi Sub Region)"
            key="0-0"
            style={{ fontWeight: "24px" }}
          >
            <TreeNode title={`${district} District`} key="0-0-0">
              {schools &&
                schools.length &&
                schools.map(({ id, name }) => (
                  <TreeNode title={name} key={id} />
                ))}
            </TreeNode>
          </TreeNode>
        </Tree>
      </React.Fragment>
    );
  }
}

export default graphql(GET_UNEB_RESULTS_BY_ID_AND_GRADE, {
  name: "uneb",
  options: () => ({
    variables: {
      school_id: 1,
      grade: 1
    }
  })
})(SchoolsNodes);
