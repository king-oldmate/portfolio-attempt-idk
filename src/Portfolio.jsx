import React from "react";
import entries from "./portfolioEntries";

const Portfolio = () => {
  console.log(entries);
  return (
    <section>
      Portfolio
      <article className='flex flex-col items-center justify-center md:flex-row'>
        {entries.map((entry) => {
          const { title, id, imgSrc } = entry;
          return (
            <div key={id}>
              {title}
              <img
                src={imgSrc}
                alt={title}
                className='aspect-[4/3] w-80 object-cover object-top hover:object-bottom transition-all duration-[5000ms]'
              />
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Portfolio;
