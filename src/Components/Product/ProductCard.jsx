import React, { useContext } from "react";
//import classes from "./product.module.css";
import classes from "./product.module.css";
import { Type } from "./../../utility/action.type";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { DataContext } from "../DataProvider/DataProvider";

function ProductCard({ product, flex, renderDisc, renderAdd }) {
  const { image, title, id, rating, price, description } = product;

  const [state, dispatch] = useContext(DataContext);
  console.log(state);
  const addtoCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, rating, price, description },
    });
  };
  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      } `}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </Link>
      <div>
        <div>
          <h3>{title}</h3>
          {renderDisc && <div style={{ maxWidth: "750px" }}>{description}</div>}
          <div className={classes.rating}>
            <Rating value={rating?.rate} precision={0.1} />
            <small>{rating?.count}</small>
          </div>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && (
          <button className={classes.button} onClick={addtoCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
