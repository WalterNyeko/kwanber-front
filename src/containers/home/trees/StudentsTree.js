import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import SchoolsNodes from './SchoolsNodes';

export default class StudentsTree extends Component {
  render() {
    const data= {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
        label: "My First dataset",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [4, 10, 5, 2, 20, 30, 45],
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
            <div style={{ float: 'left', marginTop: '50px'}}>
                <SchoolsNodes />
            </div>
            <div style={{ float: 'right', width: '700px', marginTop: '40px'}}>
                <Line 
                    data={data}
                    options={options}
                />
            </div>
        </>
    )
  }
}
