import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
// import {FaArrowCircleUp} from 'react-icons/fa';
import { Container, Row, Col } from "reactstrap";

import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

// import heroimg1 from '../assets/images/heroimg1.svg';
import heroimg1 from "../assets/images/hero1.png";
import heroimg2 from "../assets/images/heroimg2.png";

import whatsapp from "../assets/images/whatapp-logo.svg";

// mobile
// import hero1Mob from '../assets/images/hero1-mob.svg';
import hero1Mob from "../assets/images/hero1-mob.png";
import hero2Mob from "../assets/images/hero2-mob.jpeg";
// import hero2Mob from '../assets/images/hero2-mobtest.svg';

// services
import serv1 from "../assets/images/serimg1.png";
import serv2 from "../assets/images/serv-2.png";
import serv3 from "../assets/images/serv-3.png";
import serv4 from "../assets/images/servimg4.png";
import serv5 from "../assets/images/servimg5.png";
import serv6 from "../assets/images/servimg6.png";

// mobile
// import serv1Mob from '../assets/images/serv1Mob.svg';
import serv1Mob from "../assets/images/serimg1.png";
import serv2Mob from "../assets/images/serv2-mob.png";
import serv3Mob from "../assets/images/serv3mob.png";
import serv4Mob from "../assets/images/serv4mob.png";
import serv5Mob from "../assets/images/serv5mob.png";
import serv6Mob from "../assets/images/serv6-mob.png";

// cites
// import city1 from "../assets/images/cityimg1.png";
import city1 from "../assets/images/slider1.png";

// import city2 from "../assets/images/city-2.svg";
import city2 from "../assets/images/city-2.png";

// import city3 from "../assets/images/cityimg3.png";
import city3 from "../assets/images/cityimg3.png";

// mobile
import city1mob from "../assets/images/city1-mob.png";
import city2mob from "../assets/images/city2-mob.png";
import city3mob from "../assets/images/city3-mob.png";

// import Slider from "react-slick";

// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
import Counterup from "./../components/Counterup/Counterup";
import "../Styles/Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { useTranslation } from "react-i18next";
// import i18next from "i18next";
// import cookies from "js-cookie";


