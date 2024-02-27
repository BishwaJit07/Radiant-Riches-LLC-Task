import React from 'react';
import { CiSearch } from "react-icons/ci";

const Header = () => {
    return (
        <div className='flex justify-center mb-2 py-3 bg-[#212731] text-white'>
       
    
            <div className='flex flex-col md:flex-row justify-items-center text-center items-center'>
          <label className="input input-bordered flex items-center gap-2"> <CiSearch className='text-gray-500 text-4xl font-bold' />
  <input type="text" className="grow text-black"  /> 
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>

<p className='m-4'>Categories</p>
<p className='m-4'>Website Builders</p>
<p className='m-4'>Today's deals </p>

        </div>
         </div>
       


    );
};

export default Header;