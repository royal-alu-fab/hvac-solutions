import React, {useState} from 'react'
import contactimg from '../assets/contactus-2.jpg';
import '../styles/Contact.css';
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import Maps from '../assets/Googlemaps.jpg';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {

  const initialFormData = {
    name: '',
    email: '',
    contactNumber: '',
    product: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({});
  const [state, handleSubmit] = useForm("xkndlddw");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'contactNumber') {
      if (value === '' || /^\d{1,10}$/.test(value)) {
        setFormData({
          ...formData,
          [name]: value
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.contactNumber) newErrors.contactNumber = 'Contact number is required';
    if (formData.contactNumber.length !== 10) newErrors.contactNumber = 'Contact number must be exactly 10 digits';
    if (!formData.product) newErrors.product = 'Please select a product';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      handleSubmit(e);

      if (state.succeeded) {
        window.alert('Thanks for reaching out to us!! Will contact you soon!')
        setFormData(initialFormData);
      }
    }
  };

  return (
    <div className='content'>
    <div className='contactus'>
      
      <div className='contactphoto'>
        <img src={contactimg} alt='contactimg' />
      </div>

      <div className='contact-header'>
        <h1>GET IN TOUCH</h1>
      </div>

      <div className='contact-division'>
        <div className='contact-detail'>
          <div className='contact-item'>
            <span className='contact-icons'><IoIosMail /></span>
            <p> royalaluthermalbreaksales@gmail.com</p>
          </div>
          <div className='contact-item'>
            <span className='contact-icons'><FaPhone /></span>
            <p>8347555547</p>
          </div>
          <div className='contact-item'>
            <span className='contact-icons'><FaHome /></span>
            <p>G.I.D.C. Makarpura, <br /> Vadodara - 390010 <br /> Gujarat - India</p>
          </div>
        </div>

        <div className='contact-form'>
          <form className='forms' onSubmit={handleFormSubmit}>
            <div className='form-group'>
              <input type='text' name='name' placeholder='Name' className='form-control' value={formData.name} onChange={handleChange} />
              {errors.name && <span className='error'> {errors.name} </span> }
              <ValidationError field="name" prefix="Name" errors={state.errors} />

              <input type='email' name='email' placeholder='Email' className='form-control' value={formData.email} onChange={handleChange}/> 
              {errors.email && <span className='error'>{errors.email}</span>}
              <ValidationError field="email" prefix="Email" errors={state.errors} />
            </div>
            
            <div className='form-group'>
              <input type='text' name= 'contactNumber' placeholder="Contact Number" className='form-control' value={formData.contactNumber} onChange={handleChange}></input>
              {errors.contactNumber && <span className='error'>{errors.contactNumber}</span>}
              <ValidationError field="contactNumber" prefix="Contact Number" errors={state.errors} />
            </div>

            <div className='form-group'>
              <textarea name='message' placeholder='Your Message' className='form-control' value={formData.message} onChange={handleChange}></textarea>
              {errors.message && <span className='error'>{errors.message}</span>}
              <ValidationError field="message" prefix="Message" errors={state.errors} />
            </div>

            <div className='form-group form-group-submit'>
              <button type='submit' className='submit-btn' disabled={state.submitting}>Submit</button>
            </div>
          </form>
        </div>
      </div>


      <div className='location-heading'>
        <h1> LOCATION</h1>
      </div>
      
      <div className='locations-container'>
      <div className='location'>
        <div className='map'>
          <a href="https://maps.app.goo.gl/QxzFzuJNRBsPdAAj8" target="_blank" rel="noopener noreferrer">
            <img src={Maps} alt='Location 1' />
          </a>
        </div>
        <div className='address'>
          <p>Royal Powder Coat, Vadodara - 390010, Gujarat</p>
        </div>
      </div>
      
    </div>
      <div>

      </div>
    </div>
    </div>
  )
}

export default Contact;
