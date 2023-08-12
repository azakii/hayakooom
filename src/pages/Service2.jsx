import React, { useEffect } from "react";

import pattrn1_2 from "../assets/images/bagser2.png";
// import pattrn2_2 from '../assets/images/carser2.png';
import pattrn2_2 from "../assets/images/car_ser2.png";

import pattrn3_2 from "../assets/images/treeserv2.svg";
import whatsapp from "../assets/images/whatapp-logo.svg";

import "../Styles/services2.css";

import { useTranslation } from "react-i18next";
// import cookies from "js-cookie";
// import AOS from "aos";
import "aos/dist/aos.css";

const Service2 = () => {
  const { t } = useTranslation();
  const currentLanguageCode = localStorage.getItem("i18nextLng");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="serv2">
      <div className="Title">
      <div className="btnbook mx-4">
        <a href="http://wa.me/+966556659925" target="blanket">
          <button type="button" className="btn-hero pb-2">
            {/* {t("btn_book")} */}
            <img src={whatsapp} alt="" className=" mx-2 whatsapp" />
          </button>
        </a>
      </div>
        <div className="container py-3">
          <div className="row py-5">
            <div className="col-md-6">
              <h3>{t("Luggage_Transfer")}</h3>
            </div>
          </div>
        </div>
        {currentLanguageCode === "ar" ? (
          <div className="ser2_arab">
            <img
              src={pattrn1_2}
              alt=".."
              className="pat1 w-25 position-absolute"
              data-aos="zoom-in-up"
              data-aos-delay="2400"
            />
            <img src={pattrn2_2} alt=".." className="pat2 position-absolute" />
            <img
              src={pattrn3_2}
              alt=".."
              className="pat3 position-absolute"
              data-aos="zoom-in-up"
              data-aos-delay="2400"
            />
          </div>
        ) : (
          <div>
            <img
              src={pattrn1_2}
              alt=".."
              className="pat1 w-25 position-absolute"
              data-aos="zoom-in-up"
              data-aos-delay="2400"
            />
            <img src={pattrn2_2} alt=".." className="pat2 position-absolute" />
            <img
              src={pattrn3_2}
              alt=".."
              className="pat3 position-absolute"
              data-aos="zoom-in-up"
              data-aos-delay="2400"
            />
          </div>
        )}
      </div>

      <div className="section-cards py-3">
        <div className="service-cards">
          <div className="container">
            <div className="point my-5">
              <div className="row_title d-flex" style={{alignItems: "baseline"}}>
                <h4 className="my-4"> {t("Luggage_Transfer")}</h4>
              </div>

              <p>{t("ser2_dec1")}</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Service2;
