import React from 'react';
import { Route , Routes ,Navigate  } from 'react-router-dom';

import Home from '../pages/Home';

import Service1 from '../pages/Service1';
import Service2 from './../pages/Service2';
import Service3 from './../pages/Service3';
import Service4 from './../pages/Service4';
import Service5 from './../pages/Service5';
import Service6 from './../pages/Service6';



const Routers = () => {
  return (
    <Routes>
      <Route exact path='' element={<Navigate to="home"/>}/>
      {/* <Route exact path="/">
       <Redirect to="/home" />
      </Route> */}
      <Route path='/home' element={<Home/>}/>
      <Route path='/home/service1' element={<Service1/>}/>
      <Route path='/home/service2' element={<Service2/>}/>
      <Route path='/home/service3' element={<Service3/>}/>
      <Route path='/home/service4' element={<Service4/>}/>
      <Route path='/home/service5' element={<Service5/>}/>
      <Route path='/home/service6' element={<Service6/>}/>


    </Routes>
  )
}

export default Routers
