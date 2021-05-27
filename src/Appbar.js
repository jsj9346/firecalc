import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import  IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function Appbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"          
          >
            <MenuIcon />
          </IconButton>
        <Typography variant="h5" noWrap>모두를 위한 은퇴계산기</Typography>
      </Toolbar>
    </AppBar>
    

  );
}

export default Appbar;