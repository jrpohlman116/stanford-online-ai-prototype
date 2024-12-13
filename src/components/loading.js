import '../App.css';
import React, { useEffect, useRef, useState } from 'react';
import analyzeIcon from '../analyze-icon.png';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import CircularProgress from '@mui/material/CircularProgress';



function Loading() {
    const [loadingPhase, setLoadingPhase] = React.useState(1);
    const hasLoadedBefore = useRef(true);

    useEffect(()=> {
        if(hasLoadedBefore.current){
            let intervalId = setInterval(() => {
                setLoadingPhase((prevPhase) => prevPhase+1)
            }, 5000);

            // Stop the interval after 5 seconds
            setTimeout(() => {
                clearInterval(intervalId);
            }, 60000);
            hasLoadedBefore.current = false;
        }
      }, [])
    
  
    return (
        <div className='loading-container'>
            <img src={analyzeIcon} width='25%' />
            {loadingPhase > 0 ?
                <Box style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16}}>
                    <Fade
                        in={loadingPhase == 1}
                        out={loadingPhase > 1}
                        style={{
                            transitionDelay: loadingPhase >= 0 ? '800ms' : '0ms'
                        }}
                        unmountOnExit
                    >
                        <CircularProgress size={15}/>
                    </Fade>
                    <p>Tuning into the market waves... </p>
                </Box> : null 
            }
            {loadingPhase > 1 ?
                <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                    <Fade
                        in={loadingPhase == 2}
                        out={loadingPhase > 2}
                        style={{
                            transitionDelay: loadingPhase > 1 ? '800ms' : '0ms',
                        }}
                        unmountOnExit
                    >
                        <CircularProgress size={15}/>
                    </Fade>
                    <p>Sifting through data to find your golden nuggets...</p>
                </Box> : null 
            }
            {loadingPhase > 2 ?
                <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                    <Fade
                        in={loadingPhase == 3}
                        out={loadingPhase > 3}
                        style={{
                            transitionDelay: loadingPhase > 2 ? '800ms' : '0ms',
                        }}
                        unmountOnExit
                    >
                        <CircularProgress size={15}/>
                    </Fade>
                    <p>Transforming data into actionable trends... Almost there!</p>
                </Box> : null 
            }
            {loadingPhase > 3 ?
                <Box  style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                    <Fade
                        in={loadingPhase == 4}
                        out={loadingPhase > 4}
                        style={{
                            transitionDelay: loadingPhase > 3 ? '800ms' : '0ms',
                        }}
                        unmountOnExit
                    >
                        <CircularProgress size={15}/>
                    </Fade>
                    <p>Insights loaded! Time to conquer the market!</p>
                </Box> : null 
            }
        </div>
    );
}

export default Loading;
