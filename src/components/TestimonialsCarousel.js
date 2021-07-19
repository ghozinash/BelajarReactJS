import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";

const TestimonialsCarousel = () => {
  return (
    <div className="testimonials-carousel">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
      >
        <div className="carousel-content">
          <img src={avatar1} alt="John A" />
          <div className="carousel-text">
            <h3>John A</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nisi
              repudiandae fugit odit natus. Dolorum.
            </p>
          </div>
        </div>

        <div className="carousel-content">
          <img src={avatar2} alt="John B" />
          <div className="carousel-text">
            <h3>John B</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nisi
              repudiandae fugit odit natus. Dolorum.
            </p>
          </div>
        </div>

        <div className="carousel-content">
          <img src={avatar3} alt="John C" />
          <div className="carousel-text">
            <h3>John C</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nisi
              repudiandae fugit odit natus. Dolorum.
            </p>
          </div>
        </div>

        <div className="carousel-content">
          <img src={avatar4} alt="John D" />
          <div className="carousel-text">
            <h3>John D</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nisi
              repudiandae fugit odit natus. Dolorum.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default TestimonialsCarousel;
