import React from "react";
import { useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../context/stateProvider";
import getBasketTotal from "../selector/selector";
import "../styles/Subtotal.css";

function Subtotal() {
  const [{ basket }] = useStateValue();
  const history = useHistory();

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
      <button
        onClick={(e) => {
          history.push("/payment");
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
