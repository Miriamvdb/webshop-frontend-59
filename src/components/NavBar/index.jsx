import "./styles.css";
import { Link } from "react-router-dom";
import { FiUser, FiShoppingCart, FiHeart } from "react-icons/fi";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-links-searchbox">
        <div className="navbar-links">
          <Link className="navbar-link" to="/">
            Home
          </Link>
          <Link className="navbar-link" to="/shop">
            Shop
          </Link>
          <Link className="navbar-link" to="/about">
            About
          </Link>
        </div>
      </div>
      <div className="navbar-searchbox">
        <input className="searchbox"></input>
      </div>

      <div className="navbar-icons">
        <Link className="navbar-link" to="/user/login">
          <FiUser className="icon" />
        </Link>
        <Link className="navbar-link" to="">
          <FiShoppingCart className="icon" />
        </Link>
        <Link className="navbar-link" to="">
          <FiHeart className="icon" />
        </Link>
      </div>
    </div>
  );
};

export { NavBar };
