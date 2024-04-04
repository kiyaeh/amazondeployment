import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import classes from "./header.module.css";
export default function LowHeader() {
  return (
    <div className={classes.lower_container}>
      <ul>
        <li>
          <MdOutlineMenu />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}
