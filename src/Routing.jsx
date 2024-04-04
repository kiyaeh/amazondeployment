import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import Signup from "./pages/Auth/Signup";
import Landing from "./pages/LandingPages/LandingPage";
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/Payment/Payment";
import Orders from "./pages/Orders/Orders";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Results from "./pages/Results/Results";
import Protection from "./Components/protection/Protection";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
export const stripePromise = loadStripe(
  "pk_test_51Ox77RHSgW8FT79765nJZYrJ6Xo8MZaBIymbriMtkHLN3QSZU5fcgMRIsf0qPUxC4UeFMPNmWZYBy041wXxgTiqm00odqtnElH"
);
function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Signup />} />
          <Route
            path="/payments"
            element={
              <Protection msg={"you must login"} redirect={"/payments"}>
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </Protection>
            }
          />
          <Route
            path="/orders"
            element={
              <Protection
                msg={"you must login to access your orders"}
                redirect={"/orders"}
              >
                <Orders />
              </Protection>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/category/:categoryName" element={<Results />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
