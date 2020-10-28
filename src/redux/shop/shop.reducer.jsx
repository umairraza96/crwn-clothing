import ShopActionTypes from "./shop.type";

const { default: SHOP_DATA } = require("./shop.data");

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
