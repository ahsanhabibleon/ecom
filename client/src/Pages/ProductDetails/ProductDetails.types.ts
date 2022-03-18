import { CartItemTypes } from "../../Components/Cart/Cart.types";

export interface ProductDetailsProps { 
    productId: string;
    addProductToCart: (payload: CartItemTypes) => void;
}