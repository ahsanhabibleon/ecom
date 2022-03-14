import { Link } from "react-router-dom";
import { ProductDetailsProps } from "./ProductDetails.types";
import "./ProductDetails.scss";
import Product from "../../Components/Product";

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  addProductToCart,
}) => {
  return (
    <div className="product-details">
      <div className="page-banner">
        <h1>Product Details</h1>
        <Link to="/" className="btn btn-secondary">
          {"<"}Go to Shop
        </Link>
      </div>
      {/* {(product === null || product === undefined) && null} */}

      {product! && (
        <Product
          product={product}
          addProductToCart={() => addProductToCart({ ...product, quantity: 1 })}
        />
      )}
    </div>
  );
};

export default ProductDetails;
