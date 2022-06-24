import React from "react";
import socials from "./socials";

const Footer = () => {
  return (
    <footer>
      <article>
        <p>ray.z@live.com.au | 0423 688 274</p>
        <div className='flex'>
          {socials.map((entry) => {
            const { id, title, icon, color, url } = entry;
            return (
              <a
                href={url}
                key={id}
                title={title}
                className={`${color} transition-[colors,transform] duration-500 hover:-translate-y-[1px]`}
              >
                {icon}
              </a>
            );
          })}
        </div>
      </article>
      <div className='mt-5 text-base'>
        You should be able to guess who designed and built this website
        <span className='font-noto' title='it was me'>
          {" "}
          😉
        </span>
        .
      </div>
    </footer>
  );
};

export default Footer;
