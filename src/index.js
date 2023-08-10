import React  from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import './i18n'

// import en_lang from './Locales/Eng.json'
// import ar_lang from './Locales/Arb.json'


// import i18n from "i18next";
// import {  initReactI18next } from "react-i18next";
// import HttpApi from 'i18next-http-backend'
// import LanguageDetector from 'i18next-browser-languagedetector'

// i18n
//   .use(HttpApi)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     supportedLngs: ['en', 'ar'],
//     fallbackLng: 'en',
//     debug: false,
//     detection: {
//       order: ['path', 'cookie', 'htmlTag'],
//       caches: ['cookie'],
//     },
//     react: { useSuspense: false },
//     backend: {
//       loadPath: '/assets/locales/{{lng}}/Translation.json',
//     },
//   });



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <React.StrictMode>
    <BrowserRouter>
    
      <App />
    
    </BrowserRouter>
  </React.StrictMode>
);
