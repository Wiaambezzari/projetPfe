import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ContactUs from './components/Contact';
import Equipe from './components/equipe';
import References from './components/reference';

const App = () => {
  return (
    <div>
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/equipe' element={<Equipe/>}/>
        <Route path='/references' element={<References/>}/>

      </Routes>
      </BrowserRouter>
      <Footer/>

    </div>
  )
}

export default App


