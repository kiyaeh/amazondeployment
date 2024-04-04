import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Allimg } from "./images/data";

import classes from "./carousal.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoplay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {Allimg.map((imageItemLink, index) => {
          return <img src={imageItemLink} key={index} />;
        })}
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  );
}

export default CarouselEffect;
