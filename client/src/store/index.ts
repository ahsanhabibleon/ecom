import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "./localStorage";
import rootReducers from "./reducers";
// ...
const persistedState = loadState();
export const store = configureStore({
  reducer: rootReducers,
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({
    selectedProduct: store.getState().selectedProduct,
    cartItems: store.getState().cartItems,
    currentUser: store.getState().currentUser,
  });
});
