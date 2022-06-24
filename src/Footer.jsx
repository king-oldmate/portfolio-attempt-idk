import React from "react";
import socials from "./socials";

const Footer = () => {
  return (
    <footer className='mx-auto font-mono font-light text-slate-500 max-w-7xl'>
      <div className='flex gap-x-2'>
        {socials.map((entry) => {
          const { id, title, icon, color, url } = entry;
          return (
            <a
              href={url}
              key={id}
              title={title}
              className={`${color} text-xl transition-[colors,transform] duration-500 hover:-translate-y-[1px]`}
            >
              {icon}
            </a>
          );
        })}
      </div>
      <p>
        ray.z@live.com.au <span className='hidden sm:inline'>——</span>
        <br className='sm:hidden' /> (+61) 423 688 274
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
