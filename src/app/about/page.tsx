import React from 'react'

function About() {
  return (
    <>
    <section id='about' className='bg-gray-200 my-5 pt-8 sm:my-5'>
    <div className='grid grid-cols items-center justify-center mx-auto max-w-sm md:max-w-md lg:max-w-xl'>
        <div className='text-center'>
        <h1 className='text-xl md:text-6xl  font-[600] bg-cyan-800 hover:bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text'>About Us</h1>
        </div>
    <div className='py-8 md:py-12 '>
       <div className='max-w-48 sm:max-w-64  mx-auto'>

            <img className=' border-4 border-gray-300 hover:border-pink-200 hover:translate-y-4 rounded-full' src="https://img.freepik.com/free-vector/people-office-background_23-2148084788.jpg?ga=GA1.1.1351839713.1724756175&semt=ais_hybrid"  alt="imagee" />
       </div>
            <p className='py-5 mt-5 px-2 sm:ps-5 text-center text-slate-600'> Developer is a professional who designs, creates, and maintains software or applications. They handle various aspects of software development, including writing code, designing systems, testing, and deploying software. Developers often specialize in areas like web development, mobile app development, or systems development, and they collaborate with teams to build functional and user-friendly applications.</p>
<div className='text-center'>
    
<button className='mt-4 text-white bg-gradient-to-r from-purple-800 to-pink-700 p-3 px-12 rounded-2xl border-none transition-all ease duration-75 hover:translate-y-1'><a href="#">Read More</a></button>
</div>
        
        <div className='grid grid-cols sm:grid-cols-3 mt-10 justify-center align-center gap-12'>
          <div className='text-center'>
            <h1 className='text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text'>1+</h1>
            <h3 className='bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text font-bold'>Years Experience</h3>
            </div>
          <div className='text-center'>
            <h1 className='text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text'>20+</h1>
          <h3  className='bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text font-bold'>Projects Completed</h3>
          </div>
          <div className='text-center'>
          <h1 className='text-5xl font-bold bg-gradient-to-r from-pink-500   to-purple-500 text-transparent bg-clip-text'>10+</h1>
          <h3  className='bg-gradient-to-r from-purple-500  to-pink-500 text-transparent bg-clip-text font-bold'>Happy Clients</h3>
          </div>
        </div>

    </div>
    </div>

    </section>
    </>
  )
}

export default About
