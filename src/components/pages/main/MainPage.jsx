import React from "react";
import MainWelcome from "./MainWelcome";
import OurProduct from "./OurProduct";
import MainCategory from "./MainCategory";
import Fresh from "./Fresh";
import AboutContent from "./AboutContent";
import Reviews from "./Reviews";
import Ecology from "./Ecology";
import Newsletter from "../../ui/About/Newsletter";

const MainPage = () => {
  return (
    <div>
      <MainWelcome />
      <Fresh/>
      <AboutContent/>
      <OurProduct />
      <Reviews/>
      <MainCategory />
      <Ecology/>
      <Newsletter/>
    </div>
  );
};

export default MainPage;
