import React from "react";
import "./Ecology.scss";
import EcoTitle from "../../../assets/images/ecology.png";
import EcoLogo from "../../../assets/images/ecoLogo.svg";
import juice from "../../../assets/images/juice.png";
import food from "../../../assets/images/food2.png";
import cookis from "../../../assets/images/cookis3.png";
import green from "../../../assets/images/PhotoGreen.png"
import Tomate from "../../../assets/images/PhotoTomate.png"
import News from "../../../assets/images/iconNews.svg"
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

const Ecology = () => {
  return (
    <div id="ecology">
      <img src={EcoTitle} alt="img" width={700} />
      <div className="container">
        <div className="ecology">
          <div className="ecology--text">
            <img src={EcoLogo} alt="img" />
            <h1>
              Econis is a Friendly <br /> Organic Store
            </h1>
            <div className="ecology--text__lorem">
              <div className="ecology--text__lorem--about">
                <h2>Start with Our Company First</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </p>
              </div>
              <div className="ecology--text__lorem--about">
                <h2>Learn How to Grow Yourself</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </p>
              </div>
              <div className="ecology--text__lorem--about">
                <h2>Farming Strategies of Today</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ecology--block">
          <img src={juice} alt="img" width={400} />
          <img src={food} alt="img" width={400} />
          <img src={cookis} alt="img" width={400} />
        </div>
        <div className="container">
          <div className="main--block7">
            <div className="main--block7__text">
              <h2>
                <img
                  src={News}
                  alt="img"
                  width={60}
                />
                <span>
                  Discover weekly content about <br /> organic food, & more
                </span>
              </h2>
              <button>
                More News <FaCircleArrowRight />
              </button>
            </div>

            <div className="main--block7__cards">
              <div
                className="main--block7__cards--card1"
                style={{
                  backgroundImage: `url(${green})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="main--block7__cards--card1__btn25">
                  <button>
                    25 <br /> Nov
                  </button>
                </div>
                <div
                  className="main--block7__cards--card1__cirkle"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="8000"
                >
                  <h4>
                    <FaUserAlt />
                    <span> By Rachi Card</span>
                  </h4>
                  <h2>
                    The Benefits of Vitamin D & How to Get It <br />
                    <span>
                      {" "}
                      Simply dummy text of the printing and typesetting <br />{" "}
                      industry. Lorem Ipsum
                    </span>
                  </h2>
                  <button>
                    Read More <FaCircleArrowRight />
                  </button>
                </div>
              </div>
              <div
                className="main--block7__cards--card1"
                style={{
                  backgroundImage: `url(${Tomate})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="main--block7__cards--card1__btn25">
                  <button>
                    25 <br /> Nov
                  </button>
                </div>
                <div
                  className="main--block7__cards--card1__cirkle"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="8000"
                >
                  <h4>
                    <FaUserAlt />
                    <span> By Rachi Card</span>
                  </h4>
                  <h2>
                   Our Favourite Summertime Tommeto<br />
                    <span>
                      {" "}
                      Simply dummy text of the printing and typesetting <br />{" "}
                      industry. Lorem Ipsum
                    </span>
                  </h2>
                  <button>
                    Read More <FaCircleArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecology;
