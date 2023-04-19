import React from 'react';
import HomeFront from '../assets/dataimg.jpg';
import './Home.css';

const Home = () => {
  return (
    <div>
       <img src={HomeFront} className='homefont' />
       <span className='content'>
        <h5 className='title'> <b>Bienvenue sur la page web de</b>  </h5>
        <h1 className='title' style={{fontSize:'50px',color:'darkblue'}}><b> EMQ DATA</b></h1>
      <p className='text-center' style={{fontSize:'25px'}}><b>
       <br/>votre partenaire de confiance dans le conseil en systèmes et logiciels informatiques.</b></p>
        </span>
    </div>
  )
}

export default Home
