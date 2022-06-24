import React from "react";
import entries from "./portfolioEntries";
import { RiGithubLine, RiExternalLinkLine } from "react-icons/ri";

const Portfolio = () => {
  console.log(entries);
  return (
    <section className='mx-auto max-w-7xl'>
      <p className='text-xl'>
        Here, have a look at some of my work.{" "}
        <span className='text-2xl font-noto'>👀</span>
      </p>
      <article className='flex flex-col items-center justify-center gap-5 mt-5 sm:items-stretch sm:flex-row'>
        {entries.map((entry) => {
          const { title, id, imgSrc, srcCode, url, description } = entry;
          return (
            <div
              key={id}
              className='text-center duration-5000 rounded-sm shadow-md transition-[box-shadow] max-w-[360px] hover:shadow-lg space-y-3'
            >
              <img
                src={imgSrc}
                alt={title}
                className='aspect-[4/3] w-full object-cover object-top hover:object-bottom transition-all duration-1000 hover:duration-[5000ms] mx-auto rounded-sm mb-5'
              />
              {/* <h2 className='text-lg font-semibold'>{title}</h2> */}
              <div className='mx-auto font-mono text-white w-fit'>
                <a
                  href={srcCode}
                  className='py-2 pl-4 pr-2 border-r-0 rounded-l-md blue-btn'
                >
                  <RiGithubLine className='inline -translate-y-0.5' /> Source
                </a>
                <a
                  href={url}
                  className='py-2 pl-2 pr-4 border-2 border-l-0 rounded-r-md border-sky-500 blue-btn'
                >
                  <RiExternalLinkLine className='inline -translate-y-0.5' />{" "}
                  Live
                </a>
              </div>
              <p className='px-6 pt-2 pb-4 text-left'>{description}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Portfolio;
