import { useAppSelector } from "../hooks";
import { RootState } from "../store.types";

export const useSelect = () => {
  const selectedProduct = useAppSelector((state: RootState) => state.selectedProduct);
  const cartItems = useAppSelector((state: RootState) => state.cartItems);

  return { selectedProduct,cartItems };
};
