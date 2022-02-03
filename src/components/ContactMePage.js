import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import Header from './Header';
import Footer from './Footer';
import ContactForm from './ContactForm';
import '../styles/ContactMePage.css';

const ContactMePage = () => {
  return(
    <>
      <Header />
      <div className="ContactMePage">
        <Card className="Card">
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/256/186"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">
              FirstName LastName
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Job Title
            </CardSubtitle>
            <CardText>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum tempore rerum libero porro qui reprehenderit perferendis, itaque sed, obcaecati soluta similique vel facilis, dolor est laborum amet nisi laudantium? Laudantium?
            </CardText>
          </CardBody>
        </Card>
        <div className="ContactForm-div">
          <h2 className="ContactMe-title">CONTACT ME</h2>
          <ContactForm className="ContactForm" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactMePage;