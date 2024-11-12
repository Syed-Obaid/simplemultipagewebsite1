import React from 'react'

function Hero() {
  return (
    <>
      <section className='bg-gray-200 py-5 mt-2'>
        <div className='grid gap-2 grid-cols-1 lg:grid-cols-2 items-center justify-center px-4 md:px-6 lg:px-8 mx-auto'>
            <div className='flex justify-center items-center py-8 md:py-12 max-h-full'>
                <div className='max-w-sm md:max-w-md mx-2'>
            <img style={{transition:"all 2s ease"}} className=' border-4 border-gray-300 hover:border-pink-200 hover:translate-x-4 rounded-full' src={"https://img.freepik.com/premium-photo/man-green-shirt-is-working-computer_979520-158018.jpg?ga=GA1.1.1351839713.1724756175&semt=ais_hybrid"} alt="develper" />
                </div>
            </div>
            <div className='max-w-sm md:max-w-xl mx-2 '>
            <h1 className='text-2xl md:text-8xl bg-cyan-800 font-[800] mb-5 hover:bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text'>Developer</h1>
            <p className='text-xl text-gray-600 mb-2 '>
            A developer is a person who creates, builds, and maintains software applications, systems, or websites. They write code in programming languages, debug issues, and design solutions to meet user or business needs. Developers often specialize in areas such as web development, mobile development, or software engineering.</p>
            {/* <button className='mt-4 bg-neutral-800 hover:bg-indigo-400 transition-all ease duration-75 hover:translate-y-1 text-white p-3 rounded-2xl border-none'><a href="#">Read More</a></button> */}
            <button className='mt-4 text-white bg-gradient-to-r from-purple-800 to-pink-700 p-3 rounded-2xl border-none transition-all ease duration-75 hover:translate-y-1'><a href="#">Read More</a></button>
            </div>
        </div>
      </section>
    </>
  )
}

export default Hero
