import React from "react";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";
import "../styles/Order.css";

function Order({ order }) {
  return (
    <div className='order'>
      <div className='order__header'>
        <h2>Order Placed</h2>
        <p>{moment.unix(order.data.created).format("MMM Do YYYY, h:mma")}</p>
        <p className='order__id'>
          <small> Order # {order.id}</small>
        </p>
      </div>
      <div className='order__delivery'>
        <span>
          Delivered {moment.unix(order.data.created).format("MMM Do, YYYY")}
        </span>
        <br></br>
        Your package was left near the front door or porch.
      </div>
      {order.data.basket.map((item, i) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          key={i}
          hideButton={true}
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <React.Fragment>
            <h3 className='order__total'>Order Total: {value}</h3>
          </React.Fragment>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
