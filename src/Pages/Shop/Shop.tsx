import Product from "../../Components/Product";
import "./Shop.scss";
import { ShopProps } from "./Shop.types";

const Shop: React.FC<ShopProps> = ({
  products,
  addProductToCart,
  setSelectedProduct,
}) => {
  return (
    <div className="products">
      {products &&
        products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addProductToCart={() => addProductToCart({ ...product, quantity: 1 })}
            setSelectedProduct={() => setSelectedProduct(product)}
          />
        ))}
    </div>
  );
};

export default Shop;
