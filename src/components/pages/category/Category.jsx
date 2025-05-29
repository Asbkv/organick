import React, { useContext, useEffect } from "react";
import "./Category.scss";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../../context/context";
import ProductCard from "../../ui/productCard/ProductCard";

const Category = () => {
  const { catName } = useParams();
  const { dataProduct } = useContext(ProductContext);

  useEffect(() => {
    window.scroll(0, 0)
  }, []);

  return (
    <div id="category">
      <div className="container">
        <div className="category">
          {dataProduct.map((el) => {
                return el.category === catName ? (
                <ProductCard el={el} key={el._id} />
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
