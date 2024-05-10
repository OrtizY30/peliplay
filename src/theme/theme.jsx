import { createTheme } from "@mui/material";

export const theme= createTheme({
  palette: {
    primary: {
      main: '#223042',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#049FF1',
      contrastText: 'rgba(255,255,255,0.87)'
    },
    warning: {
      main: '#ff9800',
    },
    text: {
      primary: 'rgba(255,254,254,0.98)',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#223042',
      paper: '#223042',
    },
    success: {
      main: '#25c72b',
    },
    divider: 'rgba(255,250,250,0)',
  },
});