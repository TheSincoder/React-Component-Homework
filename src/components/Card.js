import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        
        component="img"
        height="440"
        image="https://miro.medium.com/proxy/1*pwIgJahIGJcvdeH2q7lxhQ.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="red">
          ReactJS
        </Typography>
        <Typography variant="body2" color="white">
          The Famous Mugatu shares his enthusiasm for React 
          crica 2001
        </Typography>
      </CardContent>
      
    </Card>
  );
}