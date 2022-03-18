import { Props } from "./Products.types";
import "./Product.scss";
import Rating from "../../Molicules/Rating";
import Button from "../../Molicules/Button";
import { Link } from "react-router-dom";

const Product: React.FC<Props> = (props) => {
  const { product, addProductToCart, setSelectedProduct } = props;

  const isInStock = (amount: number) => {
    if (amount > 0 && amount < 4) {
      return <>Limited Stock</>;
    } else if (amount === 0) {
      return <>Out of Stock</>;
    } else {
      return <>In Stock</>;
    }
  };

  return (
    <div key={product._id} className="product">
      <div className="product-inner">
        <Link
          to={`/product-details/p_id:${product._id}/${product.title
            .trim()
            .toLowerCase()
            .split(" ")
            .join("-")}`}
          className="product--img-container"
          onClick={setSelectedProduct}
        >
          <img src={product.image} alt={product.title} />
        </Link>
        <div className="product-desc">
          <h3>{product.title}</h3>
          <div>
            <Rating rate={product.rating.rate} count={product.rating.count} />
            <div className="product-price">
              $<span>{product.price}</span>
            </div>
            <div>
              <Button
                text="Add to cart"
                onClick={addProductToCart}
                type="button"
                primary
                disabled={product.inStock === 0}
              />
            </div>
            <div
              className={`badge ${
                product.inStock > 3
                  ? "bg-success"
                  : product.inStock > 0
                  ? "bg-warning"
                  : "bg-danger"
              }`}
              style={{ marginTop: "1rem" }}
            >
              {isInStock(product.inStock)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
