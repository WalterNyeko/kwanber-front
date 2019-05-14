import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import { Tree } from "antd";
import YearPicker from "react-year-picker";
import { Bar } from "react-chartjs-2";
import { compose, graphql } from "react-apollo";
import { GET_POPULATION_PER_SCHOOL } from "../../graphql/queries/schools/schools";
const { TreeNode } = Tree;
class PopulationContent extends Component {
  state = {
    mapData1: [],
    mapData2: [],
    activeYear1: "",
    activeYear2: "",
    schoolId: 1
  };

  handleRefetchOne = (schoolId, activeYear) => {
    const { refetch } = this.props.populationOne;
    refetch({ school_id: parseInt(schoolId), active_year: activeYear });
  };
  handleRefetchTwo = (schoolId, activeYear) => {
    const { refetch } = this.props.populationTwo;
    refetch({ school_id: parseInt(schoolId), active_year: activeYear });
  };

  onSelect = async (selectedKeys, info) => {
    const { activeYear1, activeYear2 } = this.state;
    this.setState({ schoolId: selectedKeys[0] });
    await this.handleRefetchOne(selectedKeys[0], activeYear1);
    const {
      populationOne: { populationBySchoolIdAndYear }
    } = this.props;
    if (!populationBySchoolIdAndYear.length) {
      await this.setState({ mapData1: [] });
    } else {
      await this.setState({ mapData1: populationBySchoolIdAndYear });
    }

    await this.handleRefetchTwo(selectedKeys[0], activeYear2);
    if (!this.props.populationTwo.populationBySchoolIdAndYear.length) {
      this.setState({
        mapData2: []
      });
    } else {
      this.setState({
        mapData2: this.props.populationTwo.populationBySchoolIdAndYear
      });
    }
  };

  handleChangeYearOne = async year => {
    const {
      populationOne: { refetch }
    } = this.props;
    const { schoolId } = this.state;
    await this.setState({ activeYear1: year.toString() });
    await refetch({
      school_id: parseInt(schoolId),
      active_year: year.toString()
    });
    const {
      populationOne: { populationBySchoolIdAndYear }
    } = this.props;
    this.setState({ mapData1: populationBySchoolIdAndYear });
  };

  handleChangeYearTwo = async year => {
    const {
      populationTwo: { refetch }
    } = this.props;
    const { schoolId } = this.state;
    await this.setState({ activeYear2: year.toString() });
    await refetch({
      school_id: parseInt(schoolId),
      active_year: year.toString()
    });
    const {
      populationTwo: { populationBySchoolIdAndYear }
    } = this.props;
    this.setState({ mapData2: populationBySchoolIdAndYear });
  };

  generateMapTitles = mapData => {
    let myTitles = [];
    if (mapData.length) {
      mapData &&
        mapData.length &&
        mapData.map(({ class_name }) => {
          myTitles.push(class_name);
        });
      return myTitles;
    } else {
      return [];
    }
  };

  generateMapContentData = mapData => {
    let myData = [];
    if (mapData.length) {
      mapData &&
        mapData.length &&
        mapData.map(({ population }) => {
          myData.push(parseInt(population));
        });
      return myData;
    } else {
      return [];
    }
  };

  render() {
    const { districts, schools } = this.props;
    const { mapData1, mapData2 } = this.state;
    console.log(this.props, "state now at render time");
    const dataGraphOne = {
      labels: this.generateMapTitles(mapData1),
      datasets: [
        {
          label: `Schools Population`,
          backgroundColor: `rgb(30, 132, 73)`,
          borderColor: "rgb(255, 99, 132)",
          data: this.generateMapContentData(mapData1)
        }
      ]
    };
    const dataGraphTwo = {
      labels: this.generateMapTitles(mapData2),
      datasets: [
        {
          label: `Schools Population`,
          backgroundColor: `rgb(30, 132, 73)`,
          borderColor: "rgb(255, 99, 132)",
          data: this.generateMapContentData(mapData2)
        }
      ]
    };
    const options = {
      responsive: true,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: "Population of Students"
            }
          }
        ],
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
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
    return (
      <Paper elevation={1} style={{ padding: "35px" }}>
        <Typography variant="h5" component="h3" style={{ padding: "0px" }}>
          Schools Population Data
        </Typography>
        <Divider />
        <br />
        <div className="row">
          <div className="col-md-4">
            <Tree
              showLine
              defaultExpandedKeys={["0-0"]}
              onSelect={this.onSelect}
            >
              <TreeNode
                title="Schools (Acholi Sub Region)"
                key="0-0"
                style={{ fontWeight: "24px" }}
              >
                {districts &&
                  districts.length &&
                  districts.map(({ id, name }) => (
                    <TreeNode title={`${name} District`} key={id}>
                      {schools &&
                        schools.length &&
                        schools
                          .filter(ele => ele.district === name)
                          .map(({ name, id }) => (
                            <TreeNode title={name} key={id} />
                          ))}
                    </TreeNode>
                  ))}
              </TreeNode>
            </Tree>
          </div>
          <div className="col-md-8">
            <div className="col-md-12">
              <YearPicker onChange={this.handleChangeYearOne} />
              <Bar data={dataGraphOne} options={options} />
            </div>
            <div className="col-md-12">
              <YearPicker onChange={this.handleChangeYearTwo} />
              <Bar data={dataGraphTwo} options={options} />
            </div>
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
      </Paper>
    );
  }
}
export default compose(
  graphql(GET_POPULATION_PER_SCHOOL, {
    name: "populationOne",
    options: () => ({
      variables: {
        school_id: 0,
        active_year: ""
      }
    })
  }),
  graphql(GET_POPULATION_PER_SCHOOL, {
    name: "populationTwo",
    options: () => ({
      variables: {
        school_id: 1,
        active_year: ""
      }
    })
  })
)(PopulationContent);
