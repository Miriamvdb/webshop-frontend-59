import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ProductBlock from "../../components/ProductBlock";
import LowerDetails from "../../components/LowerDetails";
import "./styles.css";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchById = async () => {
      const productId = params.id;
      try {
        const response = await axios.get(
          `http://localhost:4000/products/${productId}`
        );

        setProduct(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchById();
  }, []);

  console.log("product", product);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="details-container">
      <div className="path">
        <div className="path-link">
          <p>
            <Link to="/" style={{ color: "black" }}>
              Homepage -
            </Link>
            <Link to="/shop" style={{ color: "black" }}>
              Shop -
            </Link>
            <Link to="/details/:id" style={{ color: "black" }}>
              {product.title}
            </Link>
          </p>
        </div>
      </div>
      <div>
        <ProductBlock
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          mainImage={product.mainImage}
          description={product.description}
          rating={product.rating}
          category={product}
        />
        <div className="lower-details">
          <LowerDetails />
        </div>
      </div>
    </div>
  );
};
export { ProductDetails };
