import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
  interface Palette {
    custom: {
      primary: string;
      secondary: string;
      danger: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      primary?: string;
      secondary?: string;
      danger?: string;
    };
  }
}

export const createCustomTheme = (mode: PaletteMode = 'light') => createTheme({
  palette: {
    mode,
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    custom: {
      primary: '#1976d2',
      secondary: '#dc004e',
      danger: '#f44336',
    },
  },
  status: {
    danger: mode === 'light' ? '#ff0000' : '#ff4444',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});