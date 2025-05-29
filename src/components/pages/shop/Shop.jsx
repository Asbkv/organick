import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../../context/context";
import ShopBg from "../../../assets/images/ShopBg.png";
import ProductCard from "../../ui/productCard/ProductCard";
import "./Shop.scss";
import Newsletter from "../../ui/About/Newsletter";

const Shop = () => {
  const { dataProduct } = useContext(ProductContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="shop">
      <div
        className="shopBg"
        style={{
          background: `url(${ShopBg}) no-repeat center/cover`,
          minHeight: "40vh",
        }}
      ></div>
      <div className="container">
        <div className="shop">
          <div className="shop--product">
            <div className="shop--product__cards">
              {dataProduct?.map((el) => (
                <ProductCard el={el} key={el._id} />
              ))}
            </div>
          </div>
        </div>
        <Newsletter />
      </div>
    </div>
  );
};

export default Shop;
