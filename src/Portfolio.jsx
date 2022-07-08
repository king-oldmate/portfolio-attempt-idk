import React from "react";
import entries from "./portfolioEntries";
import { RiGithubLine, RiExternalLinkLine } from "react-icons/ri";
import Technologies from "./Technologies";

const Portfolio = () => {
  return (
    <section className='mx-auto max-w-7xl'>
      {/* <p className='text-xl'>
        Here, have a look at some of my work.{" "}
        <span className='text-2xl font-noto'>👀</span>
      </p> */}
      <section className='flex flex-wrap items-center justify-center gap-5 mt-5 sm:items-stretch sm:flex-row'>
        {entries.map((entry) => {
          const { title, id, tools, imgSrc, srcCode, url, description } = entry;
          return (
            <div
              key={id}
              className='text-center duration-5000 rounded-sm shadow-md transition-[box-shadow] w-[360px] shrink-0 hover:shadow-lg space-y-3 bg-white'
            >
              <img
                src={imgSrc}
                alt={title}
                className='h-[270px] w-full object-cover object-top hover:object-bottom transition-all duration-1000 hover:duration-[5000ms] mx-auto rounded-sm mb-5'
              />
              {/* <h2 className='text-lg font-semibold'>{title}</h2> */}
              {srcCode ? (
                <div className='mx-auto font-mono text-white w-fit'>
                  <a
                    href={srcCode}
                    target='_blank'
                    rel='noreferrer'
                    className='py-2 pl-4 pr-2 border-r-0 rounded-l-md blue-btn'
                  >
                    <RiGithubLine className='inline -translate-y-0.5' /> Source
                  </a>
                  <a
                    href={url}
                    target='_blank'
                    rel='noreferrer'
                    className='py-2 pl-2 pr-4 border-2 border-l-0 rounded-r-md border-sky-500 blue-btn'
                  >
                    <RiExternalLinkLine className='inline -translate-y-0.5' />{" "}
                    Live
                  </a>
                </div>
              ) : (
                <div className='mx-auto font-mono text-white w-fit'>
                  <a
                    href={url}
                    target='_blank'
                    rel='noreferrer'
                    className='py-2 pl-2 pr-4 border-2 rounded-md border-sky-500 blue-btn'
                  >
                    <RiExternalLinkLine className='inline -translate-y-0.5' />{" "}
                    Live
                  </a>
                </div>
              )}
              <Technologies tools={tools} />
              <p className='px-6 pb-4 text-left'>{description}</p>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Portfolio;
