import React, { useContext } from "react";
import "./ProductCard.scss";
import { Link, NavLink } from "react-router-dom";
import { GoPlusCircle } from "react-icons/go";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductContext } from "../../../context/context";

const ProductCard = ({ el }) => {
  const { basket, setBasket } = useContext(ProductContext);

  const someBasket = basket.some((item) => item._id === el._id);

  function addToBasket(el) {
    if (someBasket) {
      let res = basket.map((item) => {
        if (item._id === el._id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
      setBasket(res);
      localStorage.setItem("basket", JSON.stringify(res));

      toast.dismiss();
      toast.info("Продукт добавлен в количестве!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (basket.length === 5) {
      toast.error("Корзина заполнена!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      el.count = 1;
      let result = [...basket, el];
      setBasket(result);
      localStorage.setItem("basket", JSON.stringify(result));
      toast.dismiss();
      toast.success("Продукт добавлен в корзину!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  return (
    <div id="productCard">
      <div className="container">
        <div className="productCard">
          <h4>{el?.category}</h4>
          <h5 onClick={() => addToBasket(el)}>
            <GoPlusCircle />
          </h5>
          <NavLink to={`/details/${el._id}`}>
            <img src={el.url} alt={el.name} />
          </NavLink>

          <h2>{el?.name}</h2>
          <hr />
          <div className="productCard--price">
            <h3>{el?.price}$</h3>
            <div className="productCard--price__stars">
              <div className="productCard--price__stars--star"></div>
              <div className="productCard--price__stars--star"></div>
              <div className="productCard--price__stars--star"></div>
              <div className="productCard--price__stars--star"></div>
              <div className="productCard--price__stars--star"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
