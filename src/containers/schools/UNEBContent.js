import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import { Tree } from "antd";
import { Bar } from "react-chartjs-2";
import YearPicker from "react-year-picker";

const { TreeNode } = Tree;

class UNEBContent extends Component {
  handleRefetch = schoolId => {
    const { refetch } = this.props.uneb;
    refetch({ school_id: parseInt(schoolId) });
  };

  onSelect = async (selectedKeys, info) => {
    // await this.handleRefetch(selectedKeys[0]);
    console.log(selectedKeys[0]);
  };

  handleChangeYearOne = year => {
    console.log(year);
  };

  handleChangeYearTwo = year => {
    console.log(year);
  };

  render() {
    const { districts, schools } = this.props;
    const data = {
      labels: ["First Grade", "Second Grade", "Third Grade", "Forth Grade"],
      datasets: [
        {
          label: `Number of Students`,
          backgroundColor: `rgb(30, 132, 73)`,
          borderColor: "rgb(255, 99, 132)",
          data: [20, 30, 40, 78]
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
              labelString: "Number of Students"
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
          Schools UNEB Data
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
                          .map(({ name }) => (
                            <TreeNode title={name} key={name} />
                          ))}
                    </TreeNode>
                  ))}
              </TreeNode>
            </Tree>
          </div>
          <div className="col-md-8">
            <div className="col-md-12">
              <YearPicker onChange={this.handleChangeYearOne} />
              <Bar data={data} options={options} />
            </div>
            <div className="col-md-12">
              <YearPicker onChange={this.handleChangeYearTwo} />
              <Bar data={data} options={options} />
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
export default UNEBContent;
