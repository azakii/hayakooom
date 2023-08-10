import React, { useEffect } from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

import pattern from "../../assets/images/patternFooter2.png";
// import pattern from '../../assets/images/'
import sgslogo from "../../assets/images/sgspower.svg";

import linkedin from "../../assets/images/LinkedIn.svg";
import instgram from "../../assets/images/Instagram.svg";
// import tiktok from "../../assets/images/TikTok.svg";
import twiteer from "../../assets/images/Twitter.svg";
import whatsapp from "../../assets/images/whatapp-logo.svg";

import Qr from "../../assets/images/Qr-footer.png";

import logo from "../../assets/images/footer-logo.svg";


// pdf
import termspdf from '../../assets/terms_and_conditions.pdf'
import AOS from "aos";
import "aos/dist/aos.css";

import "./Footer.css";


import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentLanguageCode = localStorage.getItem("i18nextLng") ;


  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])
  return (
    <div className="footer position-relative " id="footer">
      <div className="container footer_web" data-aos="fade-down">
        <div className="row">
          <div className="col-md-3">
            <a href="/home">
              <img
                src={logo}
                alt=""
                className="footerlogo"
                style={{ width: "35%" }}
              />
            </a>
          </div>
          <div className="col-md-2">
            <div>
              <h5 className="my-4">{t('Services')}</h5>
              <a href="/home/service1">{t('Meet_and_Greet')}</a>
              <a href="/home/service2">{t('Luggage_Transfer')}</a>
              <a href="/home/service3">{t('Fast_Track_Pass')}</a>
              <a href="/home/service4">{t('Chauffeur_Services')}</a>
              <a href="/home/service5">{t('VIP_Lounge_Access')}</a>
              <a href="/home/service6">{t('Transit')}</a>
            </div>
          </div>

          <div className="col-md-2">
            <div>
              <h5 className="my-4">{t('Support')}</h5>
              <span className="bar"> </span>
              {/* <a href="/">Help</a> */}
              <a href="mailto:hayakum@saudiags.com?subject=HayaKum&body=Hello">
                {t('Contact_us')}
              </a>
              {/* <a href="/">Terms of service</a> */}
              {/* <a href="/">Privacy policy</a> */}
            </div>
          </div>
          <div className="col-md-3">
            <div>
                
              <h5 className="my-4">{t('Terms_and_Conditions')}</h5>
              {/* <span className="bar"> </span> */}
               
              <a href={termspdf} target="blanket">  {t('Terms_of_Services')}</a>
            </div>
          </div>

          <div className="col-md-2">
            <div className="bar-social">
                
              <h5 className="my-4">{t('Stay_Connected')}</h5>

              <div className="icons">
                <div className="social d-flex my-4 align-items-center">
                  <a
                    href="https://www.linkedin.com/company/saudiags/"
                    target="blanket"
                  >
                    <img src={linkedin} alt="" className="w-75" />
                  </a>
                  <a
                    href="https://www.instagram.com/saudi_gs/"
                    target="blanket"
                  >
                    <img src={instgram} alt="" className="w-75" />
                  </a>

                  <a
                    href="https://twitter.com/saudi_gs?s=11&t=kPK6zr2ZaJKw7UpfX0U-OA"
                    target="blanket"
                  >
                    <img src={twiteer} alt="" className="w-75" />
                  </a>
                  <a href="/#">
                    <img
                      src={whatsapp}
                      alt=""
                      className="w-75 d-none whatsapp"
                    />
                  </a>
                </div>
                <a 
                  href="http://wa.me/+966556659925"
                  target="blanket"
                >
                <img src={Qr} alt="" className="qr-logo" />
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile v */}
      {
        currentLanguageCode === 'ar' ? 
        <div className="d-none footer_mob text-center">
        {/* <img src={logo} alt='' className='footerlogo' style={{width: "35%"}}/> */}
        <div>
          <MDBContainer className="mt-5 ar_v" style={{ maxWidth: "1000px" }}>
            <MDBAccordion>
              <MDBAccordionItem collapseId={1} headerTitle={(t('Services'))}>
                <div className="contentlink">
                <a href="/home/service1">{t('Meet_and_Greet')}</a>
              <a href="/home/service2">{t('Luggage_Transfer')}</a>
              <a href="/home/service3">{t('Fast_Track_Pass')}</a>
              <a href="/home/service4">{t('Chauffeur_Services')}</a>
              <a href="/home/service5">{t('VIP_Lounge_Access')}</a>
              <a href="/home/service6">{t('Transit')}</a>
                </div>
              </MDBAccordionItem>
              <MDBAccordionItem collapseId={2} headerTitle={t('Support')}>
                <div className="contentlink">
                  {/* <a href="/">Help</a> */}
                  <a href="mailto:hayakum@saudiags.com?subject=HayaKum&body=Hello">
                  {t('Contact_us')}
                  </a>
                  {/* <a href="/">Terms of service</a> */}
                  {/* <a href="/">Privacy policy</a> */}
                </div>
              </MDBAccordionItem>
              <MDBAccordionItem
                collapseId={3}
                headerTitle={t('Terms_and_Conditions')}
              >
                <div className="contentlink">
                  <a href={termspdf} target="blanket">{t('Terms_of_Services')}</a>
                </div>
              </MDBAccordionItem>
            </MDBAccordion>
          </MDBContainer>
        </div>
        {/* connect */}
        <div className="connect container">
          <div className="bar-social text-center">
            <h5 className="my-4">{t('Stay_Connected')}</h5>

            <div className="icons text-center">
              <div className="social d-flex my-4 align-items-center">
                <a
                  href="https://www.linkedin.com/company/saudiags/"
                  target="blanket"
                  className="mx-1"
                >
                  <img src={linkedin} alt="" className="w-75 " />
                </a>
                <a
                  href="https://www.instagram.com/saudi_gs/"
                  target="blanket"
                  className="mx-1"
                >
                  <img src={instgram} alt="" className="w-75 " />
                </a>
                <a
                  href="https://twitter.com/saudi_gs?s=11&t=kPK6zr2ZaJKw7UpfX0U-OA"
                  target="blanket"
                  className="mx-1"
                >
                  <img src={twiteer} alt="" className="w-75" />
                </a>
                <a
                  href="http://wa.me/+966556659925"
                  target="blanket"
                  className="mx-1"
                >
                  <img src={whatsapp} alt="" className=" d-none whatsapp" />
                </a>
              </div>

              <img src={Qr} alt="" className="qr-logo" />
            </div>
          </div>
        </div>
        </div>
        :
        <div className="d-none footer_mob text-center">
        {/* <img src={logo} alt='' className='footerlogo' style={{width: "35%"}}/> */}
        <div>
          <MDBContainer className="mt-5 en_v" style={{ maxWidth: "1000px" }}>
            <MDBAccordion>
              <MDBAccordionItem collapseId={1} headerTitle={(t('Services'))}>
                <div className="contentlink">
                <a href="/home/service1">{t('Meet_and_Greet')}</a>
              <a href="/home/service2">{t('Luggage_Transfer')}</a>
              <a href="/home/service3">{t('Fast_Track_Pass')}</a>
              <a href="/home/service4">{t('Chauffeur_Services')}</a>
              <a href="/home/service5">{t('VIP_Lounge_Access')}</a>
              <a href="/home/service6">{t('Transit')}</a>
                </div>
              </MDBAccordionItem>
              <MDBAccordionItem collapseId={2} headerTitle={t('Support')}>
                <div className="contentlink">
                  {/* <a href="/">Help</a> */}
                  <a href="mailto:hayakum@saudiags.com?subject=HayaKum&body=Hello">
                  {t('Contact_us')}
                  </a>
                  {/* <a href="/">Terms of service</a> */}
                  {/* <a href="/">Privacy policy</a> */}
                </div>
              </MDBAccordionItem>
              <MDBAccordionItem
                collapseId={3}
                headerTitle={t('Terms_and_Conditions')}
              >
                <div className="contentlink">
                  <a href={termspdf} target="blanket">{t('Terms_of_Services')}</a>
                </div>
              </MDBAccordionItem>
            </MDBAccordion>
          </MDBContainer>
        </div>
        {/* connect */}
        <div className="connect container">
          <div className="bar-social text-center">
            <h5 className="my-4">{t('Stay_Connected')}</h5>

            <div className="icons text-center">
              <div className="social d-flex my-4 align-items-center">
                <a
                  href="https://www.linkedin.com/company/saudiags/"
                  target="blanket"
                  className="mx-1"
                >
                  <img src={linkedin} alt="" className="w-75 " />
                </a>
                <a
                  href="https://www.instagram.com/saudi_gs/"
                  target="blanket"
                  className="mx-1"
                >
                  <img src={instgram} alt="" className="w-75 " />
                </a>
                <a
                  href="https://twitter.com/saudi_gs?s=11&t=kPK6zr2ZaJKw7UpfX0U-OA"
                  target="blanket"
                  className="mx-1"
                >
                  <img src={twiteer} alt="" className="w-75" />
                </a>
                <a
                  href="http://wa.me/+966556659925"
                  target="blanket"
                  className="mx-1"
                >
                  <img src={whatsapp} alt="" className=" d-none whatsapp" />
                </a>
              </div>

              <img src={Qr} alt="" className="qr-logo" />
            </div>
          </div>
        </div>
        </div>
      }


      {/* ============================================== */}
      <div className="pattern my-5">
        <img src={pattern} alt="" className="w-100" />
        <img src={sgslogo} alt="" className="sgslogo" />
      </div>
    </div>
  );
};

export default Footer;
