import React, { Component } from 'react';
import { Window, TitleBar } from 'react-desktop/macOs';
import { Pie } from 'react-chartjs-2';
import SchoolsNodes from './SchoolsNodes';

export default class AcademicsTree extends Component {
  render() {
    const data= {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
        label: "My First dataset",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
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
        <Window
            chrome
            height="75vh"
            padding="10px"
            width="78vw"
        >
            <TitleBar title="A graph showing academics analytics" controls/>
            <div style={{marginTop: '60px', width: '350px'}}>
                <SchoolsNodes />
            </div>

            <div style={{ width: '750px', marginTop: '60px'}}>
                < Pie
                    data={data}
                    options={options}
                />
            </div>  
        </Window>
    )
  }
}
