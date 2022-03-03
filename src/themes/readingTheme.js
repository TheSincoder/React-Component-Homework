import { createTheme } from '@mui/material/styles';

export const themeOptions = {
    palette: {
      type: 'dark',
      primary: {
        main: '#851010',
      },
      secondary: {
        main: '#48494B',
      },
      background: {
        default: '#000000',
        paper: '#1e1e1e',
      },
      error: {
        main: '#ff3400',
      },
      warning: {
        main: '#ffdd00',
      },
      info: {
        main: '#01d2ab',
      },
    },
  };

const theme = createTheme(themeOptions);
  
export default theme