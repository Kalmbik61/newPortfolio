import React, { Component } from "react";
import { Button } from "react-bootstrap";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NoteIcon from "@material-ui/icons/Note";
import { Link } from "react-router-dom";

export default class Service_prise_head extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="descr col-md text-center">
            <h1> Услуги и цены</h1>
            <p>
              Занимаюсь Web разработкой уже около 2 лет. Вы можете ознакомиться
              с работами в моем портфолио . А так же больше узнать о моих
              "скилах" в разделе обо мне .
            </p>
            <div className="buttons m-5 row justify-content-center">
              <div className="col-auto m-3">
                <Link to="/portfolio">
                  <Button variant="outline-info ">
                    <ExitToAppIcon style={{ marginRight: "0.5rem" }} />
                    Портфолио
                  </Button>
                </Link>
              </div>
              <div className="col-auto m-3">
                <Link to="/">
                  <Button variant="outline-success">
                    <NoteIcon style={{ marginRight: "0.5rem" }} />
                    Обо мне
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
