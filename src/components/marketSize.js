import '../App.css';
import React, { useEffect, useRef, useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

function MarketSize({sizes, years}) {
  console.log('sizes: ', sizes)
  console.log('years: ', years)
  return (
    <div className='competitors'>
      <h2>Market size over time</h2>
      <LineChart
        style={{width: '100%'}}
        xAxis={[{
          data: years,
          dataKey: 'year',
          valueFormatter: (value) => value.toString(),
          min: years[0],
          max: years[years.length - 1],
          tickMinStep: 1, 
          scaleType: 'point'
        }]}
        series={[{ data: sizes, color: '#009b8c' }]}
        height={300}
        margin={{ left: 100 }}
      />
    </div>
  );
}

export default MarketSize;
