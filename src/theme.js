import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    body1: {
      fontFamily: 'Poppins',
    },
    body2: {
      fontFamily: 'Poppins',
    },
    h3: {
      fontFamily: 'Poppins',
      fontWeight: '900',
      fontSize: '3rem',
    },
    h4: {
      fontFamily: 'Poppins',
      fontWeight: '700',
    },
    h5: {
      fontFamily: 'Poppins',
      fontWeight: '800',
    },
    h6: {
      fontFamily: 'Poppins',
      fontWeight: '500',
      fontSize: '16px',
    },
    subtitle1: {
      fontFamily: 'Poppins',
      fontWeight: '700',
    },
  },
});

export default theme;
