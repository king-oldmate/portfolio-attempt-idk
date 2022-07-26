import React from 'react'

const FreelanceProcess = () => {
  return (
    <section className='max-w-6xl mx-auto text-xl '>My freelance process is as follows:
        <ol className='grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-4' >
            <li><h3>Step 1: Consultation</h3><p>A meeting to discuss the client's vision, needs,  expectations, and budget contraints.</p></li>
            <li><h3>Step 2: Proposal</h3><p>A wireframe (outline) of a design will be created and presented to the client for feedback and adjustments</p></li>
            <li><h3>Step 3: Creation</h3><p>As the website is built, regular updates will be provided to the client for peace of mind.</p></li>
            <li><h3>Step 4: Deployment</h3><p>The website is launched and now available for all to see. </p></li>
        </ol>
    </section>
  )
}

export default FreelanceProcess