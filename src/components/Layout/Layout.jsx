import React ,{useState ,useEffect} from "react";
// import {FaArrowCircleUp} from 'react-icons/fa';
import { FaAngleUp } from 'react-icons/fa';

import Routers from "./../../Routers/Routers";
import Header from "../Header/Header";
import Footer from "./../Footer/Footer";

const Layout = () => {


    // ===================
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
      window.addEventListener('scroll', () => {
          if (window.scrollY > 100) {
             // eslint-disable-next-line
            const goToTop = () => {
              window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
              });
          };
          setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    }
    );
};
  return (
    <>
      <Header />
      <div>
      <div className="top-to-btm">
            {" "}
            {showTopBtn && (
                <FaAngleUp
                    className="icon-position icon-style"
                    onClick={goToTop}
                />
            )}{" "}
        </div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
