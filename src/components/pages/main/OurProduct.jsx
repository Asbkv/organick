// import React, { useContext } from "react";
// import "./OurProduct.scss";
// import Title from "../../../assets/images/Categories.svg";
// import ProductCard from "../../ui/productCard/ProductCard";
// import { ProductContext } from "../../../context/context";
// import { FaArrowCircleRight } from "react-icons/fa";

// const OurProduct = () => {
//   const { dataProduct} = useContext(ProductContext);
//   return (
//     <div id="ourProduct">
//       <div className="container">
//         <div className="ourProductTitle">
//           <img src={Title} alt="img" />
//           <h1>Our Products</h1>
//         </div>
//         <div className="ourProduct">
//           {dataProduct?.map((el) => (
//             <ProductCard el={el}  key={el._id}/>
//           ))}
//         </div>
//         <center>
//           <button className="btn">Load More <FaArrowCircleRight />
//           </button>
//         </center>
//       </div>
//     </div>
//   );
// };

// export default OurProduct;


import React, { useContext } from "react";
import "./OurProduct.scss";
import Title from "../../../assets/images/Categories.svg";
import ProductCard from "../../ui/productCard/ProductCard";
import { ProductContext } from "../../../context/context";
import { FaArrowCircleRight } from "react-icons/fa";

const OurProduct = () => {
  const { dataProduct } = useContext(ProductContext);
  
  return (
    <section id="ourProduct" aria-labelledby="productsHeading">
      <div className="container">
        <div className="ourProductTitle">
          <img src={Title} alt="Product categories" />
          <h1 id="productsHeading">Our Products</h1>
        </div>
        
        <div className="ourProduct" role="list">
          {dataProduct?.map((el) => (
            <ProductCard el={el} key={el._id} role="listitem" />
          ))}
        </div>
        
        <div className="btn-wrapper">
          <button 
            className="btn"
            aria-label="Load more products"
          >
            Load More <FaArrowCircleRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurProduct;