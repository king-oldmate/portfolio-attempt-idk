import React from "react";

const FreelanceProcess = () => {
  return (
    <section className='max-w-6xl mx-auto text-xl '>
      <span>My freelance process is as follows:</span>
      <ol className='grid justify-center gap-6 mt-3 text-lg text-center sm:grid-cols-2 lg:grid-cols-4'>
        <li className='bg-white duration-5000 rounded-sm shadow-md transition-[box-shadow] hover:shadow-lg p-3'>
          <h3 className='text-xl text-sky-500'>
            Step 1: <span className='font-bold'>Consultation</span>
          </h3>
          <p>
            A meeting to discuss the client's vision, needs, expectations, and
            budget contraints.
          </p>
        </li>
        <li className='bg-white duration-5000 rounded-sm shadow-md transition-[box-shadow] hover:shadow-lg p-3'>
          <h3 className='text-xl text-sky-500'>
            Step 2: <span className='font-bold'>Proposal</span>
          </h3>
          <p>
            A wireframe (outline) of a design will be created and presented to
            the client for feedback and adjustments
          </p>
        </li>
        <li className='bg-white duration-5000 rounded-sm shadow-md transition-[box-shadow] hover:shadow-lg p-3'>
          <h3 className='text-xl text-sky-500'>
            Step 3: <span className='font-bold'>Creation</span>
          </h3>
          <p>
            As the website is built, regular updates will be provided to the
            client for peace of mind.
          </p>
        </li>
        <li className='bg-white duration-5000 rounded-sm shadow-md transition-[box-shadow] hover:shadow-lg p-3'>
          <h3 className='text-xl text-sky-500'>
            Step 4: <span className='font-bold'>Deployment</span>
          </h3>
          <p>The website is launched and now available for all to see. </p>
        </li>
      </ol>
    </section>
  );
};

export default FreelanceProcess;
