import React from "react";
import LayOut from "../../Components/LayOut/LayOut";
import CarouselEffect from "../../Components/carousal/CarousalEffect";
import Catagory from "../../Components/catagory/Catagory";
import Product from "../../Components/Product/Product";
export default function LandingPage() {
  return (
    <LayOut>
      <CarouselEffect />
      <Catagory />
      <Product />
    </LayOut>
  );
}
