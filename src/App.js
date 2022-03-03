import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import Card from './components/Card';
import Rate from './components/Rate';
import ButtonGrp from './components/ButtonGrp';
import Button from './components/Button';
import readingTheme from './themes/readingTheme';
// import {getBooks } from './api/apiBook';
import {getLogin } from './api/apiLogin';
// import {postUser } from './api/apiUser';
import { putUser } from './api/apiUser';
import {CancelToken} from 'apisauce';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
// import { deleteUser } from './api/apiUser';
import NavBar from './components/NavBar';

let a_token = '_ZNtMUTX6IXliOKN4rR7NRcl13u4vY7ipnhgmCrW9sI'

const handleClick = async () => {
  const source = CancelToken.source();
  // const response_object = await getBooks(source.token);
  // const response_object = await postUser('hello@email.com', 'Hel', 'Lo','abc',source.token);
  // const response_object = await getLogin('hello@email.com','abc',source.token);
  const response_object = await putUser(a_token,{password:'abc'},source.token);
  // const response_object = await deleteUser(a_token,source.token);
  console.log(response_object)
}


function App() {
  return (
    <>
      <ThemeProvider theme={readingTheme}>
        <NavBar/>
        
          {/* <LoginForm/>
          <RegisterForm/> */}
          {/* <Button onClick={handleClick}>Do API Call</Button> */}
          <h1>Rate My Meme Reading List</h1>
          <Card/>
          {/* <Rate/> */}
          {/* <ButtonGrp/> */}
      </ThemeProvider>
      
    </>
  );
}

export default App;
