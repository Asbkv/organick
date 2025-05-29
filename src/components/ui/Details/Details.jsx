import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../../context/context";
import banner from "../../../assets/images/shopSingle.png";
import "./Details.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProductCard from "../../ui/productCard/ProductCard";

const Details = () => {
  const { productId } = useParams();
  const { dataProduct, basket, setBasket } = useContext(ProductContext);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!dataProduct.length) {
    return (
      <div className="container">
        <h2>Загрузка...</h2>
      </div>
    );
  }

  const selected = dataProduct.find((el) => el._id === +productId);

  if (!selected) {
    return (
      <div className="container">
        <h2>Продукт не найден</h2>
      </div>
    );
  }

  const itemInBasket = basket.find((el) => el._id === selected._id);

  const QuantityClick = (value) => {
    if (value < 1) return;
    setQuantity(value);
  };

  const AddToBasket = () => {
    if (itemInBasket) {
      const updatedBasket = basket.map((item) =>
        item._id === selected._id
          ? { ...item, count: item.count + quantity }
          : item
      );
      setBasket(updatedBasket);
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
      toast.info(`Добавлено ${quantity} шт. к товару`, {
        position: "bottom-right",
        autoClose: 3000,
        theme: "colored",
      });
    } else if (basket.length >= 5) {
      toast.error("Нельзя добавить больше 5 разных товаров!", {
        position: "bottom-left",
        autoClose: 3000,
        theme: "colored",
      });
    } else {
      const newItem = { ...selected, count: quantity };
      const updatedBasket = [...basket, newItem];
      setBasket(updatedBasket);
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
      toast.success(`Товар (${quantity} шт.) добавлен в корзину!`, {
        position: "bottom-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  const relatedProducts = dataProduct
    .filter((el) => el._id !== selected._id)
    .slice(0, 4);

  return (
    <div id="details">
      <div
        className="details-bg"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "400px",
          width: "100%",
          marginBottom: "50px",
        }}
      ></div>
      <div className="container">
        <div className="details">
          <div className="details--product">
            <img
              src={selected.url}
              alt={selected.name}
              className="details__image"
            />
            <div className="details__info">
              <h2 className="details__title">{selected.name}</h2>
              <p className="details__description">{selected.description}</p>
              <h3 className="details__price">{selected.price} $</h3>

              <div className="details__quantity">
                <span>Quantity:</span>
                <div className="quantity-controls">
                  <button onClick={() => QuantityClick(quantity - 1)}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => QuantityClick(quantity + 1)}>+</button>
                </div>
              </div>

              <div className="details__actions">
                <button className="details__btn" onClick={AddToBasket}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>

          <div className="details__description-section">
            <div className="tab-buttons">
              <button className="active">Product Description</button>
              <button>Additional Info</button>
            </div>

            <p className="description-text">{selected.des}</p>
          </div>

          <div className="details__related">
            <h3 className="related-title">Related Products</h3>
            <div className="related-products">
              {relatedProducts.map((product) => (
                <ProductCard key={product._id} el={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
