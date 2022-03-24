import { useAppDispatch } from "../hooks";
import { addRemoveItemToCartReducer } from "../reducers/features/cartItems.feature";
import { setSelectedProductReducer } from "../reducers/features/selectedProduct.feature";
import { setCurrentUserReducer } from "../reducers/features/currentUser.feature";

export const useDispatcher = () => {
  const dispatch = useAppDispatch();

  const setSelectedProduct = (payload: {}) =>
    dispatch(setSelectedProductReducer(payload));

  const addProductToCart = (payload: {}) =>
    dispatch(addRemoveItemToCartReducer(payload));

  const setCurrentUser = (payload: {}) =>
    dispatch(setCurrentUserReducer(payload));

  return {
    setSelectedProduct,
    addProductToCart,
    setCurrentUser,
  };
};
