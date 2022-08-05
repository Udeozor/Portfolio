import React from 'react'

const About = () => {
  return (
      <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
          <div className='flex flex-col justify-center items-center w-full h-full'>
              <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                  <div className='sm:text-right pb-8 pl-4'>
                      <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                  </div>
              </div>
              <div></div>
              <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                  <div>
                      <p>Hi. I'm Peter, nice to meet you. Please take a look around.</p>
                  </div>
                  <div>
                      <p>I'm a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest!
                          if you're looking for a developer to add to your team, I'd love to hear from you!</p>
                  </div>
                  
              </div>
              
          </div>
 
    </div>
  )
}

export default About