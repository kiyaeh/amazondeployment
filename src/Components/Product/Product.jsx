import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import classes from "./product.module.css";
import axios from "axios";
import Loader from "../Loader/Loader";
function Product() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);

    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch(() => {
        console.log("err");
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {products?.map((singleProduct) => {
            return (
              <ProductCard
                product={singleProduct}
                key={singleProduct.id}
                renderAdd={true}
              />
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product;
