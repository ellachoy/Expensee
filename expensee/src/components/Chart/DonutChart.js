import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './DonutChart.scss'
// import { useEffect, useState } from 'react';
// import axios from 'axios';

const DoughnutChart = () => {

  return (
    <div className='chart'>
        <div className="konto"> 
        {/* hier kommt der Kontostand hin  */}
            40.000€ 
        </div>
      <div className='chartText'>
      </div>
      <Doughnut
      
        data={{
          labels: ['Einkommen', 'Ausgaben', 'Sparen', 'Sonstiges'],
          datasets: [
            {
              label: '# of votes',
              data: [30,30,30,30],
              backgroundColor: [
                'rgba(246, 53, 53, 1)',
                'rgba(81, 95, 235, 1)',
                'rgba(247, 199, 53, 1)',
                'rgba(149, 152, 154, 1)',
              ],
              borderWidth: 0,
              weight:17,
              radius:120,
            },      
          ],
          hoverOffset: 4
        }}
        width={'20'}
	    height={'20'}
      
        options={{  
          plugins: {
            tooltip: {
              enabled: false,
            },
            legend: {
              position: 'bottom',
              labels: {
                color: '#ffffff',
                usePointStyle: true,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default React.memo(DoughnutChart);
