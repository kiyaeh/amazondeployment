import LayOut from "../../Components/LayOut/LayOut";
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../utility/firebase";
import classes from "./order.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
function Orders() {
  const [orders, setorders] = useState([]);
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          console.log(snapshot);
          setorders(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          );
        });
    } else {
      setorders([]);
    }
  }, []);

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.order_container}>
          <h2>your orders</h2>
          {orders?.length == 0 && (
            <div style={{ padding: "20px" }}> you dont have orders yet</div>
          )}
          <div>
            {orders?.map((eachOrder, i) => {
              return (
                <div key={i}>
                  <hr />
                  <p>Order ID:{eachOrder?.id}</p>
                  {eachOrder?.data?.basket?.map((order) => {
                    return (
                      <ProductCard flex={true} product={order} key={order.id} />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
