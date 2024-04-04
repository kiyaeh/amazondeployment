import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import classes from "./results.module.css";
import axios from "axios";
//import { productUrl } from "../../API/endpoints";
import ProductCard from "../../Components/Product/ProductCard";
function Results() {
  const [results, setResults] = useState();
  const { catagoryName } = useParams();
  console.log(useParams);
  useEffect(() => {
    axios
      .get(`${productUrl}/product/category/${catagoryName}`)
      .then((res) => {
        console.log(res);
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Catogory/{catagoryName}</p>
        <hr />
        {
          <div className={classes.pro_container}>
            {results?.map((product) => {
              <ProductCard
                key={product.id}
                product={product}
                renderDisc={false}
                renderAdd={true}
              />;
            })}
          </div>
        }
      </section>
    </LayOut>
  );
}

export default Results;
