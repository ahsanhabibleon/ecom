import { ProductTypes } from "../../Pages/Shop/Shop.types";

export type Props = {
    product: ProductTypes;
    addProductToCart: () => void;
    setSelectedProduct?: () => void;
};