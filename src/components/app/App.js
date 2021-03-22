import React from "react";
import Loader from "../loader/loader";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ScrollToTop from "../scrollToTop/scrollToTop";
import Login from "../pages/login_page";
import Dashbord from "../pages/dashbord";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// REDUX
import { connect } from "react-redux";
import { switchTheme } from "../../actions/actions";
//Context
import Context from "../../context/contex";
import Service from "../../service/servise";

// loadable component for lazy loading
import loadable from "@loadable/component";

import "./App.css";

const About = loadable(() => import("../pages/about"), {
  fallback: <Loader />,
});
const Portfolio = loadable(() => import("../pages/portfolio"), {
  fallback: <Loader />,
});
const Service_page = loadable(() => import("../pages/service_page"), {
  fallback: <Loader />,
});
const Resume_page = loadable(() => import("../pages/resume_page"), {
  fallback: <Loader />,
});
const Contacts_page = loadable(() => import("../pages/contacts_page"), {
  fallback: <Loader />,
});
const AdditionalPage = loadable(() => import("../pages/additionalPage"), {
  fallback: <Loader />,
});
const DemoPage = loadable(() => import("../pages/demoPage"), {
  fallback: <Loader />,
});
const CovidTracker = loadable(
  () => import("../demoViewProjects/covidTracker/CovidTracker"),
  {
    fallback: <Loader />,
  }
);
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
  const { themePage } = reducer;
  const themeChanging = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: themePage,
        },
      }),
    [themePage]
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
              <Route path="/additional" component={AdditionalPage} />
              <Route path="/demoPage" component={DemoPage} />
              <Route path="/:name" component={CovidTracker} />
            </Switch>

            <div className="text-center mt-5">
              <p className="text-muted m-0">
                Created by{" "}
                <strong>
                  <a href="https://www.instagram.com/kalmbik61">Kalmbik61</a>
                </strong>
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
