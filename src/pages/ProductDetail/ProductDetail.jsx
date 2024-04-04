import React, { useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import axios from "axios";
import { useParams } from "react-router-dom";
import { productUrl } from "../../API/endpoints";
import { useEffect } from "react";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";
function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}products/${productId}`)

      .then((res) => {
        console.log(productId);
        console.log(res);
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);

        setIsLoading(false);
      });
  }, []);
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renderAdd={true}
          renderDisc={true}
        />
      )}
    </LayOut>
  );
}

export default ProductDetail;
