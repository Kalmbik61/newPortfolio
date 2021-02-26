import React, { useState } from "react";
import "./login-main.css";

import wave from "../../images/wave.png";
import pers from "../../images/svg/undraw_personalization_triu.svg";
import profile from "../../images/svg/undraw_profile_pic_ic5t.svg";
const Login_main = () => {
  let classLogin = "wrapper_login d-flex justify-content-between";
  let classPassword = "wrapper_password d-flex justify-content-between";

  const [state, setState] = useState({ login: false, password: false });

  const focusEvent = (e) => {
    const parent = e.target.parentNode.parentNode;
    eventFocusFunction(parent, e);
  };

  const blurEvent = (e) => {
    const parent = e.target.parentNode.parentNode;
    eventBlurFunction(parent, e);
  };

  const eventFocusFunction = (parent, event) => {
    if (parent.className.toLowerCase().includes("wrapper_login")) {
      setState({
        ...state,
        login: true,
      });
    } else if (parent.className.toLowerCase().includes("wrapper_password")) {
      setState({ ...state, password: true });
    }
  };
  const eventBlurFunction = (parent, event) => {
    if (
      parent.className.toLowerCase().includes("wrapper_login") &&
      event.target.value === ""
    ) {
      setState({
        ...state,
        login: false,
      });
    } else if (
      parent.className.toLowerCase().includes("wrapper_password") &&
      event.target.value === ""
    ) {
      setState({
        ...state,
        password: false,
      });
    }
  };
  return (
    <>
      <img src={wave} alt="background" className="img_bg" />
      <div className="wrapper row">
        <div className="wrapper_img col-md-6 col-12">
          <img src={pers} alt="pers" />
        </div>
        <div className="wrapper_form col-md-6 col-12">
          <form action="#">
            <div className="wrapper_avatar">
              <img src={profile} alt="avatar" />
            </div>
            <div className="wrapper_title">
              <h4 className="display-4">Welcome home</h4>
            </div>
            <div className={state.login ? classLogin + " focus" : classLogin}>
              <div className="i com-md-1">
                <i className="fas fa-user" />
              </div>
              <div className="login col-md">
                <h5>UserName</h5>
                <input
                  type="text"
                  name="login"
                  onFocus={focusEvent}
                  onBlur={blurEvent}
                />
              </div>
            </div>
            <div
              className={
                state.password ? classPassword + " focus" : classPassword
              }
            >
              <div className="i com-md-1">
                <i className="fas fa-lock" />
              </div>
              <div className="password col-md">
                <h5>Password</h5>
                <input
                  type="password"
                  name="password"
                  onFocus={focusEvent}
                  onBlur={blurEvent}
                />
              </div>
            </div>
            <input type="submit" className="btn_form" value="Login" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login_main;
