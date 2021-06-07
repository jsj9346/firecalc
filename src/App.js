import React from "react";
import "./styles.css";
import Dashboard from "./Dashboard";
import Contact from "./Contact";
import About from "./About";
//Drawer import
import Drawer from "./Drawer";
//Appbar import
import Appbar from './Appbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function App() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Appbar />
      <Drawer />
      <main className={classes.content}>
        <Switch>
          <Route exact from="/" render={props => <Dashboard {...props} />} />
          <Route exact path="/contact" render={props => <Contact {...props} />} />
          <Route exact path="/about" render={props => <About {...props} />} />
        </Switch>
      </main>
    </div>
  );
}