import React from "react";
import { useLocation } from "react-router-dom";
import socials from "./socials.js";

const Info = () => {
  const location = useLocation();
  return (
    <main className='max-w-4xl mx-auto text-xl font-quicksand '>
      {location.pathname === "/freelance" && (
        <div
          className={`float-right font-mono mt-2 text-sm font-light text-slate-500 md:mt-7 md:text-base`}
        >
          <a
            className='transition-all duration-100 hover:underline decoration-dotted underline-offset-[3px] hover:underline-offset-4'
            href='mailto:ray.z@live.com.au'
          >
            ray.z@live.com.au
          </a>{" "}
          <span className='hidden md:inline'>/</span>
          <br className='md:hidden' />{" "}
          <a
            className='transition-all duration-100  hover:underline decoration-dotted underline-offset-[3px] hover:underline-offset-4'
            href='tel:+61423688274'
          >
            (+61) 423 688 274
          </a>{" "}
          <span className='hidden md:inline'>/</span>
          <br className='md:hidden' />{" "}
          <span className='inline-flex translate-y-0.5 gap-x-3'>
            {socials.map((entry) => {
              const { id, title, icon, color, url } = entry;
              return (
                <a
                  href={url}
                  key={id}
                  title={title}
                  className={`${color} text-lg md:text-xl transition-[colors,transform] duration-500 hover:-translate-y-[2px]`}
                >
                  {icon}
                </a>
              );
            })}
          </span>
        </div>
      )}
      <p
        className='pt-3 text-6xl font-bold font-noto hover:text-yellow-500 transition-[color] duration-500 mb-5 cursor-default'
        title='(H)'
      >
        😎
      </p>
      <p className='mb-5'>Hey, and welcome.</p>
      <p className='mb-5'>
        I'm <span className='font-bold text-sky-500'>Ray Zeaiter</span>, and I
        was once a high school teacher, but now I'm a
        <span className='font-bold text-sky-500'>
          {" "}
          full-stack web developer
        </span>
        . I'm based in Sydney, Australia, and I'm currently looking for work
        opportunities, including freelance.
      </p>
    </main>
  );
};

export default Info;
