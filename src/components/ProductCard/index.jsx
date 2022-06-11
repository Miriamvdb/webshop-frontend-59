import "./styles.css";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiZoomIn } from "react-icons/fi";

const ProductCard = (props) => {
  return (
    <div className="ProductCard">
      <div className="ImageProduct">
        <img alt=" " className="image" src={props.mainImage} />
      </div>
      <div className="DescProduct">
        <p>Rating: {props.rating}</p>
        <h2>{props.title}</h2>
        {/* <p>{props.description}</p> */}
        <br />
        <br />

        <div className="PriceAndIcons">
          <h2>${props.price}</h2>
          <div className="AllIcons">
            <Link to="">
              <FiShoppingCart className="productCardIcon" />
            </Link>
            <Link to="">
              <FiHeart className="productCardIcon" />
            </Link>
            <Link to={`/details/${props.id}`}>
              <FiZoomIn className="productCardIcon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
