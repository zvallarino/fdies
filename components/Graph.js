import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { datasetCreator } from './Functions'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


function Graph({diseases}) {

    const data_sets = datasetCreator(diseases)

          
      const data = {
        datasets: data_sets
      }
    
      const options = {
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
          },
          layout: {
            padding: {
                top: 0
            }
        },
          
        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: true,
                text: 'Infection Disease Chart'
            },
        },
        elements: { 
            line: {
                tension: 0,
                borderWidth:2, 
                borderColor: "rgba(47,97,68, 1)",
                fill: "start", 
                backgroundColor: "rgba(47,97,68,0.3", 
            }, 
            point:{
                radius:0,
                hitRadius:0,
            },
        },
        scales:{
            xAxis: {
                display:true, 
            },
            yAxis: {
                display:true,
            }
        }
      }
    
  return (
    <Line options={options} data={data} />
  )
}

export default Graph