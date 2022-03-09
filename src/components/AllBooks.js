import React, {useContext} from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { getBooks } from '../api/apiBook';
// import apiClientNoAuth from '../api/clientNoAuth'
import {AppContext} from '../context/AppContext';

import AddBoxIcon from '@mui/icons-material/AddBox';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import useBooks from '../hooks/useGetBooks'






export default function AllBooks({item}) {
    const {books} = useBooks()
    const {addToList} = useContext(AppContext);

    const handleAddToList =(item)=>{
        addToList(item)
      };
  
  return (


    <Box  display= 'grid' gap={1} gridTemplateColumns= "repeat(10, 1fr)">
    {/* <ImageList width='30%' > */}
      
      {books?.map((book) => (
        <Box key={book.id} gridColumn="span 2">
        <ImageListItem >
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
                aria-label={`add to reading list`}
                onClick={()=>{handleAddToList(item)}}
              >
                <AddBoxIcon />
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















    // <Card sx={{ height:"100%" }}>
    //   <CardMedia        
    //             component="img"
    //             height="440"
    //             image='aBook.img'
    //             alt="book cover"
    //             />
    //   <CardContent>
    //     <Typography variant="h5" color="text.secondary" gutterBottom>
    //       {aBook.title}
    //     </Typography>

    //     <Typography variant="caption" color="text.secondary">
    //       {aBook.author}
    //     </Typography>
    //     <Typography variant="caption" color="text.secondary">
    //       ${aBook.subject}
    //     </Typography>
       
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Add to Reading List</Button>
    //   </CardActions>
    // </Card>
//   );
// };