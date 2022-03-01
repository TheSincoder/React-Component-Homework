import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import Card from './components/Card';
import Rate from './components/Rate';
import ButtonGrp from './components/ButtonGrp';
import Button from './components/Button';
import readingTheme from './themes/readingTheme';
import {getBooks } from './api/apiBook';
import {getLogin } from './api/apiLogin';
import {postUser } from './api/apiUser';
import {CancelToken} from 'apisauce';

const handleClick= async () =>{
  
  const source = CancelToken.source();
  // const response_object = getBooks(source.token);
  const response_object = await getLogin('cmail@mail.com','a',source.token);
  console.log(response_object)
}


function App() {
  return (
    <>
      <ThemeProvider theme={readingTheme}>
      <Button onClick={handleClick}>Do API Call</Button>
      <h1>Rate My Meme Reading List</h1>
      <Card/>
      <Rate/>
      <ButtonGrp/>
      </ThemeProvider>
      
    </>
  );
}

export default App;
