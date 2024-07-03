import React from 'react';
import '../styles/Getintouch.css';
import { Link } from 'react-router-dom';

function Getintouch() {
  return (
    <div className='getintouch'>
        <h1 className='line1'>Ready to accelerate your business growth?</h1>
        <h1 className='line2'> Connect with us today..</h1>
         <Link to = "/contact" ><button className='btn1'>Get in touch</button></Link>
    </div>
  )
}

export default Getintouch
