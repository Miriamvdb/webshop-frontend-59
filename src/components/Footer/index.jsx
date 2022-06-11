import "./styles.css";
import { NavLink, Link } from "react-router-dom";
import {
  FiInstagram,
  FiTwitter,
  FiFacebook,
  FiTwitch,
  FiLinkedin,
  FiYoutube,
} from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-navigation">
        <h3>Navigation</h3>
        <Link className="footer-link" to="/">
          Home
        </Link>
        <Link className="footer-link" to="/shop">
          Shop
        </Link>
        <Link className="footer-link" to="/details/:id">
          Details
        </Link>
      </div>
      <div className="footer-account">
        <h3>My account</h3>
        <Link className="footer-link" to="/account">
          My Account
        </Link>
        <Link className="footer-link" to="/offers">
          Discount
        </Link>
        <Link className="footer-link" to="/returns">
          Returns
        </Link>
        <Link className="footer-link" to="/history">
          Order history
        </Link>
        <Link className="footer-link" to="/tracking">
          Order tracking
        </Link>
      </div>
      <div className="footer-social">
        <h3>Follow us!</h3>

        <div className="footer-icon">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FiInstagram className="icon" />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
            <FiTwitter className="icon" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FiFacebook className="icon" />
          </a>
          <br />
          <br />
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <FiYoutube className="icon" />
          </a>
          <a href="https://www.twitch.com/" target="_blank" rel="noreferrer">
            <FiTwitch className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export { Footer };
