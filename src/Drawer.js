import React from "react";
import {Drawer as MUIDrawer, ListItem, List, ListItemIcon, ListItemText} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from '@material-ui/core/Toolbar';
import MailIcon from "@material-ui/icons/Mail";
import InfoIcon from '@material-ui/icons/Info';
import AppsIcon from '@material-ui/icons/Apps';
import { withRouter } from "react-router-dom";
import Divider from "@material-ui/core/Divider";

const drawerWidth = 190; // 요 width 값은 아래 스타일에 있던 값으로 수정해줬습니다/.

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,   // 하드코딩 돼있던 값 참조하게 바꿔줬구요
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
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
      <Toolbar />
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