import React from "react";

const Main = () => {
  return (
    <main className='max-w-4xl mx-auto text-xl font-quicksand'>
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
      {/* <div className='text-center'>
        <p className='mb-2'>Need a website built?</p>
        <button className='px-4 py-2 mb-5 ml-2 font-mono text-white rounded-md bg-sky-500 w-fit blue-btn'>
          Find out what I can do for you.
        </button>
        <p className='mb-2'>Otherwise, here's my</p>
        <button className='px-4 py-1 ml-2 font-mono text-white rounded-md bg-sky-500 w-fit blue-btn'>
          <span className='inline-block mr-2 text-2xl translate-y-1'>
            <VscFilePdf />
          </span>
          Curriculum Vitae
        </button>
      </div> */}
    </main>
  );
};

export default Main;
