import React from "react";
import Feature from "./Feature";
import ContactForm from "./ContactForm";
import Header from "./Header";
import Footer from "./Footer";
import '../styles/HomePage.css';

const HomePage = () => {
  return(
    <div>
      <div className="white-space"></div>
      <Header/>
      <Feature />
      <div className="ContactForm-Home-container">
        <h2>Contact Me</h2>
        <ContactForm />
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage;