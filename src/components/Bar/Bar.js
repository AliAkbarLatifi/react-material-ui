import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Bar() {
  return (
    <AppBar color="primary" position="static">
      <Toolbar variant="regular">
        <Box display="flex" flexGrow={1}>
          <Typography style={{ cursor: 'pointer' }} color="inherit" variant="h6">{process.env.REACT_APP_NAME}</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}


export default Bar;
