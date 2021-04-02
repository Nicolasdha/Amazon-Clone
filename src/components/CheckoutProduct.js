import React from "react";
import { useStateValue } from "../context/stateProvider";

import "../styles/CheckoutProduct.css";

function CheckoutProduct({ id, title, image, price, rating, hideButton }) {
  const [{}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", id });
  };

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' alt='' src={image} />

      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
