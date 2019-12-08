import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

import Bar from '../../components/Bar';

import Router from '../Router';

/*default material-ui theme generation*/
const theme=createMuiTheme();

function App() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Bar />
        <Router />
      </MuiThemeProvider>
    );
}

export default App;
