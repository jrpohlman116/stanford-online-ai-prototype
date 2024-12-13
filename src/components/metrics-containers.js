import '../App.css';
import React, { useEffect, useRef, useState } from 'react';
import { TextField, ThemeProvider, Button } from '@mui/material';



function MetricsContainers({demographics, behavior, socioeconomic, keywords}) {
  return (
      <div className='metrics-containers'>
          <div className='metric-item' style={{alignSelf: 'stretch'}}>
              <h3>Demographics</h3>
              <p><b>Age:</b> {demographics.age}</p>
              <p><b>Location:</b> {demographics.location}</p>
              <p><b>Occupation:</b> {demographics.occupation}</p>
              <p><b>Behavior:</b> {behavior}</p>
          </div>
          <div className='metric-item' style={{alignSelf: 'stretch'}}>
              <h3>Socioeconomic factors</h3>
              <p>{socioeconomic}</p>
          </div>
          <div className='metric-item' style={{alignSelf: 'stretch'}}>
              <h3>Trending words</h3>
              <ul>
                {keywords.map((keyword) =>
                  <li>{keyword}</li>
                )}
              </ul>
          </div>
      </div>
  );
}

export default MetricsContainers;
