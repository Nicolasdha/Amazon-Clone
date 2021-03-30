import React from "react";
import CurrencyFormat from "react-currency-format";
import "../styles/Subtotal.css";
import { useStateValue } from "../context/stateProvider";
import getBasketTotal from "../selector/selector";

function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <React.Fragment>
            <p>
              Subtotal ({basket.length} items):
              <strong> {value} </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </React.Fragment>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
