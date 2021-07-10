import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
