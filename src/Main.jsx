import React from "react";

const Main = () => {
  return (
    <main className='mx-auto text-xl max-w-7xl font-quicksand'>
      <p
        className='pt-3 text-6xl font-bold font-noto hover:text-yellow-500 transition-[color] duration-500 mb-3'
        title='(H)'
      >
        😎
      </p>
      <p className='mb-5'>Hey, and welcome.</p>
      <p>
        I'm <span className='font-bold text-sky-500'>Ray Zeaiter</span>, and I
        was once a high school teacher, but now I'm a
        <span className='font-bold text-sky-500'>
          {" "}
          full-stack web developer
        </span>{" "}
        . I'm based in Sydney, Australia, and I'm currently looking for work
        opportunities, including freelance.
      </p>
    </main>
  );
};

export default Main;
