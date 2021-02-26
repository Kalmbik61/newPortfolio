import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ScrollToTop from "../scrollToTop/scrollToTop";
import Login from "../pages/login_page";
import Dashbord from "../pages/dashbord";
import About from "../pages/about";
import Portfolio from "../pages/portfolio";
import Service_page from "../pages/service_page";
import Resume_page from "../pages/resume_page";
import Contacts_page from "../pages/contacts_page";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// REDUX
import { connect } from "react-redux";
import { switchTheme } from "../../actions/actions";
//Context
import Context from "../../context/contex";
import Service from "../../service/servise";

import "./App.css";

const servise = new Service();
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App({ switchTheme, reducer, langReducer }) {
  const themeChanging = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: reducer.themePage,
        },
      }),
    [reducer.themePage]
  );

  const classes = useStyles();
  const theme = useTheme();

  return (
    <Context.Provider value={langReducer}>
      <ThemeProvider theme={themeChanging}>
        <ScrollToTop />
        <div className={classes.root}>
          <CssBaseline />
          <Dashbord theme={theme} classes={classes} switchTheme={switchTheme} />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Route path="/adminLogin" component={Login} />
              <Route path="/" exact component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/service" component={Service_page} />
              <Route path="/resume" component={Resume_page} />
              <Route path="/contacts" component={Contacts_page} />
            </Switch>

            <div className="text-center mt-5">
              <p className="text-muted m-0">
                Created by <strong>Kalmbik61</strong>
              </p>
            </div>
          </main>
        </div>
      </ThemeProvider>
    </Context.Provider>
  );
}

const mapStateToProps = ({ reducer, langReducer }) => {
  return { reducer, langReducer };
};
const mapDispatchToProps = { switchTheme };

export default connect(mapStateToProps, mapDispatchToProps)(App);
