import React, { useEffect } from "react";

import pattrn1_4 from "../assets/images/Chauffer-1.gif";
// import pattrn2_4 from '../assets/images/carser4.png';
// import pattrn2_4 from "../assets/images/carser4.png";

// import pattrn3_4 from "../assets/images/treeser4.png";
import whatsapp from "../assets/images/whatapp-logo.svg";

import "../Styles/services4.css";

import { useTranslation } from "react-i18next";
// import cookies from "js-cookie";
// import AOS from "aos";
import "aos/dist/aos.css";

const Service4 = () => {
  // useEffect(()=>{
  //   AOS.init({duration: 2000});
  // },[])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();
  const currentLanguageCode = localStorage.getItem("i18nextLng");
  return (
    <div className="serv4">
      <div className="Title">
        <div className="container py-3">
          <div className="row py-5">
            <div className="col-md-6">
              <h3>{t("Chauffeur_Services")}</h3>
            </div>
          </div>
        </div>
        {currentLanguageCode === "ar" ? (
          <div className="ser4_arab_v">
            {/* <img
              src={pattrn1_4}
              alt=".."
              className="pat1 position-absolute"
              data-aos="zoom-in-up"
              data-aos-delay="2400"
            />
            <img src={pattrn2_4} alt=".." className="pat2 position-absolute" />
            <img
              src={pattrn3_4}
              alt=".."
              className="pat3 position-absolute"
              data-aos="zoom-in-up"
              data-aos-delay="2400"
            /> */}
            <div className="meet">
              <div className="m-auto text-center">  
                  <img
                      src={pattrn1_4}
                      alt=".."
                      className="pat1 w-75"
                      data-aos="fade-up"
                    />
                    </div>
              </div>
          </div>
        ) : (
          // <div className="ser4_en_v">
          //   <img
          //     src={pattrn1_4}
          //     alt=".."
          //     className="pat1 position-absolute"
          //     data-aos="zoom-in-up"
          //     data-aos-delay="2400"
          //   />
          //   <img src={pattrn2_4} alt=".." className="pat2 position-absolute" />
          //   <img
          //     src={pattrn3_4}
          //     alt=".."
          //     className="pat3 position-absolute"
          //     data-aos="zoom-in-up"
          //     data-aos-delay="2400"
          //   />
          // </div>
          <div className="meet">
          <div className="m-auto text-center">  
              <img
                  src={pattrn1_4}
                  alt=".."
                  className="pat1 w-75"
                  data-aos="fade-up"
                />
                </div>
          </div>
        )}
      </div>

      <div className="section-cards py-3">
        <div className="service-cards">
          <div className="container">
            <div className="point my-5">
              <div className="row_title d-flex" style={{alignItems: "baseline"}}>
                <h4 className="my-4">{t("Airport_transfer")}</h4>
                <div className="btnbook mx-3">
                  <a href="http://wa.me/+966556659925" target="blanket">
                    <button type="button" className="btn-hero pb-2">
                      {t("btn_book")}
                      <img src={whatsapp} alt="" className=" mx-2 whatsapp" />
                    </button>
                  </a>
                </div>
              </div>

              <p>{t("ser4_dec1")}</p>
            </div>
            {/* point2 */}
            <div className="point my-5">
              <div className="row_title d-flex" style={{alignItems: "baseline"}}>
                <h4 className="my-4">{t("Full_day_transfer")}</h4>
                <div className="btnbook mx-3">
                  <a href="http://wa.me/+966556659925" target="blanket">
                    <button type="button" className="btn-hero pb-2">
                      {t("btn_book")}
                      <img src={whatsapp} alt="" className=" mx-2 whatsapp" />
                    </button>
                  </a>
                </div>
              </div>

              <p>{t("ser4_dec2")}</p>
            </div>
            {/* point3 */}
            <div className="point my-5">
              <div className="row_title d-flex" style={{alignItems: "baseline"}}>
                <h4 className="my-4">{t("Within_the_city")}</h4>
                <div className="btnbook mx-3">
                  <a href="http://wa.me/+966556659925" target="blanket">
                    <button type="button" className="btn-hero pb-2">
                      {t("btn_book")}
                      <img src={whatsapp} alt="" className=" mx-2 whatsapp" />
                    </button>
                  </a>
                </div>
              </div>
              <p>
              {t("ser4_dec3")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Service4;
