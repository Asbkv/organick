import React, { useEffect, useState } from "react";
import { ProductContext } from "./context";
import axios from "axios";

const RootContext = ({ children }) => {
  const [dataProduct, setDataProduct] = useState([]);
  const [basket, setBasket] = useState([])

  async function getProduct() {
    let res = await axios(
      `https://api-crud.elcho.dev/api/v1/7d96f-ecf7f-c0be3/organick?per_page=100`
    );
    let { data } = res.data;
    setDataProduct(data);
  }

  function getBasket() {
    let res = JSON.parse(localStorage.getItem("basket")) || []
    setBasket(res)
  }
  useEffect(() => {
    getProduct();
    getBasket()
  }, []);
  return (
    <ProductContext.Provider
      value={{
        dataProduct,
        basket,
        setBasket,
        setDataProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default RootContext;
