// import React, { useContext, useState } from "react";
// import "./Header.scss";
// import logo from "../../../assets/images/Logo.header.svg";
// import { Link } from "react-router-dom";
// import { IoIosSearch } from "react-icons/io";
// import { IoCartOutline } from "react-icons/io5";
// import { ProductContext } from "../../../context/context";

// const Header = () => {
//   const { basket } = useContext(ProductContext);
//   const [menuActive, setMenuActive] = useState(false);

//   const toggleMenu = () => {
//     setMenuActive(!menuActive);
//   };

//   return (
//     <div id="header">
//       <div className="container">
//         <div className="header">
//           <img src={logo} alt="img" />

//           <div className={`header--nav ${menuActive ? "active" : ""}`}>
//             <Link to={"/"} onClick={() => setMenuActive(false)}>
//               Home
//             </Link>
//             <Link to={"/about"} onClick={() => setMenuActive(false)}>
//               About
//             </Link>
//             <Link to={"/contact"} onClick={() => setMenuActive(false)}>
//               Contact
//             </Link>
//             <Link to={"/shop"} onClick={() => setMenuActive(false)}>
//               Shop
//             </Link>
//             <Link to={"/admin"} onClick={() => setMenuActive(false)}>
//               Admin
//             </Link>
//           </div>

//           <div className="header--search">
//             <div className="header--search__input">
//               <input type="text" placeholder="Search..." />
//               <a href="#">
//                 <IoIosSearch />
//               </a>
//             </div>

//             <Link to={"/basket"} className="header--search__cart">
//               <a href="#">
//                 <IoCartOutline />
//               </a>
//               <h3>Cart ({basket.length})</h3>
//             </Link>

//             <div
//               className={`hamburger ${menuActive ? "active" : ""}`}
//               onClick={toggleMenu}
//             >
//               <span></span>
//               <span></span>
//               <span></span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;


import React, { useContext, useState } from "react";
import "./Header.scss";
import logo from "../../../assets/images/Logo.header.svg";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { ProductContext } from "../../../context/context";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const { basket } = useContext(ProductContext);
  const [menuActive, setMenuActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    repeatPassword: ""
  });
  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem("currentUser")) || null;
  });

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAuth = (e) => {
    e.preventDefault();
    
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    if (isRegister) {
      // Логика регистрации
      if (!formData.username || !formData.password || !formData.repeatPassword) {
        return toast.error("Заполните все поля");
      }
      
      if (formData.password.length < 6) {
        return toast.error("Пароль должен содержать минимум 6 символов");
      }
      
      if (formData.password !== formData.repeatPassword) {
        return toast.error("Пароли не совпадают");
      }
      
      if (users.some(user => user.username === formData.username)) {
        return toast.error("Пользователь с таким именем уже существует");
      }
      
      const newUser = {
        username: formData.username,
        password: formData.password
      };
      
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      toast.success("Регистрация прошла успешно!");
      setIsRegister(false);
      setFormData({
        username: "",
        password: "",
        repeatPassword: ""
      });
    } else {
      // Логика входа
      const user = users.find(u => 
        u.username === formData.username && 
        u.password === formData.password
      );
      
      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        setCurrentUser(user);
        setModalOpen(false);
        toast.success(`Добро пожаловать, ${user.username}!`);
        setFormData({
          username: "",
          password: "",
          repeatPassword: ""
        });
      } else {
        toast.error("Неверное имя пользователя или пароль");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    toast.success("Вы успешно вышли из системы");
  };

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <div id="header">
        <div className="container">
          <div className="header">
            <img src={logo} alt="логотип" />

            <div className={`header--nav ${menuActive ? "active" : ""}`}>
              <Link to={"/"} onClick={() => setMenuActive(false)}>
                Главная
              </Link>
              <Link to={"/about"} onClick={() => setMenuActive(false)}>
                О нас
              </Link>
              <Link to={"/contact"} onClick={() => setMenuActive(false)}>
                Контакты
              </Link>
              <Link to={"/shop"} onClick={() => setMenuActive(false)}>
                Магазин
              </Link>
              <Link to={"/admin"} onClick={() => setMenuActive(false)}>
                Админ
              </Link>
            </div>

            <div className="header--search">
              <div className="header--search__input">
                <input type="text" placeholder="Поиск..." />
                <a href="#">
                  <IoIosSearch />
                </a>
              </div>

              <Link to={"/basket"} className="header--search__cart">
                <a href="#">
                  <IoCartOutline />
                </a>
                <h3>Корзина ({basket.length})</h3>
              </Link>

              <div 
                className="header--search__user"
                onClick={currentUser ? handleLogout : toggleModal}
              >
                <a href="#">
                  <FaRegUser />
                </a>
                <h3>{currentUser ? "Выйти" : "Войти"}</h3>
              </div>

              <div
                className={`hamburger ${menuActive ? "active" : ""}`}
                onClick={toggleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="auth-modal">
          <div className="auth-modal__content">
            <button 
              className="auth-modal__close"
              onClick={toggleModal}
            >
              &times;
            </button>
            
            <h2>{isRegister ? "Регистрация" : "Вход"}</h2>
            
            <form onSubmit={handleAuth}>
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  placeholder="Имя пользователя"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Пароль"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <button 
                  type="button" 
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              
              {isRegister && (
                <div className="form-group password-input">
                  <input
                    type={showRepeatPassword ? "text" : "password"}
                    name="repeatPassword"
                    placeholder="Повторите пароль"
                    value={formData.repeatPassword}
                    onChange={handleInputChange}
                    required={isRegister}
                  />
                  <button 
                    type="button" 
                    className="toggle-password"
                    onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                  >
                    {showRepeatPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              )}
              
              <button type="submit" className="auth-button">
                {isRegister ? "Зарегистрироваться" : "Войти"}
              </button>
            </form>
            
            <p className="auth-toggle">
              {isRegister ? "Уже есть аккаунт? " : "Ещё не зарегистрированы? "}
              <button 
                type="button"
                onClick={() => {
                  setIsRegister(!isRegister);
                  setFormData({
                    username: "",
                    password: "",
                    repeatPassword: ""
                  });
                }}
              >
                {isRegister ? "Войти" : "Регистрация"}
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
