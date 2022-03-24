import { HeaderPropTypes } from "./Header.types";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useSelect } from "../../store/selector";
import Button from "../../Molicules/Button";
import { useDispatcher } from "../../store/dispatch";
import { useRef, useState } from "react";
import PopOver from "../../Molicules/PopOver";

const Header: React.FC<HeaderPropTypes> = ({
  handleCartOpen,
  totalNumberOfItems,
}) => {
  const { currentUser } = useSelect();
  const { setCurrentUser } = useDispatcher();

  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleSignOut = () => {
    setCurrentUser({});
    window.location.href = "/";
  };

  const toggleUserMenu = () => {
    setUserMenuOpen((prev) => !prev);
  };

  const UserMenu: React.FC = () => {
    return (
      <div className="user-menu-body">
        <div>
          <Link
            to={
              `/profile/` +
              currentUser?.name?.split(" ").join("_").toLowerCase()
            }
            onClick={toggleUserMenu}
          >
            Profile
          </Link>
        </div>
        <div>Order History</div>
        <div>
          <Button btnText text="Sign Out" onClick={handleSignOut} />
        </div>
      </div>
    );
  };

  const popoverRef = useRef<HTMLDivElement>(null);

  return (
    <div className="header">
      <Link to="/" className="logo">
        eCom
      </Link>
      <div className="header-actions">
        {currentUser?.token ? (
          <>
            <Button
              text={currentUser?.name || ""}
              onClick={toggleUserMenu}
              rightIcon={<i className="fa-solid fa-caret-down"></i>}
            />
            {userMenuOpen && (
              <PopOver
                ref={popoverRef}
                closePopover={() => setUserMenuOpen(false)}
                open={userMenuOpen}
                className="user-menu"
                body={<UserMenu />}
                position={{ top: "30px", right: "0px" }}
              />
            )}
          </>
        ) : (
          <Link to="/sign-in" className="btn">
            Sign In
          </Link>
        )}
        <span onClick={handleCartOpen} className="cart-button">
          <i className="fa-solid fa-cart-shopping"></i>
          <span>{totalNumberOfItems}</span>
        </span>
      </div>
    </div>
  );
};

export default Header;
