import { createSlice } from "@reduxjs/toolkit";
import { CartItemTypes } from "../../../Components/Cart/Cart.types";

const cartItemSlice = createSlice({
  name: "cartItems",
  initialState: [] as CartItemTypes[],
  reducers: {
    addRemoveItemToCartReducer: (state, action) => {
      const product  = action.payload;
      const isItemInTheCart = state.find((item) => item?._id === product._id);
      if (isItemInTheCart) {
        
        return state.map((item) =>
            item._id === product._id
              ? {
                  ...item,
                  quantity:
                    item.quantity === 0 && product.quantity === -1
                      ? 0
                      : item.quantity + product.quantity,
                }
              : item
          )
          .filter((item) => item.quantity > 0);
      } else {
        return [{ ...product, quantity: product.quantity }, ...state];
      }
    },
  },
});

export const { addRemoveItemToCartReducer } = cartItemSlice.actions;
export default cartItemSlice.reducer;
