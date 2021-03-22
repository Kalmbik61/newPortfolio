import React from "react";
import { Spinner } from "reactstrap";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "transparent",
      }}
    >
      <Spinner
        color="success"
        style={{
          width: "3rem",
          height: "3rem",
          position: "absolute",
          top: "40%",
          left: "40%",
          zIndex: 3,
        }}
      />
    </div>
  );
};

export default Loader;
