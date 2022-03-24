import selectedProductSlice from "./features/selectedProduct.feature";
import cartItemSlice from "./features/cartItems.feature";
import currentUserSlice from "./features/currentUser.feature";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  selectedProduct: selectedProductSlice,
  cartItems: cartItemSlice,
  currentUser: currentUserSlice,
});

export default rootReducers;
