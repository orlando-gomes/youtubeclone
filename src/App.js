import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// import Routes from './Routes';
import MainPage from './pages/MainPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const globalTheme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: darkMode ? '#3ea6ff' : '#00f',
      },
      background: {
        default: darkMode ? '#232323' : '#fff',
        dark: darkMode ? '#181818' : '#f4f6f8',
        paper: darkMode ? '#232323' : '#fff',
      },
    },
  });

  return (
    <ThemeProvider theme={globalTheme}>
      <CssBaseline />
      <BrowserRouter>
        <MainPage darkMode={darkMode} setDarkMode={setDarkMode} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
