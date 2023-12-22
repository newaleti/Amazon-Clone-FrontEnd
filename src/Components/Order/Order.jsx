import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import numeral from "numeral";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <h3 className="order__total">
        Order Total: <strong>{numeral(order.data.amount / 100).format("$0,0.00")}</strong>
      </h3>
    </div>
  );
}

export default Order;
