import React, { useContext, useEffect, useState } from "react";
import "./Admin.scss";
import axios from "axios";
import { ProductContext } from "../../../context/context";
import { ToastContainer, toast } from "react-toastify";

const Admin = () => {
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productDes, setProductDes] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");

  const { dataProduct, setDataProduct } = useContext(ProductContext);

  async function addProduct() {
    if (
      !productUrl ||
      !productName ||
      !productDes ||
      !productPrice ||
      !productCategory
    ) {
      toast.error("Заполните пустые поля!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } else {
      toast.success("Данные успешно отправлены!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    const productData = {
      url: productUrl,
      name: productName,
      des: productDes,
      price: productPrice,
      category: productCategory,
      count: 1,
    };

    await axios.post(
      `https://api-crud.elcho.dev/api/v1/7d96f-ecf7f-c0be3/organick?per_page=100`,
      productData
    );
    setDataProduct([...dataProduct, productData]);

    setProductUrl("");
    setProductName("");
    setProductDes("");
    setProductPrice("");
    setProductCategory("");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <div className="admin--form">
            <input
              value={productUrl}
              onChange={(e) => setProductUrl(e.target.value)}
              type="text"
              placeholder="Product Url"
            />
            <input
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              type="text"
              placeholder="Product Name"
            />
            <input
              value={productDes}
              onChange={(e) => setProductDes(e.target.value)}
              type="text"
              placeholder="Product Description"
            />
            <input
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              type="number"
              placeholder="Product Price"
            />

            <select
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
            >
              <option value="" disabled>
                Category
              </option>
              <option value="Health">Health</option>
              <option value="Vegetable">Vegetable</option>
              <option value="Fresh">Fresh</option>
              <option value="Millets">Millets</option>
              <option value="Nuts">Nuts</option>
            </select>
            <button type="button" onClick={addProduct}>
              Submit
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Admin;
