import React, { useContext, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./payment.module.css";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { axiosInstance } from "../../API/axios";
import Productcard from "../../Components/Product/ProductCard";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Key } from "@mui/icons-material";
import { ClipLoader } from "react-spinners";
import { db } from "../../utility/firebase";
import { useNavigate } from "react-router-dom";
import { Type } from "../../utility/action.type";
function Payment() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  console.log(basket.length);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  const [cardError, setCardError] = useState(null);
  const [processing, setprocessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const handleChange = (e) => {
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const handelPayment = async (e) => {
    e.preventDefault();

    // 1 backend or function   contact to the client secret
    try {
      setprocessing(true);
      const response = await axiosInstance({
        method: "POST",
        url: `payments/create?total=${total * 100}`,
      });
      console.log(response.data);
      const clientSecret = response.data?.clientSecret;
      //2 client side or react side confiremation
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      console.log(paymentIntent);
      setprocessing(false);
      // 3 after the confiremation  order firestore database save then clear the basket
      await db
        .collection("users")
        .doc(user?.uid)
        .collection("orders")
        .doc(paymentIntent?.amount.toString())
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
      // empty the basket
      dispatch({ type: Type.EMPTY_BASKET });
      setprocessing(false);
      navigate("/orders", { state: { msg: "you have placed now order" } });
    } catch (error) {
      console.log(error);
      setprocessing(false);
    }
  };
  return (
    <LayOut>
      <div className={classes.header}>Checkout({totalItem})</div>
      <section className={classes.payment}>
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>ethiopiaw</div>
            <div>zeway</div>
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <Productcard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3> Payment methods</h3>
          <div className={classes.paycard}>
            <div className={classes.payment_detail}>
              <form onSubmit={handelPayment}>
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                <CardElement onChange={handleChange} />

                <div className={classes.payment_price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order | </p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type="submit">
                    {processing ? (
                      <div className={classes.loader}>
                        <ClipLoader color="grey" size={12} />
                        <p>please wait....</p>
                      </div>
                    ) : (
                      "pay now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;
