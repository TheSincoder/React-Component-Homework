import React, {useEffect, useState, useContext} from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import useSingleBook from '../hooks/useSingleBook';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';



  
  export default function MyBook() {      
      // get the query parameter
      const {bookId} = useParams();
      // use that to look up info on 1 book
    const {book} = useSingleBook(bookId);
   
    
    // if(!book){
    //     //centered the fuck out of it
    //     <Box sx={{display:'flex', width:'100%', height: '100%', alignItems: 'center', justifyItems: 'center', alignContent:'center', justifyContent: 'center'}}>
    //         <CircularProgress/>
    //     </Box>
    // }
    

  return (
    

      
      <>
        <Box key={book?.id} sx={{display:'flex', alignItems: 'center', justifyItems: 'center', alignContent:'center', justifyContent: 'center', my:2}}>
        <ImageListItem >
          <img
            src={book?.img}
            srcSet={book?.img}
            alt={book?.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={book?.author}
            subtitle={book?.subject}
            
            
            />
        </ImageListItem>
            </Box>
            <Box  sx={{display:'flex', alignItems: 'center', justifyItems: 'center', alignContent:'center', justifyContent: 'center'}}>

                {book?.summary}
            </Box>
            </>

     
  )
};
