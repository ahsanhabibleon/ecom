import selectedProductSlice from "./features/selectedProduct.feature";
import cartItemSlice from "./features/cartItems.feature";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  selectedProduct: selectedProductSlice,
  cartItems: cartItemSlice,
});

export default rootReducers;
