import "../css/Header.css";
import { Container, Button, Badge, IconButton } from "@material-ui/core";
import {
  Search,
  PermIdentity,
  HelpOutline,
  ShoppingCartOutlined,
  ExpandMoreOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.shoppingCart);
  const { response } = cartItems.cart;
  return (
    <>
      <div className="header">
        <Container>
          <div className="header__container">
            <div className="header__left">
              <Link to="/">
                <img
                  src="https://getcake.com/wp-content/uploads/2017/03/Jumia-logo.png"
                  alt="humia logo"
                />
              </Link>
            </div>
            <div className="header__center">
              <div className="header__search">
                <Search />
                <input
                  type="text"
                  placeholder="Search products, brands and categories"
                />
              </div>
              <Button
                className="header__search__button"
                style={{
                  backgroundColor: "#f6881E",
                  color: "#FFF",
                  fontWeight: "600",
                  marginRight: "10px",
                }}
              >
                Search
              </Button>
            </div>
            <div className="header__right">
              <div className="header__rightIcons">
                <Link to="/customer/profile/login">
                  <PermIdentity />
                  <h2>Login</h2>
                  <ExpandMoreOutlined />
                </Link>
              </div>
              <div className="header__rightIcons">
                <Link to="/help/">
                  {" "}
                  <HelpOutline />
                  <h2>Help</h2>
                  <ExpandMoreOutlined />
                </Link>
              </div>
              <div className="header__rightIcons">
                {" "}
                <Link to="/cart/">
                  <IconButton aria-label="Show cart Items">
                    <Badge
                      badgeContent={`${response && response.total_items}`}
                      color="secondary"
                    >
                      <ShoppingCartOutlined />
                    </Badge>
                  </IconButton>
                  <h2>Cart</h2>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
