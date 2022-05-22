import React from "react";
import "./Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <div className="carouselContainer">
      <Carousel infiniteLoop autoPlay>
        <div className="image">
          <img
            src="https://res.cloudinary.com/dqexqyy2j/image/upload/v1653248414/surf%20boards/jeremy-bishop-_CFv3bntQlQ-unsplash_vomxfv.jpg"
            alt="surfimage1"
          />
        </div>
        <div className="image">
          <img
            src="https://res.cloudinary.com/dqexqyy2j/image/upload/v1653248414/surf%20boards/austin-neill-uHD0uyp79Dg-unsplash_mtclze.jpg"
            alt="surfimage2"
          />
        </div>
        <div className="image">
          <img
            src="https://res.cloudinary.com/dqexqyy2j/image/upload/v1653248414/surf%20boards/zachary-shea-MAFUZ8Nh7XQ-unsplash_odfnxa.jpg"
            alt="surfimage3"
          />
        </div>
        <div className="image">
          <img
            src="https://res.cloudinary.com/dqexqyy2j/image/upload/v1653250780/surf%20boards/lacie-slezak-7yqyQQXgOT8-unsplash_kgnle9.jpg"
            alt="surfimage4"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
