import React from "react";
import Header from "./Header";
import Footer from "./Footer"

import '../styles/AboutMepage.css'

const AboutMePage = () => {
    return(<div>
        <div className="white-space"></div>
        <Header/>        
        <div className="about-me-top">
         <div className="title">
             <h1>Hello I am Andrew</h1>
         </div>
        </div>
        <div className="about-me-bottom">
             <div className="bottom-right">
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
             </div>
             <div className="bottom-left">
                 <div className="headshot">
                     <img src="https://source.unsplash.com/gySMaocSdqs/600x300" alt="about-me-picture"/>
                 </div>
                 <div className="contact-card">
                     <p>call us: 555-555-555</p>
                     <p>email us: fake@mail.com</p>
                     <p>visit us: 123 high street</p>
                 </div>
             </div>
         </div>  
        <Footer/>      
    </div>)
}
export default AboutMePage;