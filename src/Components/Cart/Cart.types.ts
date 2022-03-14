import {  ProductTypes } from "../../Pages/Shop/Shop.types";

export interface CartItemTypes extends ProductTypes { 
    quantity: number;
}

export interface CartItemType {
  cartItems: CartItemTypes[];
  handleAddRemoveItems: (payload: CartItemTypes) => void;
  closeCart: () => void;
  totalNumberOfItems: number;
}