import React, { useEffect, useState } from 'react'
import count1 from '../../assets/images/count1.svg';
import count2 from '../../assets/images/count2.svg';
import count3 from '../../assets/images/count3.svg';
// import count4 from '../../assets/images/count4.svg';
import count5 from '../../assets/images/count5.svg';

import num3 from '../../assets/images/num3.svg';

import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './Counterup.css'

import AOS from "aos";
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";


const Counterup = () => {
    useEffect(()=>{
        AOS.init({duration: 2000});
      },[])
    const [counterStart , setCounterStart] = useState(false);

  const { t } = useTranslation();

  return (
    <>
    <ScrollTrigger onEnter={()=> setCounterStart(true)} onExit={() => setCounterStart(false)}>
        <div className='counterBox my-3 py-5'>
            <div className='container py-3' data-aos="fade-down">
                <div className='row' style={{justifyContent: "space-around"}}>
                    <div className='col-md-2 text-center my-3'>
                        <img src={count1} alt='..' className='w-75'/>
                        <h4 className='my-3'>
                            {counterStart && 
                            <CountUp start={0} end={1000} duration={3} delay={0}/>
                            }
                            +
                        </h4>
                        <p>{t('Services_Provided')}</p>
                    </div>
                    <div className='col-md-2 text-center my-3'>
                        <img src={count3} alt='..' className='w-75'/>
                        <h4 className='my-3'>
                        {counterStart && 
                            <CountUp start={0} end={200} duration={3} delay={0}/>
                            }
                            +
                        </h4>
                        <p>{t('Bags_Handled')}</p>
                    </div>
                    <div className='col-md-2 text-center my-3'>
                        <img src={num3} alt='..' className='w-75'/>
                        <h4 className='my-3'>
                        {counterStart && 
                            <CountUp start={0} end={200} duration={3} delay={0}/>
                            }
                            +
                        </h4>
                        <p>{t('Chauffeurs_and_Cars')}</p>
                    </div>
                    <div className='col-md-2 text-center my-3'>
                        <img src={count5} alt='..' className='w-75'/>
                        <h4 className='my-3'>
                        {counterStart && 
                            <CountUp start={0} end={1000} duration={3} delay={0}/>
                            }
                            +
                        </h4>
                        <p>{t('Fast_Tracks')}</p>
                    </div>
                    <div className='col-md-2 text-center my-3'>
                        <img src={count2} alt='..' className='w-75'/>
                        <h4 className='my-3'>
                        {counterStart && 
                            <CountUp start={0} end={50} duration={3} delay={0}/>
                            }
                            +
                        </h4>
                        <p>{t('Hayakum_Agents')}</p>
                    </div>
                </div>
            </div>
        </div>
        </ScrollTrigger>   
    </>
  )
}

export default Counterup