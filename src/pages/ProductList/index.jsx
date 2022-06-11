import axios from "axios";
import { useEffect, useState } from "react";
import { Categories } from "../../components/Categories";
import { ProductCard } from "../../components/ProductCard";
import { FiStar } from "react-icons/fi";
import "./styles.css";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getAllProducts() {
      try {
        const response = await axios.get("http://localhost:4000/products");
        setProductList(response.data);
        console.log("Response products?", response);
      } catch (e) {
        console.log(e.message);
      }
    }
    getAllProducts();

    async function getAllCategories() {
      try {
        const response = await axios.get("http://localhost:4000/categories");
        setCategories(response.data);
        console.log("Response categories?", response);
      } catch (e) {
        console.log(e.message);
      }
    }
    getAllCategories();
  }, []);

  return (
    <div className="Container-ExtraThings-ProductList">
      <div className="ExtraThings">
        <div className="Categories">
          <h2>Categories</h2>
          {categories ? (
            categories.map((category, index) => (
              <Categories key={index} id={category.id} title={category.title} />
            ))
          ) : (
            <p>Loading..</p>
          )}
        </div>
        <div className="Ratings">
          <h2>Ratings</h2>
          <p>
            <FiStar />
          </p>
          <p>
            <FiStar />
            <FiStar />
          </p>
          <p>
            <FiStar />
            <FiStar />
            <FiStar />
          </p>
          <p>
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
          </p>
          <p>
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
          </p>
        </div>
        <div className="PriceFilter">
          <h2>Price Filter</h2>
          <p>$ 0 - 50</p>
          <p>$ 50 - 100</p>
          <p>$ 100 - 200</p>
          <p>$ 200 - 1000</p>
        </div>
      </div>
      <div className="ProductList">
        {productList ? (
          productList.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              mainImage={product.mainImage}
            />
          ))
        ) : (
          <p>Loading.. </p>
        )}
      </div>
    </div>
  );
};

export { ProductList };
