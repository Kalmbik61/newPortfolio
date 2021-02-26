import React from "react";
import Context from "../../context/contex";

const withLanguage = () => (Wrapped) => {
  return (props) => {
    return (
      <Context.Consumer>
        {(language) => {
          return <Wrapped {...props} language={language} />;
        }}
      </Context.Consumer>
    );
  };
};

export default withLanguage;
