import { useState } from "react";
import Header from "./Components/Header";
import Shop from "./Pages/Shop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./Pages/ProductDetails";
import PageNotFound from "./Pages/PageNotFound";
import { useQuery } from "react-query";
import {
  ProductTypes,
} from "./Pages/Shop/Shop.types";
import Cart from "./Components/Cart";
import { useDispatcher } from "./store/dispatch";
import { useSelect } from "./store/selector";
import {data} from "./utils";
import {  CartItemTypes } from "./Components/Cart/Cart.types";

// const fetchProducts = async (): Promise<ProductTypes[]> => {
//   return await fetch(
//     `https://fakestoreapi.com/products?_limit=10&_page=1`
//   ).then((res) => res.json());
// };


const App = () => {
  const { selectedProduct, cartItems } = useSelect();
  const {  setSelectedProduct, addProductToCart } =
    useDispatcher();
  const [cartOpen, setCartOpen] = useState(false);
  // const [selectedProduct, setSelectedProduct] = useState<ProductTypes | null>(
  //   null
  // );

  // const { isLoading, error, data } = useQuery<ProductTypes[]>(
  //   "products",
  //   fetchProducts
  // );
  const isLoading = false;
  const error = false;

  const handleAddRemoveCartItems = (playload: CartItemTypes) => {
    addProductToCart(playload);
  };
    
  const _setSelectedProduct = (product: ProductTypes) => {
    setSelectedProduct(product);
  };

  const handleCartOpen = () => {
    setCartOpen(true);
  };

  const totalNumberOfItems = cartItems.reduce(function (
    previousValue,
    currentValue
  ) {
    return previousValue + currentValue.quantity;
  },
  0);


  if (isLoading) return <>Loading...</>;

  if (error) return <>An error has occurred:</>; // + error.message;

  return (
    <div>
      <BrowserRouter>
        <Header
          handleCartOpen={handleCartOpen}
          totalNumberOfItems={totalNumberOfItems}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Shop
                products={data}
                addProductToCart={handleAddRemoveCartItems}
                setSelectedProduct={_setSelectedProduct}
              />
            }
          />
          <Route
            path="/product-details/:productId/:productTitle"
            element={
              <ProductDetails
                product={selectedProduct}
                addProductToCart={handleAddRemoveCartItems}
              />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      {cartOpen && (
        <Cart
          cartItems={cartItems}
          handleAddRemoveItems={handleAddRemoveCartItems}
          closeCart={() => setCartOpen(false)}
          totalNumberOfItems={totalNumberOfItems}
        />
      )}
    </div>
  );
};

export default App;
