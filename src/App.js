import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { TextField, ThemeProvider, Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { agentPrompt, schema } from './prompts';

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

const theme = createTheme({
  palette: {
    primary: {
      light: '#ECF6FE',
      main: '#0A6CB9',
      dark: '#0757AA',
      contrastText: '#fff',
    },
    secondary: {
      light: '#414651',
      main: '#414651',
      dark: '#414651',
      contrastText: '#414651',
    },
    tertiary: {
      light: '#000',
      main: '#ECF6FE',
      dark: '#C0E2F9',
      contrastText: '#0A6CB9',
    },
  },
});


function App() {
  const [aiResponse, setAiResponse] = useState('');
  const [industryOverview, setIndustryOverview] = useState('');
  const [marketTrends, setMarketTrends] = useState('');
  const [socioeconomic, setSocioeconomic] = useState('');
  const [keywords, setKeywords] = useState([]);
  const [demographics, setDemographics] = useState('');
  const [behavior, setBehavior] = useState('');
  const [competitors, setCompetitors] = useState([]);

  async function aiRun() {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
      generationConfig: {
        temperature: 1.0,
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    });
    const result = await model.generateContent(agentPrompt);
    const response = await result.response;
    const text = response.text();
    var json = JSON.parse(text);
    console.log(json);
    setDemographics(json['demographics']);
    setBehavior(json['behaviors']);
    setKeywords(json['trendingKeywords']);
    setSocioeconomic(json['socioeconomic']);
    setMarketTrends(json['marketTrends']);
    setIndustryOverview(json['industryOverview']);
    setCompetitors(json['competitors']);
  }


  return (
    <ThemeProvider theme={theme}>
    <div className='App'>
      <div className='header'>
          <div className='header-text'>
              <h1>Welcome!</h1>
              <p>Analyze market trends in your industry through a click of a button.</p>
          </div>
          <div className='button-container'>
              <Button variant="outlined" color="secondary">
                Download
              </Button>
              <Button variant="contained" color="primary" onClick={() => aiRun()}>
                Generate new analysis
              </Button>
          </div>
      </div>
      <div className='overview-container'>
          <div className='overview-item'>
              <h2>Industry Overview</h2>
              <p>{industryOverview}</p>
          </div>
          <div className='overview-item'>
              <h2>Current Market Trends</h2>
              <p>{marketTrends}</p>
          </div>
      </div>
      <div className='metrics-containers'>
          <div className='metric-item'>
              <h2>Demographics</h2>
              <p>{demographics}</p>
              <p><b>Behavior:</b> {behavior}</p>
          </div>
          <div className='metric-item'>
              <h2>Socioeconomic factors</h2>
              <p>{socioeconomic}</p>
          </div>
          <div className='metric-item'>
              <h2>Trending words</h2>
              <ul>
                {keywords.map((keyword) =>
                  <li>{keyword}</li>
                )}
              </ul>
          </div>
      </div>
      <div className='market-container'>
          <h2>Market size</h2>
      </div>
      <div className='competitors'>
          <h2>Competitors</h2>
          <table>
            {competitors.map((competitor) =>
              <tr>{competitor}</tr>
            )}
          </table>
      </div>
  </div>
  </ThemeProvider>
  );
}

export default App;
