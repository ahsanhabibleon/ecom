import { CartItemTypes } from "../../Components/Cart/Cart.types";
import {  ProductTypes } from "../Shop/Shop.types";

export interface ProductDetailsProps { 
    product: ProductTypes | null | undefined,
    addProductToCart: (payload: CartItemTypes) => void;
}