import React from 'react'
import ecommerce from '../assets/ecommerce.png';
import dashboard from '../assets/dashboard.png';
import expense from '../assets/expense.png';



const Work = () => {
  return (
      <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
          <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
              <div className='pb-8'>
                  <p className='text-4xl mt-10 font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                  <p className='py-6'>Check out some of my recent works</p>
          </div>
          
              {/* Container */}
              <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                  
                  {/* Grid Item */}
                  <div style={{ backgroundImage: `url(${ecommerce})` }}
                      className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                      
                      {/* Hover Effects */}
                      <div className='opacity-0 group-hover:opacity-100'>
                      
                      <span className='text-2xl font-bold text-black tracking-wider'> 
                              Ecommerce Website       
                          </span>
                          
                      <div className='pt-8 text-center'>
                         <a href="https://shoes-ecommerce-pi.vercel.app/">
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#0000FF] text-gray-700 font-bold text-lg'>Demo</button>
                              </a>
                              
                          <a href="https://github.com/Udeozor/Shoes-Ecommerce">
                              <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#0000FF] text-gray-700 font-bold text-lg'>Code</button>
                          </a>
                
                      </div>
                  </div>
                  </div>

                    <div style={{ backgroundImage: `url(${dashboard})` }}
                      className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                      
                      {/* Hover Effects */}
                      <div className='opacity-0 group-hover:opacity-100'>
                      
                      <span className='text-2xl font-bold text-black tracking-wider'> 
                              Admin Dashboard       
                          </span>
                          
                      <div className='pt-8 text-center'>
                              <a href="https://ncdc-react-dashboard.vercel.app/">
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#0000FF] text-gray-700 font-bold text-lg'>Demo</button>
                          </a>
                              
                          <a href="https://github.com/Udeozor/NCDC-React-Dashboard">
                              <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#0000FF] text-gray-700 font-bold text-lg'>Code</button>
                          </a>
                
                      </div>
                  </div>
                  </div>

                    <div style={{ backgroundImage: `url(${expense})` }}
                      className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                      
                      {/* Hover Effects */}
                      <div className='opacity-0 group-hover:opacity-100'>
                      
                      <span className='text-2xl font-bold text-black tracking-wider'> 
                              Expense Tracker       
                          </span>
                          
                      <div className='pt-8 text-center'>
                              <a href="https://expense-tracker-ten-delta.vercel.app">
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#0000FF] text-gray-700 font-bold text-lg'>Demo</button>
                          </a>
                              
                          <a href="https://github.com/Udeozor/Expense-Tracker">
                              <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#0000FF] text-gray-700 font-bold text-lg'>Code</button>
                          </a>
                
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </div>
  )
}

export default Work