import React from "react";
import { Carousel } from "react-bootstrap";

const AboutCarousel = ({ imgs }) => {
  return (
    <Carousel indicators={false} controls={true}>
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

export default AboutCarousel;
