import React, { useEffect } from "react";

import pattrn1_3 from "../assets/images/cardser3.png";
import pattrn2_3 from "../assets/images/cardtitleser3.png";
import whatsapp from "../assets/images/whatapp-logo.svg";

import "../Styles/services3.css";

// import AOS from "aos";
import "aos/dist/aos.css";

import { useTranslation } from "react-i18next";
// import cookies from "js-cookie";
const Service3 = () => {
  // useEffect(()=>{
  //   AOS.init({duration: 2000});
  // },[])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();
  const currentLanguageCode = localStorage.getItem("i18nextLng");
  return (
    <div className="serv3">
      <div className="Title ">
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
              <h3>{t("Fast_Track_Pass")}</h3>
            </div>
          </div>
        </div>
        <img
          src={pattrn1_3}
          alt=".."
          className="pat1 position-absolute"
          data-aos="fade-up-left"
        />
        {currentLanguageCode === "ar" ? (
          <img
            src={pattrn2_3}
            alt=".."
            className="pat2_ar position-absolute"
            data-aos="fade-down"
          />
        ) : (
          <img
            src={pattrn2_3}
            alt=".."
            className="pat2 position-absolute"
            data-aos="fade-down"
          />
        )}
      </div>

      <div className="section-cards py-3">
        <div className="service-cards">
          <div className="container">
            <div className="point my-5">
              <div className="row_title d-flex" style={{alignItems: "baseline"}}>
                <h4 className="my-4">{t("Fast_Track_Pass")}</h4>
              </div>

              <p>{t("ser3_dec1")}</p>
            </div>
            {/* point2 */}
            {/* <div className='point my-5'>
              <h4 className='my-2'>
              Departure service
              </h4>
              <p>Our agent will greet you  the terminal, help you through the airport process, and accompany you as you board your aircraft.</p>
            </div> */}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Service3;
