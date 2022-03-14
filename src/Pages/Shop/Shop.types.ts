import { CartItemTypes } from "../../Components/Cart/Cart.types";
import { RatingType } from "../../Molicules/Rating/Rating.types";

export interface ProductTypes {
  id: number | string | null | undefined;
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