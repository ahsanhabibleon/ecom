import Button from "../../Molicules/Button";
import { HeaderPropTypes } from "./Header.types";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header: React.FC<HeaderPropTypes> = ({
  handleCartOpen,
  totalNumberOfItems,
}) => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        GuluMulu
      </Link>
      <div className="header-actions">
        <Button onClick={handleCartOpen} text={`Cart (${totalNumberOfItems})`} />
      </div>
    </div>
  );
};

export default Header;
