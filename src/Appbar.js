import React from 'react';
import { makeSyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Appbar() {
  return (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">모두를 위한 은퇴계산기</Typography>
      </Toolbar>
    </AppBar>
  </div>
  );
}

export default Appbar;