import React from 'react';
import {Navbar,Container} from 'react-bootstrap';
import './Footer.css';
import Logo from '../assets/logo.jpg';


const Footer = () => {
  return (
    <div>
           <Navbar bg="dark" sticked="bottom"  >
                <Container expand='lg' className='center' style={{fontSize:'18px'}}>
                    <span>
                        <img src={Logo} className='logo' alt='#'/>
                    </span>
                    <span className='copy text-muted mx-2'>
                    &copy; {new Date().getFullYear()} EMQ DATA.ALL Rights Reserved  -designed by Wiaam-Bezzari
                    </span>
                </Container>
           </Navbar>
    </div>
  )
}

export default Footer
