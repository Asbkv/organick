import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Admin from "./components/pages/admin/Admin";
import MainPage from "./components/pages/main/MainPage";
import Shop from "./components/pages/shop/Shop";
import Basket from "./components/pages/basket/Basket";
import About from "./components/ui/About/About";
import Category from "./components/pages/category/Category";
import Contact from "./components/pages/contact/Contact";
import Error from "./components/Error/Error";
import { ToastContainer } from "react-toastify";
import Details from "./components/ui/Details/Details";

function App() {
  const routes = [
    {
      id: 1,
      path: "/",
      element: <MainPage />,
    },
    {
      id: 2,
      path: "/admin",
      element: <Admin />,
    },
    {
      id: 3,
      path: "/shop",
      element: <Shop />,
    },
    {
      id: 4,
      path: "/details/:productId",
      element: <Details/>
    },
    {
      id: 5,
      path: "/basket",
      element: <Basket />,
    },
    {
      id: 6,
      path: "/about",
      element: <About />,
    },
    {
      id: 7,
      path: "/category/:catName",
      element: <Category />,
    },
    {
      id: 8,
      path: "/contact",
      element: <Contact />,
    },
    {
      id: 9,
      path: "/shop",
      element: <Shop />,
    },
    {
      id: 10,
      path: "/*",
      element: <Error />,
    },
  ];

  return (
    <div className="app">
       <ToastContainer />
      <Header />
      <Routes>
        {routes.map((el) => (
          <Route path={el.path} element={el.element} key={el.id} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
