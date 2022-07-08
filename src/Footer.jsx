import React from "react";
import socials from "./socials";
import { VscFilePdf } from "react-icons/vsc";
import Pdf from "./RaymondZeaiterResume2022.pdf";

const Footer = () => {
  return (
    <footer className='max-w-4xl mx-auto font-mono font-light text-slate-500'>
      <div className='flex gap-x-3'>
        {socials.map((entry) => {
          const { id, title, icon, color, url } = entry;
          return (
            <a
              href={url}
              key={id}
              title={title}
              className={`${color} text-xl transition-[colors,transform] duration-500 hover:-translate-y-[2px]`}
            >
              {icon}
            </a>
          );
        })}
        <a
          href={Pdf}
          title='Resume'
          target='_blank'
          rel='noreferrer'
          className={`hover:text-red-500 text-xl transition-[colors,transform] duration-500 hover:-translate-y-[2px] flex`}
        >
          <VscFilePdf />
          <span className='-translate-y-[2px] ml-1'>Resume</span>
        </a>
      </div>
      <p className='mt-2 ml-[2px]'>
        <a
          className='transition-all duration-100 hover:underline decoration-dotted underline-offset-[3px] hover:underline-offset-4'
          href='mailto:ray.z@live.com.au'
        >
          ray.z@live.com.au
        </a>{" "}
        <span className='hidden sm:inline'>——</span>
        <br className='sm:hidden' />{" "}
        <a
          className='transition-all duration-100  hover:underline decoration-dotted underline-offset-[3px] hover:underline-offset-4'
          href='tel:+61423688274'
        >
          (+61) 423 688 274
        </a>
      </p>
      {/* <div className='mt-5 text-base font-quicksand'>
        You should be able to guess who designed and built this website
        <span className='font-bold font-noto' title='it was me'>
          {" "}
          😉
        </span>
        .
      </div> */}
    </footer>
  );
};

export default Footer;
