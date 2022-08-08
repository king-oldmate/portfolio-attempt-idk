import React from "react";

const ContactForm = () => {
  return (
    <div className='max-w-xl mx-auto'>
      <h2>Contact</h2>
      <form className='flex flex-col space-y-6'>
        <input className='contact-input' type='text' placeholder='Name' />
        <input
          className='contact-input'
          type='email'
          placeholder='Email address'
        />
        <textarea
          className='contact-input'
          rows='3'
          placeholder='Message'
        ></textarea>
        <button
          type='submit'
          className='px-4 py-2 mx-auto font-mono text-white rounded-md blue-btn w-fit'
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
