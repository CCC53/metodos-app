import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { GraphProps } from '../../types/ui';
ChartJS.register(...registerables);

export const LineGraph = ({ data, title }: GraphProps) => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  const dataGraph = {
    labels: [...data.xi],
    datasets: [
      {
        label: 'Posible grafica',
        data: [...data.fi],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div className="graphicsContainer main-container">
        <Line options={options} data={dataGraph}/>
    </div>
  )
}
