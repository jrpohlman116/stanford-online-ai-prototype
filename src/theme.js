import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: false,
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#003366', // Deep Blue
          light: '#005b8c', // Lightened Deep Blue for accessibility
          dark: '#001f4d', // Darkened Deep Blue
          contrastText: '#FFFFFF', // White
        },
        secondary: {
          main: '#00c6be', // Teal
          light: '#33d9d0', // Light Teal for accessibility
          dark: '#009b8c', // Dark Teal
          contrastText: '#FFFFFF', // White
        },
        error: {
          main: '#f44336', // Error color
        },
        warning: {
          main: '#FFEB3B', // Soft Yellow
          contrastText: '#000000', // Black
        },
        info: {
          main: '#198580', // Dark Teal
          contrastText: '#FFFFFF', // White
        },
        success: {
          main: '#00c6be', // Teal
          contrastText: '#FFFFFF', // White
        },
        background: {
          default: '#F5F5F5', // Light Gray
          paper: '#FFFFFF', // White
        },
        text: {
          primary: '#000000', // Black
          secondary: '#334b49', // Dark Grayish Teal
        },
        gradient:
          'linear-gradient(to left, #003366, #00c6be)', // Gradient from Deep Blue to Teal
        border: {
          subtle: '#E0E0E0', // Warm Gray Light
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#00c6be', // Teal
          light: '#33d9d0', // Light Teal
          dark: '#009b8c', // Dark Teal
          contrastText: '#FFFFFF', // White
        },
        secondary: {
          main: '#003366', // Deep Blue
          light: '#005b8c', // Lightened Deep Blue
          dark: '#001f4d', // Darkened Deep Blue
          contrastText: '#FFFFFF', // White
        },
        error: {
          main: '#f44336', // Error color
        },
        warning: {
          main: '#FFEB3B', // Soft Yellow
          contrastText: '#000000', // Black
        },
        info: {
          main: '#198580', // Dark Teal
          contrastText: '#FFFFFF', // White
        },
        success: {
          main: '#00c6be', // Teal
          contrastText: '#FFFFFF', // White
        },
        background: {
          default: '#334b49', // Dark Grayish Teal
          paper: '#1a1a1a', // Dark Paper Color
        },
        text: {
          primary: '#FFFFFF', // White
          secondary: '#00c6be', // Teal
        },
        gradient:
          'linear-gradient(to left, #00c6be, #003366)', // Gradient from Teal to Deep Blue
        border: {
          subtle: '#78909C', // Warm Gray Dark
        },
      },
    },
  },
});

export default theme;