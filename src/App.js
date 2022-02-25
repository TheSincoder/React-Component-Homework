import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import Card from './components/Card';
import Rate from './components/Rate';
import ButtonGrp from './components/ButtonGrp';
import readingTheme from './themes/readingTheme';

function App() {
  return (
    <>
      <ThemeProvider theme={readingTheme}>
      <h1>Rate My Meme Reading List</h1>
      <Card/>
      <Rate/>
      <ButtonGrp/>
      </ThemeProvider>
      
    </>
  );
}

export default App;
