import { useAppSelector } from "../hooks";
import { RootState } from "../store.types";

export const useSelect = () => {
  const selectedProduct = useAppSelector(
    (state: RootState) => state.selectedProduct
  );
  const cartItems = useAppSelector((state: RootState) => state.cartItems);
  const currentUser = useAppSelector((state: RootState) => state.currentUser);

  return { selectedProduct, cartItems, currentUser };
};
