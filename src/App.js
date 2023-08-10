import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import cookies from "js-cookie";
import Layout from "./components/Layout/Layout";
// import { useState } from "react";

function App() {
  // const currentLanguageCode =cookies.get('i18next') || 'en';

  // const [cookieValue, setCookieValue] = useState('currentLanguageCode');
  useEffect(()=>{
    // document.cookie = `i18next=; expires=${new Date(0).toUTCString()}`; 
    // document.cookie = `i18next=${'en'}`; 
  }, []);

  useEffect(()=>{
    AOS.init({
      duration: 800 ,
      once: true
    });

  },[]);

  return <Layout/>;
}

export default App;
