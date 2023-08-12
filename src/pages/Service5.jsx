import React ,{useEffect} from 'react'


import whatsapp from "../assets/images/whatapp-logo.svg";

import pattrn1_5 from '../assets/images/cardserv5.svg';

import pattrn2_5 from '../assets/images/brideserv5.svg';

import '../Styles/services5.css'
import { useTranslation } from "react-i18next";
// import cookies from "js-cookie";
// import AOS from "aos";
import 'aos/dist/aos.css';

const Service5 = () => {
  const { t } = useTranslation();
  const currentLanguageCode = localStorage.getItem("i18nextLng");
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='serv5'>
    <div className='Title '>
    <div className="btnbook mx-4">
        <a href="http://wa.me/+966556659925" target="blanket">
          <button type="button" className="btn-hero pb-2">
            {/* {t("btn_book")} */}
            <img src={whatsapp} alt="" className=" mx-2 whatsapp" />
          </button>
        </a>
      </div>
      <div className='container py-3'>
        <div className='row py-5'>
          <div className='col-md-6'>
            <h3>{t('VIP_Lounge_Access')}</h3>
          </div>
        </div>
      </div>
      {
        currentLanguageCode ==="ar" ?
        <div className='ser5_arab_v'>
        <img src={pattrn1_5} alt='..' className='pat1 position-absolute' data-aos="fade-up-right"/>
        <img src={pattrn2_5} alt='..' className='pat2 position-absolute' data-aos="fade-down-left"/>
        </div>
         :
         <div>
         <img src={pattrn1_5} alt='..' className='pat1 position-absolute' data-aos="fade-up-right"/>
         <img src={pattrn2_5} alt='..' className='pat2 position-absolute' data-aos="fade-down-left"/>
         </div>

      }
      

    </div>

    <div className="section-cards py-3">
      <div className="service-cards">
          <div className="container">
            <div className='point my-5'>
            <div className="row_title d-flex" style={{alignItems: "baseline"}}>
                <h4 className="my-4"> {t('VIP_Lounge_Access')}</h4>

              </div>

              <p>{t('ser5_dec1')}</p>
            </div>
          </div>
      </div>
    </div>
    <hr/>
  </div>
  )
}

export default Service5