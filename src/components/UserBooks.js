import React, {useContext} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {AppContext} from '../context/AppContext';




export default function UserBooks() {
    const {bookList} = useContext(AppContext);


  

return (


  <Box  display= 'grid' gap={1} gridTemplateColumns= "repeat(10, 1fr)">
  {/* <ImageList width='30%' > */}
    
    {bookList?.map((book) => (
      <Box gridColumn="span 2">
      <ImageListItem key={book.id}>
        <img
          src={book.img}
          srcSet={book.img}
          alt={book.name}
          loading="lazy"
        />
        <ImageListItemBar
          title={book.author}
          subtitle={book.subject}
          actionIcon={
            <>
            <IconButton
              color='primary'
              aria-label={`remove from reading list`}
            >
              <RemoveCircleOutlineIcon />
            </IconButton>
            
            </>
          }
          
          />
      </ImageListItem>
          </Box>
    ))}
  {/* </ImageList> */}
   </Box>
);
};
