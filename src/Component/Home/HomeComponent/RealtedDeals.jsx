import React from 'react';
import blogImg from '../../../assets/blogImg.png'
const RealtedDeals = () => {
    return (
        <div className='my-8 mx-4'>
            <h2 className=' my-6  text-3xl text-gray-700'> Related deals you might like for</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                
                {/* card 1  */}
                  <div className='flex flex-col items-center my-2'>
                          <img src={blogImg} alt="" />
                          <div className='flex my-4'> 

                            <p className='bg-sky-100 w-16 p-2 mx-4 rounded-md text-[#074786] text-xs'>20% Off</p>
                            <p className='bg-sky-100 w-24 text-xs p-2 rounded-md text-[#074786]'>Limited time </p>
                          
                          </div>

                          <div className='flex flex-col items-center'>
                            <h3 className='font-semibold'>Webbuilder 1</h3>
                            <p>Computer  Modern clasic with wix support</p>
                            <div className='flex items-center'>
                                <p>$39.96</p> 
                                <p className='mx-4 text-xs text-gray-400'>$49.96</p>
                                <p className='text-xs text-red-500'>(20% Off)</p></div>
                          </div>
                          <button className='btn w-60 rounded-2xl  bg-blue-500 text-white my-1'>View</button>
                  </div>

                  {/* card 2  */}

                  <div className='flex flex-col items-center my-2'>
                          <img src={blogImg} alt="" />
                          <div className='flex my-4'> 

                            <p className='bg-sky-100 w-16 p-2 mx-4 rounded-md text-[#074786] text-xs'>20% Off</p>
                            <p className='bg-sky-100 w-24 text-xs p-2 rounded-md text-[#074786]'>Limited time </p>
                          
                          </div>

                          <div className='flex flex-col items-center'>
                            <h3 className='font-semibold'>Webbuilder 1</h3>
                            <p>Computer  Modern clasic with wix support</p>
                            <div className='flex items-center'>
                                <p>$39.96</p> 
                                <p className='mx-4 text-xs text-gray-400'>$49.96</p>
                                <p className='text-xs text-red-500'>(20% Off)</p></div>
                          </div>
                          <button className='btn w-60 rounded-2xl  bg-blue-500 text-white my-1'>View</button>
                  </div>

                  {/* card 3 */}

                  <div className='flex flex-col items-center my-w'>
                          <img src={blogImg} alt="" />
                          <div className='flex my-4'> 

                            <p className='bg-sky-100 w-16 p-2 mx-4 rounded-md text-[#074786] text-xs'>20% Off</p>
                            <p className='bg-sky-100 w-24 text-xs p-2 rounded-md text-[#074786]'>Limited time </p>
                          
                          </div>

                          <div className='flex flex-col items-center'>
                            <h3 className='font-semibold'>Webbuilder 1</h3>
                            <p>Computer  Modern clasic with wix support</p>
                            <div className='flex items-center'>
                                <p>$39.96</p> 
                                <p className='mx-4 text-xs text-gray-400'>$49.96</p>
                                <p className='text-xs text-red-500'>(20% Off)</p></div>
                          </div>
                          <button className='btn w-60 rounded-2xl  bg-blue-500 text-white my-1'>View</button>
                  </div>
                  
            </div>

                {/* sign up  */}
                 
            <div className='flex justify-between'>
                <p className='text-3xl text-gray-500 my-10'>Sign up and get exclusive special deals</p>
                <div className='join flex items-center'>
                <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
                <button className=' bg-blue-500 text-white p-4  rounded-r-xl '>Sign UP</button>
                </div>
                
            </div>
        </div>
    );
};

export default RealtedDeals;