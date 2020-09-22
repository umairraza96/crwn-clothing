import React from "react";
import "./checkout-item.styles.scss";
const CheckOutItem = ({ cartItem: { imageUrl, name, price, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item"></img>
    </div>
    <span className="name">{name}</span>
    <span className="price">{price}</span>
    <span className="quantity">{quantity}</span>
    <span className="remove">&#10005;</span>
  </div>
);

export default CheckOutItem;
