import React from 'react';
import Header from '../Components/Header'; 
import ContactBody from '../Components/ContactBody';
import Footer from '../Components/Footer';
import '../CSS/ContactBody.css'

function Contact() {
  return (
    <div className='contactpage'>
      <Header/>
      <ContactBody/>
      <Footer/>
    </div>
  )
}

export default Contact;
