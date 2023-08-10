import React ,{useEffect} from 'react'


import pattrn1_6 from '../assets/images/manser6.png';
import pattrn2_6 from '../assets/images/Transitser6.png';
import pattrn3_6 from '../assets/images/arrowser6.png';
import whatsapp from "../assets/images/whatapp-logo.svg";

import '../Styles/services6.css'

// import AOS from "aos";
import 'aos/dist/aos.css';

import { useTranslation } from "react-i18next";
// import cookies from "js-cookie";

const Service6 = () => {
  const { t } = useTranslation();
  const currentLanguageCode = localStorage.getItem("i18nextLng");
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='serv6'>
    <div className='Title'>
      <div className='container py-3'>
        <div className='row py-5'>
          <div className='col-md-6'>
            <h3>{t('Transit')}</h3>
          </div>
        </div>
      </div>
      {
        currentLanguageCode ==="ar" ? 
        <div className='ser6_arab'>
        <img src={pattrn1_6} alt='..' className='pat1 position-absolute' data-aos="fade-right" data-aos-delay="500"/>
        <img src={pattrn2_6} alt='..' className='pat2 position-absolute' data-aos="fade-right" data-aos-delay="400"/>
        <img src={pattrn3_6} alt='..' className='pat3 position-absolute' data-aos="fade-right"/>
  
        </div>
        
        :
        <div>
        <img src={pattrn1_6} alt='..' className='pat1 position-absolute' data-aos="fade-right" data-aos-delay="500"/>
        <img src={pattrn2_6} alt='..' className='pat2 position-absolute' data-aos="fade-right" data-aos-delay="400"/>
        <img src={pattrn3_6} alt='..' className='pat3 position-absolute' data-aos="fade-right"/>
  
        </div>
      }

    
    
    </div>

    <div className="section-cards py-3">
      <div className="service-cards">
          <div className="container">
            <div className='point my-5'>
            <div className="row_title d-flex" style={{alignItems: "baseline"}}>
                <h4 className="my-4"> 
              {t('Transit')}
                </h4>
                <div className="btnbook mx-3">
                  <a href="http://wa.me/+966556659925" target="blanket">
                    <button type="button" className="btn-hero pb-2">
                      {t("btn_book")}
                      <img src={whatsapp} alt="" className=" mx-2 whatsapp" />
                    </button>
                  </a>
                </div>
              </div>
              <h4 className='my-4'>
              </h4>
              <p>{t('ser6_dec1')}</p>
            </div>
          </div>
      </div>
    </div>
    <hr/>
  </div>
  )
}

export default Service6