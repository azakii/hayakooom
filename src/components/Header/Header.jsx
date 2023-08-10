import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
// import cookies from 'js-cookie'

import "./Header.css";

// import { Container , Row } from 'reactstrap'

const nav__links = [
  {
    path: "home/service1",
    display: "Meet_and_Greet",
  },
  {
    path: "home/service2",
    display: "Luggage_Transfer",
  },
  {
    path: "home/service3",
    display: "Fast_Track_Pass",
  },
  {
    path: "home/service4",
    display: "Chauffeur_Services",
  },
  {
    path: "home/service5",
    display: "VIP_Lounge_Access",
  },
  {
    path: "home/service6",
    display: "Transit",
  },
];


const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // toggle-nav
  const handleCollapse = () => {
    // console.log("handleCollapse");
    var nav = document.getElementById("navbarSupportedContent");
    var btn = document.getElementById("navbarBtn");
    nav.classList.remove("show");
    btn.classList.add("collapsed");
  };
  const [t] = useTranslation();


  const currentLanguageCode = localStorage.getItem("i18nextLng") ;

  const [currentLng, setCurrentLng] = useState(currentLanguageCode);
  useEffect(() => {
    // localStorage.getItem('')
    if (currentLng === "en") {
      document.body.dir = "ltr";
    } else if (currentLng === "ar") {
      document.body.dir = "rtl";
    }
  });

  localStorage.removeItem("lngstyle");

  const handleChangeLng = (lng) => {
    i18next.changeLanguage(lng);
    localStorage.setItem("lng", lng);
    // localStorage.setItem("lngstyle", currentLng);
  };
  // useEffect(()=>{
  //   document.cookie = `i18next=; expires=${new Date(0).toUTCString()}`;
  //   document.cookie = `i18next=${'en'}`;
  // })

  return (
    <header className="header">
      <nav
        id="navbar-example"
        className="navbar navbar-expand-lg "
        data-aos="fade-down"
      >
        <div className="container">
          <NavLink className="navbar-brand" to="home">
            <img src={logo} alt="logo" className="w-75" />
          </NavLink>
          {/* lang */}
          <div className="btn-group v_mobile d-none">
            <select
              className="select_lan mx-3"
              onChange={(e) => {
                handleChangeLng(e.target.value);
                setCurrentLng(e.target.value);
              }}
            >
              <option value="en">En</option>
              <option value="ar">عربي</option>
            </select>
            {/* collapse */}
            <button
              className="navbar-toggler"
              type="button"
              id="navbarBtn"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          {/* menue */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navigation">
              <ul className="menu" style={{ alignItems: "start" }}>
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      onClick={handleCollapse}
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                      // data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                    >
                      {t(`${item.display}`)}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="btn-group" style={{ marginLeft: "3rem" }}>
              {/* <select
                className="select_lan mx-3"
                onChange={(e) => {
                  i18next.changeLanguage(e.target.value);
                  document.cookie = `i18next=; expires=${new Date(
                    0
                  ).toUTCString()}`;
                  document.cookie = `i18next=${e.target.value}`;
                }}
                onClick={(e) => {
                  setCurrentLng(e.target.value);
                  document.cookie = `i18next=; expires=${new Date(
                    0
                  ).toUTCString()}`;
                  document.cookie = `i18next=${e.target.value}`;
                }}
              >
                <option value="en">En</option>
                <option value="ar">عربى</option>
              </select> */}
              {/* {i18n.language === "en" && ( */}
                <select
                  className="select_lan mx-3"
                  onChange={(e) => {
                    handleChangeLng(e.target.value);
                    setCurrentLng(e.target.value);
                  }}
                >
                  <option value="en">En</option>
                  <option value="ar">عربي</option>
                </select>
              {/* )} */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
