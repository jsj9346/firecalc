import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import userScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';

//https://codesandbox.io/s/scn9n?file=/demo.js:723-808 -> Scroll to Elevate App Bar

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
  return React.cloneElement(children, {elevation:trigger  4 : 0,});
}

ElevationScroll.propTypes = {
  children:PropTypes.element.isRequired,
  windows: PropTypes.func,
}

export default function ElevateAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">모두를 위한 은퇴계산기</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
        <Box my={2}>
          
        </Box>
      </Container>
    </React.Fragment>

  )
}
  
