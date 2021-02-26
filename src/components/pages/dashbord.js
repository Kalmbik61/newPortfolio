import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import Dash_head from "../dashbord/dash-head";
import Dash_nav from "../dashbord/dash-nav";
import Dash_footer from "../dashbord/dash-footer";

const Dashbord = ({ classes, theme, switchTheme }) => {
  const [onMobile, setMobile] = useState({ mobile: false });
  const handleDrawerToggle = () => {
    return setMobile({ mobile: !onMobile.mobile });
  };
  const closeOnMobile = () => {
    return setMobile({ mobile: false });
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        <ListItem>
          <ListItemText>
            <Dash_head />
          </ListItemText>
        </ListItem>
        <Divider />
      </List>
      <List>
        <Dash_nav closeMobile={closeOnMobile} />
      </List>
      <Divider />
      <List>
        <ListItem>
          <Dash_footer switchTheme={switchTheme} />
        </ListItem>
      </List>
    </div>
  );
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{ backgroundColor: "#43A076" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4">
            {/* <a href="https://yandex.ru/uslugi/worker-review/EvgenijP-649182">
                <YandexSvg />
              </a> */}
            <Link to="/adminLogin">
              <Button variant="outline-light">Login</Button>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={onMobile.mobile}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};
export default Dashbord;
