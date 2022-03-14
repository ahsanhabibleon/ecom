import { createSlice } from "@reduxjs/toolkit";

const selectedProductSlice = createSlice({
  name: "selectedProduct",
  initialState: {
    id: null,
    title: "",
    category: "",
    description: "",
    image: "",
    price: 0,
    rating: {
      rate: 0,
      count: 0,
    },
    inStock: 0,
  },
  reducers: {
    setSelectedProductReducer: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSelectedProductReducer } = selectedProductSlice.actions;
export default selectedProductSlice.reducer;
