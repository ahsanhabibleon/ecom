import { CartItemType } from "./Cart.types";
import "./Cart.scss";
import AddRemoveItem from "../../Molicules/AddRemoveItem";
import Button from "../../Molicules/Button";
import { useRef } from "react";

const Cart: React.FC<CartItemType> = ({
  cartItems,
  handleAddRemoveItems,
  closeCart,
  totalNumberOfItems,
}) => {
  const cartRef = useRef(null);  

  const totalPrice = cartItems.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.price * currentValue.quantity;
  }, 0);

  return (
    <div className="cart" ref={cartRef}>
      <span className="close-cart" onClick={closeCart}>
        X
      </span>
      <h3>
        Shopping Cart({totalNumberOfItems} items){" "}
        <span>Total Price: ${totalPrice}</span>
      </h3>
      <div className="cart-items">
        {cartItems.map((item) => {
          // if (item.quantity === 0) return null;
          return (
            <div className="cart-item" key={"cart-" + item.id}>
              <div className="cart-item-img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="cart-item-desc">
                <h4>{item.title}</h4>
                <div className="item-price-and-quantity">
                  <span>
                    <span className="quantity">{item.quantity}</span> x $
                    <span className="price">{item.price}</span>
                  </span>
                  <AddRemoveItem
                    addDisabled={item.quantity >= item.inStock}
                    add={(q) => handleAddRemoveItems({ ...item, quantity: q })}
                  />
                </div>
              </div>
              <span
                className="badge bg-danger"
                onClick={() =>
                  handleAddRemoveItems({ ...item, quantity: -item.quantity })
                }
              >
                x
              </span>
            </div>
          );
        })}
      </div>
      <div className="btn-wrapper">
        <Button text="Proceed to Checkout" />
      </div>
    </div>
  );
};

export default Cart;
