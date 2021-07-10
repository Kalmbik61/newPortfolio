import React from "react";
import { Carousel } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
const CarouselComponent = ({ imgs }) => {
  return (
    <Carousel indicators={false} controls={false} style={{ cursor: "pointer" }}>
      {imgs.map((item) => {
        return (
          <Carousel.Item key={item.id}>
            {/* <img className="d-block w-100" src={item.img} alt="..." /> */}
            <LazyLoadImage
              className="d-block w-100"
              src={item.img}
              alt="..."
              effect="blur"
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselComponent;
