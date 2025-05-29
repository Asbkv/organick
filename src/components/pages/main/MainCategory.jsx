import React from "react";
import "./MainCategory.scss";
import { Link } from "react-router-dom";

const MainCategory = () => {
  const allCategories = [
    {
      id: 1,
      title: "Vegetable",
      img: "https://img.pikbest.com/png-images/20240830/3d-vegetables-a-clean-and-modern-presentation_10777794.png!bw700",
    },
    {
      id: 2,
      title: "Fresh",
      img: "https://png.pngtree.com/png-clipart/20240314/original/pngtree-3d-fruit-fresh-png-image_14591543.png",
    },
    {
      id: 3,
      title: "Nuts",
      img: "https://png.pngtree.com/png-vector/20250327/ourmid/pngtree-3d-a-mixed-nuts-displayon-realistic-png-image_15887028.png",
    },
    {
      id: 4,
      title: "Health",
      img: "https://png.pngtree.com/png-vector/20241203/ourmid/pngtree-buckwheat-png-image_14647414.png",
    },
  ];

  return (
    <section id="mainCategory" aria-label="Product categories">
      <div className="container">
        <h1>All Categories</h1>
        <div className="mainCategory">
          {allCategories.map((category) => (
            <div className="mainCategory--block" key={category.id}>
              <Link
                to={`/category/${category.title.toLowerCase()}`}
                aria-label={`View ${category.title} category`}
              >
                <img src={category.img} alt={category.title} loading="lazy" />
                <h2>{category.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainCategory;
