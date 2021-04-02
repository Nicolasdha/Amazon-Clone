import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "../styles/Payment.css";
import { useStateValue } from "../context/stateProvider";
import CheckoutProduct from "./CheckoutProduct";
import getBasketTotal from "../selector/selector";
import axios from "../axios/axios";
import { database } from "../firebase/firebase";

function Payment() {
  const history = useHistory();

  const [{ basket, user }] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabledError, setDisabledError] = useState(true);
  const [disabledClientSecret, setDisabledClientSecret] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });

      setClientSecret(response.data.clientSecret);
      setDisabledClientSecret(false);
    };

    getClientSecret();
  }, [basket]);

  // console.log("secret is", clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        /*
        In the collection users in the document we are accessing is user.id then to that users orders in the documnet of paymnet id we are setting the things purcahsed, amount, when purcahsed 
         */

        database
          .collection("users")
          .doc(user.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        history.replace("/orders");

        // if(paymentIntent.status === "succeeded"){
        // }
      })
      .catch(() => {
        console.log("error from Payment.js");
      });
  };

  const handleChange = (e) => {
    // need two pieces of state 1 for disabled state to disable button and 2 to set error to capture error

    // listen or cchanges in card ele and display any errors as cust types in card details

    //if e is emtpy disable
    setDisabledError(e.empty);

    // if error show erorr otherwise show nothing
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout (
          {<Link to='/checkout'>{basket ? basket.length : 0} items</Link>})
        </h1>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user ? user.email : ""}</p>
            <p>123 React Lane</p>
            <p>Morrison, CO, 80465</p>
          </div>
        </div>

        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment__items'>
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

        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'>
            <div className='payment__details--form'>
              <form onSubmit={handleSubmit}>
                <CurrencyFormat
                  renderText={(value) => (
                    <React.Fragment>
                      <h3 className='payment__total'>Order Total: {value}</h3>
                    </React.Fragment>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <CardElement
                  className='payment__cardElement'
                  onChange={handleChange}
                />
                {error && <div className='payment__error'>{error}</div>}

                <div className='payment__priceContainer'>
                  <button
                    disabled={
                      processing ||
                      disabledError ||
                      disabledClientSecret ||
                      succeeded
                    }
                  >
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
