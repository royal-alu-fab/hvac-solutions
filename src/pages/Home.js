import React from 'react';
import '../styles/Home.css';
import Getintouch from '../helpers/Getintouch';
import hvacImage from '../assets/hvac solutions/hvac.jpg';
import {Hvacsolutionlist} from '../helpers/HvacSolutionlist';

function ProductPage() {
  return (
    <div className='content'>
    <div className='thermalprofile'>
      <div className='tbppart1'>
        <div className='tbpimage1'>
          <img src={hvacImage} alt='HVAC Solutions' />
        </div>
        <div className='tbptext1'>
          <h1>HVAC Solutions</h1>
          <p>HVAC solutions refer to systems and services for heating, ventilation, and air conditioning in buildings. It includes equipment and technologies designed to regulate indoor climate, ensuring comfort, air quality, and energy efficiency in residential, commercial, and industrial settings."</p>
        </div>
      </div>
      <div className='heading'>
        <p>Our solutions for HVAC Solutions...</p>
      </div>
      <div className='tbpmould'>
        {Hvacsolutionlist.map((item) => (
          <div className='tbpmouldimage' key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.desc}</h3>
          </div>
        ))}
      </div>
      
        <div style={{ marginTop: '20px' }}>
        <a href="/hvac-solutions-catalogue.pdf" download="hvac-solutions-catalogue.pdf">
            Download our Product Catalog for HVAC Solutions
        </a>
        </div>
        
      

      <div>
        <Getintouch />
      </div>
    </div>
    </div>
  );
}


export default ProductPage;
