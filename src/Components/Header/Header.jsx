import React, { useContext } from "react";
import classes from "./header.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import LowHeader from "./LowHeader";
import { auth } from "../../utility/firebase";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
//import logo from "./amazonclone/src/Components/Header/pngimg.com - amazon_PNG11.png";
function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  console.log(basket.length);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          {/* logo part */}
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <FaLocationDot />
              </span>
              <div>
                <p> Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* search bar */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="" />
            <FaSearch size={38} />;
          </div>

          {/* right side link */}
          <div className={classes.order_container}>
            <a href="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1920px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                alt=""
              />
              <select>
                <option value="">EN</option>
              </select>
            </a>

            {/* three componets */}
            <Link to={"/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello , {user?.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>sign out</span>
                  </>
                ) : (
                  <>
                    <p>Hello , Sign In</p>
                    <span>Acount & Lists</span>
                  </>
                )}
              </div>
            </Link>
            <Link to="/orders">
              <p>returns</p>
              <span>&Orders</span>
            </Link>

            <Link to="/cart" className={classes.cart}>
              <FaShoppingCart size={25} />
              <span className="classes.cartcount">{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowHeader />
    </section>
  );
}

export default Header;
