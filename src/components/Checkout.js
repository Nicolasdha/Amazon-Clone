import React from "react";
import "../styles/Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../context/stateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="/ad.png" alt="" />

        <div>
          <h3>Hello, {user ? user.email : "Guest"}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((basketItem, index) => (
            <CheckoutProduct
              id={basketItem.id}
              title={basketItem.title}
              image={basketItem.image}
              price={basketItem.price}
              rating={basketItem.rating}
              key={index}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
