import React, { useContext, useEffect} from 'react';
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
import { GraphContext } from '../contexts/GraphContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


function Graph() {

  const { diseasesData, traveldata, travel, setDiseaseList } = useContext(GraphContext);

  const examplearray1 = [{"name":"zack"},{"cat":"fblueish"}]

  const examplearray2 = [{"name":"nick"},{"cat":"red"}]

    const data_sets = datasetCreator(diseasesData)
        
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
            padding: 20
        },
          
        plugins: {
            legend: {
                display: true,
                labels: {
                  font: {
                      size: 14,
                      weight: "bold",
                  }
              }
            },
            title: {
                display: false,
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
      <div className = "border border-popBlue border-4 row-start-2 row-span-2 lg:col-start-3 col-span-5 lg:row-start-2 lg:row-span-4 bg-white mb-8 lg:mr-4">
        <Line options={options} data={data} />
      </div>
  )
}

export default Graph