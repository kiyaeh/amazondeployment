import React from "react";
import classes from "./catagory.module.css";
import { Link } from "react-router-dom";
function CatagoryCard({ id, price, rating, image, title, name }) {
  //console.log(data && data.title);
  return (
    <div className={classes.catagory}>
      {/* <Link to={`/category/${name}`}> */}
      <Link>
        <span>
          <h2>{title}</h2>
        </span>
        <img src={image} alt="" />
        <p>Shop Now</p>
      </Link>
    </div>
  );
}

export default CatagoryCard;
