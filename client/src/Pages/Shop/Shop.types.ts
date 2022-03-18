import { CartItemTypes } from "../../Components/Cart/Cart.types";
import { RatingType } from "../../Molicules/Rating/Rating.types";

export interface ProductTypes {
  _id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: RatingType;
  inStock: number;
}

export type ShopProps = {
  products: ProductTypes[];
  addProductToCart: (payload: CartItemTypes) => void;
  setSelectedProduct: (product: ProductTypes) => void;
};