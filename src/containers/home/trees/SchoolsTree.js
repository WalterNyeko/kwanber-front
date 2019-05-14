import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import Typography from '@material-ui/core/Typography';
import SchoolsNodes from './SchoolsNodes';

export default class SchoolsTree extends Component {
  render() {
    const data= {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
        label: "My First dataset",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [9, 10, 5, 2, 20, 30, 45],
        }]
    };

    const options = {
        annotation: {
            annotations: [{
                drawTime: 'afterDatasetsDraw',
                borderColor: 'red',
                borderDash: [2, 2],
                borderWidth: 2,
                mode: 'vertical',
                type: 'line',
                value: 10,
                scaleID: 'x-axis-0',
            }]
        },
        maintainAspectRation: false
    };
    return (
        <>
        <div className="row">
            <div className="col-md-4">
                <SchoolsNodes />            
            </div>
            <div className="col-md-8">
                <Bar 
                    data={data}
                    options={options}
                />
            </div>

        </div>
            
            <footer>
                <Typography variant="h6" align="center" gutterBottom>
                    Kwan Ber Initiative
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    This is an app designed to support the education system in Acholi Sub Region
                </Typography>
            </footer>
        </>
    )
  }
}
