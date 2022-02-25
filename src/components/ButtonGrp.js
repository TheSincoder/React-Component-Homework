import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>Add Meme to Reading List</Button>
      <Button>I Read This Meme</Button>
      {/* <Button>Remove Meme from Reading List</Button> */}
    </ButtonGroup>
  );
}