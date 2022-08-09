import React from "react";

const ContactForm = () => {
  return (
    <div className='max-w-xl mx-auto text-xl'>
      <p className='mt-6 text-center'>Do you like my work? Reach out!</p>
      <p className='my-3 font-bold text-sky-500'>Contact Form</p>
      <form className='flex flex-col space-y-6'>
        <input
          className='contact-input'
          type='text'
          placeholder='Name'
          required
        />
        <input
          className='contact-input'
          type='email'
          placeholder='Email address'
          required
        />
        <textarea
          className='contact-input'
          rows='3'
          placeholder='Message'
          required
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
