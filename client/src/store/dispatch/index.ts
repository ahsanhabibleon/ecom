import { useAppDispatch } from "../hooks";
import { addRemoveItemToCartReducer } from "../reducers/features/cartItems.feature";
import { setSelectedProductReducer } from "../reducers/features/selectedProduct.feature";

export const useDispatcher = () => {
  const dispatch = useAppDispatch();
  
  const setSelectedProduct = (payload: {}) => dispatch(setSelectedProductReducer(payload));
  const addProductToCart = (payload: {}) =>
    dispatch(addRemoveItemToCartReducer(payload));

  return {
    setSelectedProduct,
    addProductToCart,
  };
};