const Home = () => {
  const currentLanguageCode = localStorage.getItem("i18nextLng") ;
  // const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation();

  // aos-animation
  // useEffect(()=>{
  //   document.cookie = `i18next=; expires=${new Date(0).toUTCString()}`; 
  //   document.cookie = `i18next=${'en'}`; 
  // }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const currentLanguageCode = cookies.get('i18next');
  // console.log(currentLanguageCode);
  // useEffect(() => {

  //   setCurrentLng=currentLanguageCode;
  // });
  return (
    <>
      <section className="hero__section py-2" id="home">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="layout"></div>
            <div className="carousel-item active">
              {currentLanguageCode === "ar" ? (
                <>
                  <img
                    src={heroimg1}
                    className="d-block w-100 web_v"
                    alt="..."
                    style={{ transform: "rotateY(180deg)" }}
                  />
                  <img
                    src={hero1Mob}
                    className="d-block w-100 mob_v d-none"
                    alt="..."
                  />
                </>
              ) : (
                <>
                  <img src={heroimg1} className="d-block w-100 web_v" alt="..." />
                  <img
                    src={hero1Mob}
                    className="d-block w-100 mob_v d-none"
                    alt="..."
                  />
                </>
              )}
            </div>
            {currentLanguageCode === "ar" ? (
              <div className="carousel-item">
                <img
                  src={heroimg2}
                  className="d-block w-100 web_v"
                  alt="..."
                  style={{ transform: "rotateY(180deg)" }}
                />
                <img
                  src={hero2Mob}
                  className="d-block w-100 mob_v d-none"
                  alt="..."
                />
              </div>
            ) : (
              <div className="carousel-item">
                <img src={heroimg2} className="d-block w-100 web_v" alt="..." />
                <img
                  src={hero2Mob}
                  className="d-block w-100 mob_v d-none"
                  alt="..."
                />
              </div>
            )}
          </div>
        </div>

        <Container className="content">
          <Row>
            <Col lg="6" md="6" className="emphty"></Col>
            <Col
              lg="6"
              md="6"
              className="herocol"
              // style={{ margin: "-13vw 52vw" }}
            >
              <div className="hero__content" data-aos="fade-left">
                <div className="text-center my-4 title">
                  {/* <p>{t('Meet_and_Greet')}</p> */}
                  <h2 className="text-center">{t("hero_title")}</h2>
                  {/* <h2>luxury hospitality in Saudi Arabia</h2> */}
                </div>

                {/* <span>{lng}</span> */}
                <p>{t("hero_dec")}</p>
                <div className="btnbook text-center my-3">
                  <a href="http://wa.me/+966556659925" target="blanket">
                    <button type="button" className="btn_hero pb-2">
                      {t("btn_book")}
                      <img src={whatsapp} alt="" className=" mx-2 whatsapp" />
                    </button>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <Services/> */}
      <section className="services my-5" id="services">
        <div className="style-title">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="section__title ">{t("Our_Services")}</h2>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="slider">
          <Container className="px-3">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="4"
                  aria-label="Slide 4"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="5"
                  aria-label="Slide 6"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={serv1} className="d-block w-100 web_v" alt="..." />
                  <img src={serv1Mob} className="d-none w-100 mob_v" alt="..." />

                  <div className="carousel-caption">
                    <div
                      className="my-1 d-flex justify-content-between align-items-center"
                      data-aos="fade-down"
                    >
                      <div className="title">
                        <h5>{t("Meet_and_Greet")}</h5>
                      </div>
                      <div className="btn">
                        <NavLink to="/home/service1">
                          <button type="button" className="btn-serv">
                            {t("Learn_More")}
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={serv2} className="d-block w-100 web_v" alt="..." />
                  <img src={serv2Mob} className="d-none w-100 mob_v" alt="..." />

                  <div className="carousel-caption d-none d-md-block">
                    <div className="my-1 d-flex justify-content-between align-items-center">
                      <div className="title">
                        <h5>{t("Luggage_Transfer")}</h5>
                      </div>
                      <div className="btn">
                        <NavLink to="/home/service2">
                          <button type="button" className="btn-serv">
                            {t("Learn_More")}
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={serv3} className="d-block w-100 web_v" alt="..." />
                  <img
                    src={serv3Mob}
                    className="d-none w-100 mob_v d-none"
                    alt="..."
                  />

                  <div className="carousel-caption d-none d-md-block">
                    <div
                      className="my-1  d-flex justify-content-between align-items-center"
                      data-aos="fade-down"
                    >
                      <div className="title">
                     <h5> {t("Fast_Track_Pass")}</h5>
                        
                      </div>
                      <div className="btn">
                        <NavLink to="/home/service3">
                          <button type="button" className="btn-serv">
                            {t("Learn_More")}
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={serv4} className="d-block w-100 web_v" alt="..." />
                  <img src={serv4Mob} className="d-none w-100 mob_v" alt="..." />

                  <div className="carousel-caption d-none d-md-block">
                    <div
                      className="my-1  d-flex justify-content-between align-items-center"
                      data-aos="fade-down"
                    >
                      <div className="titlt ">
                      <h5>{t("Chauffeur_Services")}</h5>
                      </div>
                      <div className="btn ">
                        <NavLink to="/home/service4">
                          <button type="button" className="btn-serv">
                            {t("Learn_More")}
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={serv5} className="d-block w-100 web_v" alt="..." />
                  <img src={serv5Mob} className="d-none w-100 mob_v" alt="..." />

                  <div className="carousel-caption d-none d-md-block">
                    <div
                      className="my-1  d-flex justify-content-between align-items-center"
                      data-aos="fade-down"
                    >
                      <div className="title">
                        <h5>{t("VIP_Lounge_Access")}</h5>
                      </div>
                      <div className="btn">
                        <NavLink to="/home/service5">
                          <button type="button" className="btn-serv">
                            {t("Learn_More")}
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={serv6} className="d-block w-100 web_v" alt="..." />
                  <img src={serv6Mob} className="d-none w-100 mob_v" alt="..." />

                  <div className="carousel-caption d-none d-md-block">
                    <div
                      className="my-1 d-flex justify-content-between align-items-center"
                      data-aos="fade-down"
                    >
                      <div className="title">
                        <h5>{t("Transit")}</h5>
                      </div>
                      <div className="btn">
                        <NavLink to="/home/service6">
                          <button type="button" className="btn-serv">
                            {t("Learn_More")}
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </Container>
        </div>
      </section>
      {/* Cities */}
      <section className="cities py-3 my-5" id="cities">
        <div className="container my-3">
          <div className="tabs">
            <nav>
              <div
                className="nav nav-tabs"
                id="nav-tab"
                role="tablist"
                style={{ display: "flex", justifyContent: "end", border: "0" }}
              >
                <button
                  className="nav-link active "
                  id="nav-riyadh-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-riyadh"
                  type="button"
                  role="tab"
                  aria-controls="nav-riyadh"
                  aria-selected="true"
                >
                  {t("Riyadh")}
                </button>
                <button
                  className="nav-link mx-5"
                  id="nav-jeddah-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-jeddah"
                  type="button"
                  role="tab"
                  aria-controls="nav-jeddah"
                  aria-selected="false"
                >
                  {t("Jeddah")}
                </button>
                <button
                  className="nav-link "
                  id="nav-mecca-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-mecca"
                  type="button"
                  role="tab"
                  aria-controls="nav-mecca"
                  aria-selected="false"
                >
                  {t("Mecca")}
                </button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active my-4"
                id="nav-riyadh"
                role="tabpanel"
                aria-labelledby="nav-riyadh-tab"
              >
                <div className="row">
                  <div className="col-md-12">
                    <div className="card position-relative">
                      {currentLanguageCode === "ar" ? (
                        <div
                          className="datacard_ar my-3 mx-3"
                          data-aos="fade-right"
                        >
                          <p>
                            <span
                              className="ml-3"
                              style={{
                                marginLeft: "1vw",
                                fontFamily: "Gotham",
                              }}
                            >
                              {t("HAYAKUM")}
                            </span>
                            
                          </p>
                          <p>
                            {t("cityLine1")}
                            {t("cityLine2")}
                            </p>
                        </div>
                      ) : (
                        <div
                          className="datacard my-3 mx-3"
                          data-aos="fade-right"
                        >
                          <p>
                            <span
                              className="mr-2"
                              // style={{ marginLeft: "1vw" }}
                            >
                              {t("HAYAKUM")}
                            </span>
                          </p>
                          <p>
                            {t("cityLine1")}
                            {t("cityLine2")}</p>
                        </div>
                      )}

                      <div className="imgbox">
                        <img
                          src={city1}
                          alt=""
                          className="w-100 city-web"
                          style={{ objectFit: "none", borderRadius: "25px" }}
                        />
                        <img
                          src={city1mob}
                          alt=""
                          className="w-100 city-mob d-none"
                          style={{ objectFit: "cover", borderRadius: "25px" }}
                        />
                      </div>

                      <div className="green_line"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade my-4"
                id="nav-jeddah"
                role="tabpanel"
                aria-labelledby="nav-jeddah-tab"
              >
                <div className="row">
                  <div className="col-md-12">
                    <div className="card position-relative">
                    {currentLanguageCode === "ar" ? (
                        <div
                          className="datacard_ar my-3 mx-3"
                          data-aos="fade-right"
                        >
                          <p>
                            <span
                              className="ml-3"
                              style={{
                                marginLeft: "1vw",
                                fontFamily: "Gotham",
                              }}
                            >
                              {t("HAYAKUM")}
                            </span> 
                          </p>
                          <p>
                            {t("city2Line1")}
                            {t("city2Line2")}</p>
                        </div>
                      ) : (
                        <div
                          className="datacard my-3 mx-3"
                          data-aos="fade-right"
                        >
                          <p>
                            <span
                              className="mr-2"
                              style={{ marginRight: "2vw" }}
                            >
                              {t("HAYAKUM")}
                            </span>
                          {t("city2Line1")}
                            
                          </p>
                          <p>
                            {t("city2Line2")}</p>
                        </div>
                      )}
                      <div className="imgbox">
                        <img
                          src={city2}
                          alt=""
                          className="w-100 city-web"
                          style={{ objectFit: "none", borderRadius: "25px" }}
                        />
                        <img
                          src={city2mob}
                          alt=""
                          className="w-100 d-none city-mob"
                          style={{ objectFit: "cover", borderRadius: "25px" }}
                        />
                      </div>
                      <div className="green_line"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade my-4"
                id="nav-mecca"
                role="tabpanel"
                aria-labelledby="nav-mecca-tab"
              >
                <div className="row">
                  <div className="col-md-12">
                    <div className="card position-relative">
                    {currentLanguageCode === "ar" ? 
                        <div
                          className="datacard_ar my-3 mx-3"
                          data-aos="fade-right"
                        >
                          <p>
                            <span
                              className="ml-3"
                              style={{
                                marginLeft: "1vw",
                                fontFamily: "Gotham",
                              }}
                            >
                              {t("HAYAKUM")}
                            </span>
                            {t("city3Line2")}
                          </p>

                        </div>
                       : 
                        <div
                          className="datacard my-3 mx-3"
                          data-aos="fade-right"
                        >
                          <p>
                            <span
                              className="mr-2"
                              // style={{ marginLeft: "1vw" }}
                            >
                              {t("HAYAKUM")}
                            </span>
                            {/* {t("city3Line1")} */}
                          </p>
                          <p>{t("city3Line2")}</p>
                        </div>
                      }
                      <div className="imgbox">
                        <img
                          src={city3}
                          alt=""
                          className="w-100 city-web"
                          style={{ borderRadius: "25px" }}
                        />
                        <img
                          src={city3mob}
                          alt=""
                          className="w-100 city-mob d-none"
                          style={{ objectFit: "cover", borderRadius: "25px" }}
                        />
                      </div>

                      <div className="green_line"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* counter */}

      <Counterup />

      {/* FAQ */}
      <section className="faq " id="faq">
        <div className="style-title">
          <Container>
            <Row>
              <Col lg="12" className="text_center">
                <h2 className="faq__title text-center">{t("FAQs")}</h2>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="faq_content py-5">
          {/* <p>{currentLanguageCode}</p> */}
          {currentLanguageCode ==="ar" ? 
              <Container className="py-5 arab_v">
                    <div className="row" style={{ justifyContent: "center" }}>
                      <div className="col-md-8 my-5">
                        <div>
                          <MDBContainer className="mt-5" style={{ maxWidth: "1000px" }}>
                            <MDBAccordion>
                              <MDBAccordionItem
                                collapseId={1}
                                headerTitle={t("What_is_special_about_Hayakum_Service")}
                              >
                                {t(
                                  "Our_service_is_defined_by_its_high_standard_of_excellence_promptness_and_individuality_at_affordable_prices"
                                )}
                              </MDBAccordionItem>
                              <MDBAccordionItem
                                collapseId={2}
                                headerTitle={t('Where_do_you_provide_Hayakum_service')}
                              >
                                  {t('It_is_provided_at_King_Khalid_International_Airport_terminal_2_3_4_5')}
                              </MDBAccordionItem>
                              <MDBAccordionItem
                                collapseId={3}
                                headerTitle={t('What_are_the_available_cars_at_a_car_with_chauffeur_services')}
                              >
                                {t('FORD_Taurus_Lexus_ES_GMC_BMW_class7_Mercedes_Bins_VIP_Bus')}
                              </MDBAccordionItem>
                              <MDBAccordionItem
                                collapseId={4}
                                headerTitle={t('Can_I_cancel_my_reservation_or_change_the_reservation_date_and_time')}
                              >
                                  {t('Yes_you_can_pleas_visit_terms_and_conditions_to_know_more')}
                              </MDBAccordionItem>
                            </MDBAccordion>
                          </MDBContainer>
                        </div>
                      </div>
                    </div>
              </Container>
                  :
              <Container className="py-5 en_v">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-md-8 my-5">
              <div>
                <MDBContainer className="mt-5" style={{ maxWidth: "1000px" }}>
                  <MDBAccordion>
                    <MDBAccordionItem
                      collapseId={1}
                      headerTitle={t("What_is_special_about_Hayakum_Service")}
                    >
                      {t(
                        "Our_service_is_defined_by_its_high_standard_of_excellence_promptness_and_individuality_at_affordable_prices"
                      )}
                    </MDBAccordionItem>
                    <MDBAccordionItem
                      collapseId={2}
                      headerTitle={t('Where_do_you_provide_Hayakum_service')}
                    >
                        {t('It_is_provided_at_King_Khalid_International_Airport_terminal_2_3_4_5')}
                    </MDBAccordionItem>
                    <MDBAccordionItem
                      collapseId={3}
                      headerTitle={t('What_are_the_available_cars_at_a_car_with_chauffeur_services')}
                    >
                      {t('FORD_Taurus_Lexus_ES_GMC_BMW_class7_Mercedes_Bins_VIP_Bus')}
                    </MDBAccordionItem>
                    <MDBAccordionItem
                      collapseId={4}
                      headerTitle={t('Can_I_cancel_my_reservation_or_change_the_reservation_date_and_time')}
                    >
                        {t('Yes_you_can_pleas_visit_terms_and_conditions_to_know_more')}
                    </MDBAccordionItem>
                  </MDBAccordion>
                </MDBContainer>
              </div>
            </div>
          </div>
              </Container>
          }

        </div>
      </section>
    </>
  );
};

export default Home;
