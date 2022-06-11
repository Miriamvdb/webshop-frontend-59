import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

function ProductBlock(props) {
  return (
    <div className="productblock">
      <div className="productblock-image">
        <img alt={props.title} src={props.mainImage} />
      </div>
      <div className="productblock-content">
        <h2>{props.title}</h2>
        <h2>Price: ${props.price}</h2>

        <p className="description">{props.description}</p>
        <h4>
          Rating: {props.rating} -{" "}
          <button>
            <NavLink to={`/review/:id`}>Add Review</NavLink>
          </button>
        </h4>
      </div>
    </div>
  );
}

export default ProductBlock;
