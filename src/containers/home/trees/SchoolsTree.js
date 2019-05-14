import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import Typography from "@material-ui/core/Typography";

import { Tree } from "antd";
import { graphql } from "react-apollo";
import GET_UNEB_RESULTS_BY_ID_AND_GRADE from "../../../graphql/queries/results/uneb";
import YearPicker from "react-year-picker";
const { TreeNode } = Tree;
class SchoolsTree extends Component {
  state = {
    grade: 0,
    schoolId: 0,
    start_year: "",
    end_year: "",
    gradeValues: [
      { id: 1, name: "First Grade" },
      { id: 2, name: "Second Grade" },
      { id: 3, name: "Third Grade" },
      { id: 4, name: "Forth Grade" }
    ]
  };

  generateMapTitles = mapData => {
    let myTitles = [];
    mapData &&
      mapData.length &&
      mapData.map(({ exam_year }) => {
        myTitles.push(exam_year);
      });
    return myTitles;
  };

  generateMapContentData = mapData => {
    let myData = [];
    mapData &&
      mapData.length &&
      mapData.map(({ number }) => {
        myData.push(parseInt(number));
      });
    return myData;
  };

  onSelect = async (selectedKeys, info) => {
    this.setState({ schoolId: selectedKeys[0] });
    await this.handleRefetch(selectedKeys[0]);
  };

  handleRefetch = schoolId => {
    const { refetch } = this.props.uneb;
    const { grade } = this.state;
    refetch({ school_id: parseInt(schoolId), grade: parseInt(grade) });
  };

  handleChangeGrade = event => {
    const { value } = event.target;
    const { schoolId } = this.state;
    this.setState({ grade: value }, () =>
      this.handleRefetch(parseInt(schoolId))
    );
  };

  handleChangeStartYear = year => {
    const { refetch } = this.props.uneb;
    const { grade, end_year, schoolId } = this.state;
    this.setState({ start_year: year.toString() });
    refetch({
      school_id: parseInt(schoolId),
      grade: parseInt(grade),
      start_year: year.toString(),
      end_year: end_year.toString()
    });
  };

  handleChangeEndYear = year => {
    const { refetch } = this.props.uneb;
    const { grade, start_year, schoolId } = this.state;
    this.setState({ end_year: year.toString() });
    refetch({
      school_id: parseInt(schoolId),
      grade: parseInt(grade),
      start_year: start_year.toString(),
      end_year: year.toString()
    });
  };
  render() {
    let backgroundColor = "";
    const { grade } = this.state;
    if (grade === "1") {
      backgroundColor = "rgb(30, 132, 73)";
    } else if (grade === "2") {
      backgroundColor = "rgb(27, 79, 114)";
    } else if (grade === "3") {
      backgroundColor = "rgb(39, 55, 70)";
    } else if (grade === "4") {
      backgroundColor = "rgb(192, 57, 43)";
    } else {
    }
    const {
      uneb: { unebSummaryBySchoolIdAndGrade }
    } = this.props;
    const data = {
      labels: this.generateMapTitles(unebSummaryBySchoolIdAndGrade),
      datasets: [
        {
          label: `UNEB Examinations Analytics`,
          backgroundColor: `${backgroundColor}`,
          borderColor: "rgb(255, 99, 132)",
          data: this.generateMapContentData(unebSummaryBySchoolIdAndGrade)
        }
      ]
    };

    const options = {
      responsive: true,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              min: 0,
              max: 100
            },
            scaleLabel: {
              display: true,
              labelString: "Percentage of Students In Selected Grade"
            }
          }
        ],
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Years"
            },
            ticks: {
              major: {
                fontStyle: "bold",
                fontColor: "#FF0000"
              }
            }
          }
        ]
      }
    };
    const { secondary, primary, theDistrict } = this.props;
    let district, schools;
    if (theDistrict) {
      district = theDistrict;
    }
    if (secondary && secondary.length) {
      schools = secondary;
    }

    if (primary && primary.length) {
      schools = primary;
    }
    return (
      <>
        <div className="row">
          <div className="col-md-4">
            <div className="row mb-3">
              <div className="col-md-6">
                <span className="mb-4">Start Year</span>
                <YearPicker onChange={this.handleChangeStartYear} />
              </div>
              <div className="col-md-6">
                <span className="mb-4">End Year</span>
                <YearPicker onChange={this.handleChangeEndYear} />
              </div>
            </div>
            <select
              className="custom-select mt-2 mb-2 mr-2"
              onChange={this.handleChangeGrade}
            >
              <option value="select">Select Grade</option>
              {this.state.gradeValues.map(ele => (
                <option value={ele.id} key={ele.id}>
                  {ele.name}
                </option>
              ))}
            </select>
            <Tree
              showLine
              defaultExpandedKeys={["0-0-0"]}
              onSelect={this.onSelect}
            >
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
          </div>
          <div className="col-md-8">
            <Bar data={data} options={options} />
          </div>
        </div>

        <footer className="mt-5">
          <Typography variant="h6" align="center" gutterBottom>
            Kwan Ber Initiative
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            This is an app designed to support the education system in Acholi
            Sub Region
          </Typography>
        </footer>
      </>
    );
  }
}
export default graphql(GET_UNEB_RESULTS_BY_ID_AND_GRADE, {
  name: "uneb",
  options: () => ({
    variables: {
      school_id: 0,
      grade: 0,
      start_year: "",
      end_year: ""
    }
  })
})(SchoolsTree);
