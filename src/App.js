import logo from './logo.svg';
import './App.css';
import './themes.css';
import React, { useEffect, useRef, useState } from 'react';
import { Skeleton, ThemeProvider, Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { GoogleGenerativeAI, DynamicRetrievalMode } from "@google/generative-ai";
import { agentPrompt, schema } from './prompts';
import MetricsContainers from './components/metrics-containers';
import Competitors from './components/competitors';
import Loading from './components/loading';
import LandingScreen from './components/landingScreen';
import MarketSize from './components/marketSize';
import theme from './theme';

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

function App() {
  const [aiJsonResponse, setAiJsonResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [company, setCompany] = useState('ProductPlan');
  const [sizes, setSizes] = useState([]);
  const [years, setYears] = useState([]);

  async function aiRun() {
    setLoading(true);
    console.log(company)
    const model = genAI.getGenerativeModel(
      {
        model: "gemini-1.5-pro",
        generationConfig: {
          temperature: 1.0,
          responseMimeType: "application/json",
          responseSchema: schema,
        },
      }
    );
    const result = await model.generateContent(agentPrompt(company));
    console.log(result)
    const response = await result.response;
    const text = response.text();
    var json = JSON.parse(text);
    json.marketSize.forEach(function(market) {
      console.log(market)
      setSizes(oldSizes => [...oldSizes, market.size]);
      setYears(oldYears => [...oldYears, market.year]);
    })
    setAiJsonResponse(json);
    setLoading(false);
  }

  function captureScreenshot() {
    window.print();
  }


  return (
    <ThemeProvider theme={theme}>
    <div className='App'>
      { loading ? <Loading/> : aiJsonResponse ?
        <>
          <div className='header'>
            <div className='button-container'>
                <Button variant="contained" color='secondary' onClick={()=>captureScreenshot()}>
                  Download
                </Button>
                <Button variant="contained" color='primary' onClick={() => aiRun()}>
                  Generate new analysis
                </Button>
            </div>
          </div>
          <div className='header'>
            <div className='header-text'>
                <h1 style={{textAlign: 'left'}}>Welcome to TrendVision<br /><span style={{fontSize: '40px', fontWeight:'400'}}>Your analysis is ready!</span></h1>
                <p style={{textAlign: 'left'}}>Dive into the latest trends and insights for <b>{company}</b> and discover what’s driving the market and how it could impact your strategy!</p>
            </div>
          </div>
          <div className='overview-container'>
            <div className='overview-item'>
                <h2>Industry Overview</h2>
                <p>{aiJsonResponse.industryOverview}</p>
                <h4>Current Market Trends</h4>
                <ul>
                  {aiJsonResponse.marketTrends.map((trend) =>
                    <li>{trend}</li>
                  )}
                </ul>
            </div>
          </div>
          <MetricsContainers 
            demographics={aiJsonResponse.demographics} 
            behavior={aiJsonResponse.behaviors} 
            socioeconomic={aiJsonResponse.socioeconomic}
            keywords={aiJsonResponse.trendingKeywords}
          />
          <MarketSize sizes={sizes} years={years} />
          <Competitors competitors={aiJsonResponse.competitors} />
        </> : <LandingScreen setCompany={setCompany} aiRun={aiRun}/>
      }
      
      
  </div>
  </ThemeProvider>
  );
}

export default App;
