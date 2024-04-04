import React from "react";
import classes from "./catagory.module.css";
//import { imageInfos } from "./CatagoryFullInfo";
import CatagoryCard from "./CatagoryCard";
const Catagory = () => {
  return (
    <section className={classes.category_container}>
      <CatagoryCard
        id="1"
        name="electronics"
        title="Electronics"
        price={11.76}
        rating={3}
        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg"
      />
      <CatagoryCard
        id="2"
        name="men's clothing"
        title="Men's Fashion"
        price={11.76}
        rating={3}
        image="https://m.media-amazon.com/images/I/61vija2so0L._AC_UL320_.jpg"
      />
      <CatagoryCard
        id="3"
        name="women's clothing"
        title="DisCover fashion trends"
        price={11.76}
        rating={3}
        image="https://cdn-img.prettylittlething.com/1/f/d/a/1fda62c61260fda05a00a00910b783a7efac8ad1_cnf1857_1.jpg"
      />
      <CatagoryCard
        id="4"
        name="jewelery"
        title="Jewelery"
        price={11.76}
        rating={3}
        image="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
      />
      ;
      {/* {imageInfos.map(() => {
        console.log(data);
      })} */}
    </section>
  );
};

export default Catagory;
