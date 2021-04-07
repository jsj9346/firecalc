//API 활용 코드 간결화
import React from "react";
import "./styles.css";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import { Route, Switch } from "react-router-dom";
import Drawer from "./Drawer";
import { makeStyles } from "@material-ui/core/styles";
//AppBar 추가
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <AppBar></AppBar>
      <Drawer />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/contact" render={props => <Contact {...props} />} />
        <Route exact path="/about" render={props => <About {...props} />} />
      </Switch>
    </div>
  );
}