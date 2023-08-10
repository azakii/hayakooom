import React, { useEffect } from "react";

import pattrn1 from "../assets/images/serv1-patr1.png";
import pattrn2 from "../assets/images/serv1-part2.png";
import pattrn3 from "../assets/images/serv1-part3.png";

import pattrn2ar from "../assets/images/serv1arb.svg";


import whatsapp from "../assets/images/whatapp-logo.svg";

import "../Styles/service1.css";
// import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
// import cookies from "js-cookie";

// import AOS from "aos";
import "aos/dist/aos.css";

const Service1 = () => {
  // useEffect(()=>{
  //   AOS.init({
  //     duration: 800,
  //     once: true
  //   });

  // },[])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();
  const currentLanguageCode = localStorage.getItem("i18nextLng");
  // useEffect(() => {
  //   document.cookie = `i18next=; expires=${new Date(0).toUTCString()}`;
  //   document.cookie = `i18next=${"en"}`;
  // });
  // console.log(currentLanguageCode);
  return (
    <div className="serv1">
      {currentLanguageCode === "ar" ? (
        <div className="Title title_arab_v">
          <div className="container py-3">
            <div className="row py-5">
              <div className="col-md-6">
                <h3>{t("Meet_and_Greet")}</h3>
              </div>
            </div>
          </div>

          <>
            <img
              src={pattrn1}
              alt=".."
              className="pat1 w-25 position-absolute"
              data-aos="fade-up"
            />
            <img
              src={pattrn2ar}
              alt=".."
              className="pat2 position-absolute"
              data-aos="fade-up"
            />
            <img
              src={pattrn3}
              alt=".."
              className="pat3 position-absolute"
              data-aos="fade-left"
            />
          </>
        </div>
      ) : (
        <div className="Title">
          <div className="container py-3">
            <div className="row py-5">
              <div className="col-md-6">
                <h3>{t("Meet_and_Greet")}</h3>
              </div>
            </div>
          </div>

          <>
            <img
              src={pattrn1}
              alt=".."
              className="pat1 w-25 position-absolute"
              data-aos="fade-up"
            />
            <img
              src={pattrn2}
              alt=".."
              className="pat2 position-absolute"
              data-aos="fade-up"
            />
            <img
              src={pattrn3}
              alt=".."
              className="pat3 position-absolute"
              data-aos="fade-left"
            />
          </>
        </div>
      )}

      <div className="section-cards py-3">
        <div className="service-cards">
          <div className="container">
            <div className="point my-5">
              <div className="row_title d-flex" style={{alignItems: "baseline"}}>
                <h4 className="my-4">{t("s1_Arrival_service")}</h4>
                <div className="btnbook mx-4">
                  <a href="http://wa.me/+966556659925" target="blanket">
                    <button type="button" className="btn-hero pb-2">
                      {t("btn_book")}
                      <img src={whatsapp} alt="" className=" mx-2 whatsapp" />
                    </button>
                  </a>
                </div>
              </div>

              <p>{t("ser1_dec1")}</p>
            </div>
            {/* point2 */}
            <div className="point my-5">
            <div className="row_title d-flex" style={{alignItems: "baseline"}}>
                <h4 className="my-4">{t("s1_Departure_service")}</h4>

                <div className="btnbook mx-4">
                  <a href="http://wa.me/+966556659925" target="blanket">
                    <button type="button" className="btn-hero pb-2">
                      {t("btn_book")}
                      <img src={whatsapp} alt="" className=" mx-2 whatsapp" />
                    </button>
                  </a>
                </div>
              </div>
              <p>{t("ser1_dec2")}</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Service1;
