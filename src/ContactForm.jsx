import React from "react";
import socials from "./socials";

const ContactForm = () => {
  return (
    <div className='max-w-4xl mx-auto text-xl '>
      <p className='my-6 text-center'>
        Do you like my work? Are you interested in working on a website
        together? <span className='font-bold text-sky-500'>Contact me!</span>
      </p>

      <form
        className='flex flex-col max-w-xl mx-auto space-y-6'
        action='https://formsubmit.co/ray.z@live.com.au'
        method='POST'
      >
        <input
          className='contact-input'
          type='text'
          placeholder='Name'
          name='name'
          required
        />
        <input
          className='contact-input'
          type='email'
          name='email'
          placeholder='Email address'
          required
        />
        <textarea
          className='contact-input'
          rows='3'
          placeholder='Message'
          name='message'
          required
        ></textarea>
        <button
          type='submit'
          className='px-4 py-2 mx-auto font-mono text-white rounded-md blue-btn w-fit'
        >
          Send
        </button>
      </form>
      <div className='flex justify-center mt-6 font-light gap-x-7 text-slate-500'>
        {socials.map((entry) => {
          const { id, title, icon, color, url } = entry;
          return (
            <a
              href={url}
              key={id}
              title={title}
              className={`${color} text-2xl transition-[colors,transform] duration-500 hover:-translate-y-[2px]`}
            >
              {icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ContactForm;
