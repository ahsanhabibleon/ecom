import { Link } from "react-router-dom";
import { ProductDetailsProps } from "./ProductDetails.types";
import "./ProductDetails.scss";
import Product from "../../Components/Product";
import { ProductTypes } from "../Shop/Shop.types";
import { useQuery } from "react-query";

const ProductDetails: React.FC<ProductDetailsProps> = ({
  productId,
  addProductToCart,
}) => {
  const prodId = window.location.pathname
    .split("/")
    .filter((t) => t.includes("p_id:"))[0]
    .split(":")[1];

  console.log({ prodId });

  const { isLoading, error, data } = useQuery<ProductTypes>(
    "product",
    async (): Promise<ProductTypes> => {
      return await fetch(
        "${process.env.REACT_APP_API_BASE}/api/products/" + productId || prodId
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));
    }
  );

  if (isLoading) return <>Loading...</>;
  if (error) return <>An error has occurred:</>; // + error.message;

  return (
    <div className="product-details">
      <div className="page-banner">
        <h1>Product Details</h1>
        <Link to="/" className="btn btn-secondary">
          {"<"}Go to Shop
        </Link>
      </div>

      {data && (
        <Product
          product={data}
          addProductToCart={() => addProductToCart({ ...data, quantity: 1 })}
        />
      )}
    </div>
  );
};

export default ProductDetails;
