import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const CarouselComponent = ({ imgs }) => {
  const [state, setstate] = useState({
    indicators: false,
    controls: false,
  });

  return (
    <Carousel indicators={state.indicators} controls={state.control}>
      {imgs.map((item) => {
        return (
          <Carousel.Item key={item.id}>
            <img className="d-block w-100" src={item.img} alt="..." />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselComponent;
