import React from "react";
import Info from "./Info";
import Portfolio from "./Portfolio";
import FreelanceProcess from "./FreelanceProcess";
import ContactForm from "./ContactForm";
const FreelanceApp = () => {
  return (
    <div className='p-10 space-y-5 '>
      <Info />
      <Portfolio />
      <FreelanceProcess />
      <ContactForm />
    </div>
  );
};

export default FreelanceApp;
