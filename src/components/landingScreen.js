import '../themes.css';
import '../App.css';
import React, { useEffect, useRef, useState } from 'react';
import { TextField, Button } from '@mui/material';



function LandingScreen({setCompany, aiRun}) {

  return (
    <div className='landing'>
        <div className='landing-text'>
            <h1 style={{fontSize: 60}}>Welcome to TrendVision: Your Market Insights Hub!</h1>
            <p>Unlock the power of data analysis—input a company name below to start uncovering the latest market trends and insights tailored just for you using generative AI!</p>
        </div>
        <div className='button-container'>
            <TextField 
                id="outlined-basic" 
                variant="outlined" 
                placeholder='e.g. Nike, Google, Playstation, Amazon'
                style={{width: '50%'}}
                onChange={(event) => { setCompany(event.target.value); }}/>
            <Button variant="contained" className='button-primary' onClick={() => aiRun()}>
            Generate analysis
            </Button>
        </div>
    </div>
  );
}

export default LandingScreen;
