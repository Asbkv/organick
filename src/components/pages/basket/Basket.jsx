import React, { useContext } from "react";
import "./Basket.scss";
import { ProductContext } from "../../../context/context";
import { MdDelete } from "react-icons/md";

const Basket = () => {
  const { basket, setBasket } = useContext(ProductContext);

  const deleteBasket = (id) => {
    const delBasket = basket.filter((el) => el._id !== id);
    setBasket(delBasket);
    localStorage.setItem("basket", JSON.stringify(delBasket));
  };
  function incrimentQuantity(bookId) {
    let changeBacket = basket.map((el) => {
      return el._id === bookId ? { ...el, count: el.count + 1 } : el;
    });
    localStorage.setItem("basket", JSON.stringify(changeBacket));
    setBasket(changeBacket);
  }

  function decrimentQuantity(bookId) {
    let changeBacket = basket.map((el) => {
      return el._id === bookId
        ? { ...el, count: el.count > 1 ? el.count - 1 : 1 }
        : el;
    });
    localStorage.setItem("basket", JSON.stringify(changeBacket));
    setBasket(changeBacket);
  } 

  const totalSum = basket.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);

  return (
    <div id="basket">
      <div className="container">
        <div className="basket">
          <div className="basket--block">
            {basket.map((el) => (
              <div className="basket--block__card">
                <div className="basket--block__card--text">

                <h2>{el.category}</h2>
                <img src={el.url} alt="img" />
                <h1>{el.name}</h1>
                </div>
                <h3> {(el.price * el.count).toFixed(2)} сом</h3>

                <div className="basket--block__card--btn">
                  <button onClick={() => decrimentQuantity(el._id)}>-</button>
                  <h6>{el.count}</h6>
                  <button onClick={() => incrimentQuantity(el._id)}>+</button>
                </div>
                <a onClick={() => deleteBasket(el._id)}>
                  <MdDelete />
                </a>
              </div>
            ))}
          </div>

          <div className="basket--bar">
            <div className="basket--bar__block">
              <div
                className="basket--bar__block--scroll"
                style={{
                  width:
                    basket.length === 1
                      ? "20%"
                      : basket.length === 2
                      ? "40%"
                      : basket.length === 3
                      ? "60%"
                      : basket.length === 4
                      ? "80%"
                      : basket.length === 5
                      ? "100%"
                      : "0%",
                  background:
                    basket.length === 1
                      ? "green"
                      : basket.length === 2
                      ? "yellowgreen"
                      : basket.length === 3
                      ? "yellow"
                      : basket.length === 4
                      ? "orange"
                      : basket.length === 5
                      ? "red"
                      : "transparent",
                }}
              >
                <h2>
                  {basket.length === 1
                    ? "20%"
                    : basket.length === 2
                    ? "40%"
                    : basket.length === 3
                    ? "60%"
                    : basket.length === 4
                    ? "80%"
                    : basket.length === 5
                    ? "100%"
                    : "0%"}
                </h2>
              </div>
            </div>
          </div>
          {basket.length > 0 && (
            <h3 className="basket--total">Итого: {totalSum.toFixed(2)} сом</h3>
          )}
          {basket.length === 5 ? (
            <h3 className="basket--full-message">
              <i>Корзина заполнена!</i>
            </h3>
          ) : basket.length === 0 ? (
            <h3 className="basket--full-message">
              <i>Корзина пусто!</i>
            </h3>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Basket;
