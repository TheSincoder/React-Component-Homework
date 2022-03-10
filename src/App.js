import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import AllBooks from './components/AllBooks';
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
import SingleBook from './components/SingleBook';
import Logout from './views/Logout';
import Login from './views/Login';
import BookBrowser from './views/BookBrowser';
import ReadingList from './views/ReadingList';
import { Route, Routes } from 'react-router-dom';
import Book from './components/Book'


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

          
          <Routes>    
          {/* <h1>Rate My Meme Reading List</h1>        */} 
          <Route path="/books" element={<BookBrowser/>}/> 
          <Route path='/books/:bookId' element={<Book/>}/>
          <Route path="/my-list" element={<ReadingList/>}/> 
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          </Routes>    
      </ThemeProvider>
      
    </>
  );
}

export default App;
