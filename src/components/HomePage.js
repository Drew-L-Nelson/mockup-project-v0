import React from "react";
import Feature from "./Feature";
import ContactForm from "./ContactForm";
import Header from "./Header";
import Footer from "./Footer";


const HomePage = () => {
  return(
    <div>
      <div className="white-space"></div>
      <Header/>
      <Feature />
      <ContactForm />
      <Footer/>
    </div>
  )
}

export default HomePage;