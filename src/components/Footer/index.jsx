import "./styles.css";
import { Link } from "react-router-dom";
import {
  FiInstagram,
  FiTwitter,
  FiFacebook,
  FiTwitch,
  FiYoutube,
} from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-navigation">
        <h2 className="title-footer">Navigation</h2>
        <Link className="footer-link" to="/">
          Home
        </Link>
        <Link className="footer-link" to="/shop">
          Shop
        </Link>
        <Link className="footer-link" to="/details/:id">
          About
        </Link>
      </div>
      <div className="footer-account">
        <h2 className="title-footer">My account</h2>
        <Link className="footer-link" to="/account">
          My account
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
        <h2 className="title-footer">Follow us!</h2>

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
