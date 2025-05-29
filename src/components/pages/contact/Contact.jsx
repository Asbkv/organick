import React, { useEffect, useState } from "react";
import contactBanner from "../../../assets/images/Banner-contact.png";
import contact1 from "../../../assets/images/contact1.jpg";
import contact2 from "../../../assets/images/contact2.jpg";
import { MdEmail } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import axios from "axios";
import "./Contact.scss";
import Newsletter from "../../ui/About/Newsletter";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function validateForm() {
    if (!name || !email || !company || !subject || !message) {
      toast.error("🦄 Please fill all required fields!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return false;
    }
    return true;
  }

  function productSubmit() {
    const my_id = `-1002651266750`;
    const token = `8060283595:AAHlPUUKMKdltbxxU_llMcL_vO4Y8XjFeuU`;
    const api_key = `https://api.telegram.org/bot${token}/sendMessage`;

    const userData = {
      chat_id: my_id,
      parse_mode: "HTML",
      text: `<b>🛒 Новый заказ</b>\n
<b>👤 Имя:</b> ${name}\n
<b>📧 Почта:</b> ${email}\n
<b>🏢 Компания:</b> ${company}\n
<b>📌 Тема:</b> ${subject}\n
<b>💬 Сообщение:</b>\n<i>${message}</i>`,
    };

    axios
      .post(api_key, userData)
      .then(() => {
        setName("");
        setEmail("");
        setCompany("");
        setSubject("");
        setMessage("");
        setModal(false);
        sacMesage();
      })
      .catch((error) => {
        toast.error("🦄 Error sending message!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.error("Error:", error);
      });
  }

  const sacMesage = () => {
    toast.success("🦄 Message sent successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleSubmitClick = () => {
    if (validateForm()) {
      setModal(true);
    }
  };

  return (
    <div id="contact">
      <div
        className="contact--bg"
        style={{
          backgroundImage: `url(${contactBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="container">
        <div className="contact">
          <div className="contact--block1">
            <img src={contact1} alt="img" className="contact-image" />
            <div className="contact--block1__text">
              <h1>We'd love to talk about how we can work together.</h1>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
              <div className="contact-info-container">
                <div className="contact--block1__text--card">
                  <a href="#">
                    <MdEmail />
                  </a>
                  <h2>
                    Massege <br /> <span>support@organic.com</span>
                  </h2>
                </div>

                <div className="contact--block1__text--card">
                  <a href="#">
                    <FaPhoneAlt />
                  </a>
                  <h2>
                    Contact <br /> <span>+1 (234) 567-890</span>
                  </h2>
                </div>
              </div>

              <div className="contact--block1__text--icon">
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaPinterest />
                </a>
              </div>
            </div>
          </div>

          <div className="contact--block2">
            <img src={contact2} alt="Our Farms" className="farm-image" />
            <div className="contact--block2__text">
              <h1>Our Farms</h1>
              <p>
                Established fact that a reader will be distracted by the
                readable content of a page when looking a layout. The point of
                using.
              </p>
              <div className="location-cards">
                <div className="contact--block2__text--card">
                  <CiLocationOn />
                  <h4>
                    New York, USA: <br />{" "}
                    <span>299 Park Avenue New York, New York 10171</span>
                  </h4>
                </div>
                <div className="contact--block2__text--card">
                  <CiLocationOn />
                  <h4>
                    London, UK: <br />{" "}
                    <span>30 Stamford Street, London SE1 9LQ</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="contact--block3">
            <h2 className="form-title">Get In Touch</h2>
            <div className="contact-form-grid">
              <div className="form-group">
                <label>Full Name*</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="form-group">
                <label>Your Email*</label>
                <input
                  type="email"
                  placeholder="example@yourmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="form-group">
                <label>Company*</label>
                <input
                  type="text"
                  placeholder="your company name here"
                  onChange={(e) => setCompany(e.target.value)}
                  value={company}
                />
              </div>
              <div className="form-group">
                <label>Subject*</label>
                <input
                  type="text"
                  placeholder="how can we help"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                />
              </div>
              <div className="form-group full-width">
                <label>Message*</label>
                <textarea
                  placeholder="hello there, i would like to talk about how to..."
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  rows="5"
                ></textarea>
              </div>
            </div>

            <button className="submit-button" onClick={handleSubmitClick}>
              Send Message
            </button>
          </div>

          {modal && (
            <div className="modal-overlay">
              <div className="modal">
                <h1>Подтверждение данных</h1>
                <div className="modal-content">
                  <p>
                    <strong>Имя:</strong> {name}
                  </p>
                  <p>
                    <strong>Email:</strong> {email}
                  </p>
                  <p>
                    <strong>Компания:</strong> {company}
                  </p>
                  <p>
                    <strong>Тема:</strong> {subject}
                  </p>
                  <p>
                    <strong>Сообщение:</strong> {message}
                  </p>
                </div>
                <div className="modal-actions">
                  <button onClick={() => setModal(false)}>Отменить</button>
                  <button onClick={productSubmit}>Подтвердить отправку</button>
                </div>
                <button
                  className="modal-close"
                  onClick={() => setModal(false)}
                  aria-label="Закрыть"
                >
                  &times;
                </button>
              </div>
            </div>
          )}

          <Newsletter />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
