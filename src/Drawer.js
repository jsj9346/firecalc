import React from "react";
import {Drawer as MUIDrawer, ListItem, List, ListItemIcon, ListItemText} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";
import InfoIcon from '@material-ui/icons/Info';
import AppsIcon from '@material-ui/icons/Apps';
import { withRouter } from "react-router-dom";
import Divider from "@material-ui/core/Divider";

const drawerWidth = 240;

const useStyles = makeStyles({
  drawer: {
    width: "190px"
  }
});

const Drawer = props => {
  const { history } = props;
  const classes = useStyles();
  const itemsList = [
    {
      text: "Dashboard",
      icon: <AppsIcon />,
      onClick: () => history.push("/")
    },
    {
      text: "About Us",
      icon: <InfoIcon />,
      onClick: () => history.push("/about")
    },
    {
      text: "Contact Us",
      icon: <MailIcon />,
      onClick: () => history.push("/contact")
    }
  ];
  return (    
    <MUIDrawer
     variant="permanent"
     className={classes.drawer}
     classes={{paper: classes.drawerPaper,}}
     anchor="left"
     >
      <Divider />
        <List>
          {itemsList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      <Divider />
    </MUIDrawer>
  );
};

export default withRouter(Drawer);