import React, { useEffect, useState } from "react";
import "../styles/Orders.css";
import { useStateValue } from "../context/stateProvider";
import { database } from "../firebase/firebase";
import Order from "./Order";

function Orders() {
  const [{ user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    dispatch({
      type: "EMPTY_BASKET",
    });
    if (user) {
      database
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user, dispatch]);

  return (
    <div className='orders'>
      <h1>Your Orders</h1>
      <div className='orders__order'>
        {orders
          ? orders.map((order, i) => <Order key={i} order={order} />)
          : ""}
      </div>
    </div>
  );
}

export default Orders;
