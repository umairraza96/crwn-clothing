import React from "react";
import { connect } from "react-redux";
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";
const CheckOutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"></img>
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            removeItem(cartItem);
          }}
        >
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>

      <span
        className="remove-button"
        onClick={() => {
          clearItem(cartItem);
        }}
      >
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
