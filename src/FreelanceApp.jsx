import React from "react";
import Info from "./Info";
import Portfolio from "./Portfolio";
import FreelanceProcess from "./FreelanceProcess";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const FreelanceApp = () => {
  return (
    <div className='p-10 space-y-5 '>
      <Info />
      <Portfolio />
      <FreelanceProcess />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default FreelanceApp;
