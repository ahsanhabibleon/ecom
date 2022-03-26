import { useState } from "react";
import Header from "./Components/Header";
import Shop from "./Pages/Shop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./Pages/ProductDetails";
import PageNotFound from "./Pages/PageNotFound";
import { useQuery } from "react-query";
import { ProductTypes } from "./Pages/Shop/Shop.types";
import Cart from "./Components/Cart";
import { useDispatcher } from "./store/dispatch";
import { useSelect } from "./store/selector";
import { CartItemTypes } from "./Components/Cart/Cart.types";
import SignIn from "./Pages/SignIn";
import UserProfile from "./Pages/UserProfile";
import ShippingAddress from "./Pages/ShippingAddress";

const fetchProducts = async (): Promise<ProductTypes[]> => {
  return await fetch(
    // `https://fakestoreapi.com/products?_limit=10&_page=1`
    `${process.env.REACT_APP_API_BASE}/api/products`
  ).then((res) => res.json());
};

const App = () => {
  const { selectedProduct, cartItems } = useSelect();
  const { setSelectedProduct, addProductToCart } = useDispatcher();
  const [cartOpen, setCartOpen] = useState(false);

  const { isLoading, error, data } = useQuery<ProductTypes[]>(
    "products",
    fetchProducts
  );

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
                products={data || []}
                addProductToCart={handleAddRemoveCartItems}
                setSelectedProduct={_setSelectedProduct}
              />
            }
          />
          <Route
            path="/product-details/:productId/:productTitle"
            element={
              <ProductDetails
                productId={selectedProduct._id}
                addProductToCart={handleAddRemoveCartItems}
              />
            }
          />
          <Route path="/sign-in" element={<SignIn formType="sign-in" />} />
          <Route path="/sign-up" element={<SignIn formType="sign-up" />} />
          <Route path="/shipping" element={<ShippingAddress />} />
          <Route path="/profile/:userId" element={<UserProfile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {cartOpen && (
          <Cart
            cartItems={cartItems}
            handleAddRemoveItems={handleAddRemoveCartItems}
            closeCart={() => setCartOpen(false)}
            totalNumberOfItems={totalNumberOfItems}
          />
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
