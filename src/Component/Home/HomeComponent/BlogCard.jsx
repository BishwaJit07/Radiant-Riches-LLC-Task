import React from 'react';
import blogImg from '../../../assets/blogImg.png';
import { FaAngleDown, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { TiTick } from "react-icons/ti";

import { FaStar } from "react-icons/fa";
import { CiTrophy } from 'react-icons/ci';

const BlogCard = () => {
    return (
        <div>

              {/* card 1  */}

   <div>
   <div className='flex items-center bg-orange-500 text-white w-36 py-1 rounded-r-xl mx-8 mt-8'> <CiTrophy className='mx-2' /> <p>
 Best Choice</p></div>   

<div className='grid grid-cols-1 md:grid-cols-3  gap-4 p-8 '>
<div>
<div className="w-10 h-10 rounded-full border border-[#E1E4E6] flex items-center justify-center">
  <p>1</p>
</div>
<div className=' flex flex-col mx-5 items-center'>
    <img src={blogImg} alt="" className=' w-36'/>
    <p className='mt-10'>Builder 1</p>
    </div>
</div>
    
<div>
    <p> <span className=' font-bold text-[#4B5665]'>WixPro 72-Inch Responsive Website Builder-</span> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
    <h3 className=' font-bold mt-2 mb-2'>Main highlights</h3> 
    <p className='ms-2'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
    <p className='flex items-center text-[#1B88F4]'>Show more <FaAngleDown className='m-2'/></p>
</div>

<div className='flex flex-col justify-around items-center'> 
    <div className='flex flex-col items-center bg-[#F3F9FF] rounded-xl p-6  text-blue-900 w-32 '>
        <p className=' text-3xl'>9.8</p>
         <p className='py-1'>Exceptional</p>
         <p className='flex text-[#FFB80F]'><FaStar /> <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
</p>

    </div>

    <button className='btn w-60 rounded-2xl  bg-blue-500 text-white'>View</button>
</div>

</div>


   </div>

              {/* card 2  */}

   <div>
   <div className='flex items-center bg-orange-500 text-white w-36 py-1 rounded-r-xl mx-8'> <CiTrophy className='mx-2' /> <p>
 Best Value</p></div>   

<div className='grid grid-cols-1 md:grid-cols-3  gap-4 p-8 '>
<div>
<div className="w-10 h-10 rounded-full border border-[#E1E4E6] flex items-center justify-center">
  <p>2</p>
</div>
<div className=' flex flex-col mx-5 items-center'>
    <img src={blogImg} alt="" className=' w-36'/>
    <p className='mt-10'>Builder</p>
    </div>
</div>
    
<div>
    <p> <span className=' font-bold text-[#4B5665]'>SiteCraft 68-Inch Ultimate Web Design Studio-</span>  Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</p>
    <h3 className=' font-bold mt-2 mb-2'>Main highlights</h3> 
    <p className='ms-2'>[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</p>
    <p className='flex items-center text-[#1B88F4]'>Show more <FaAngleDown className='m-2'/></p>
</div>

<div className='flex flex-col justify-around items-center'> 
    <div className='flex flex-col items-center bg-[#F3F9FF] rounded-xl p-6  text-blue-900 w-32 '>
        <p className=' text-3xl'>9.5</p>
         <p className='py-1'>Excellent </p>
         <p className='flex text-[#FFB80F]'><FaStar /> <FaStar />
         <FaStar />
         <FaStar />
        
         <FaStarHalfAlt />

</p>

    </div>

    <button className='btn w-60 rounded-2xl  bg-blue-500 text-white'>View</button>
</div>

</div>


   </div>
              {/* card 3  */}

   <div>
     

<div className='grid grid-cols-1 md:grid-cols-3  gap-4 p-8 '>
<div>
<div className="w-10 h-10 rounded-full border border-[#E1E4E6] flex items-center justify-center">
  <p>3</p>
</div>
<div className=' flex flex-col mx-5 items-center'>
    <img src={blogImg} alt="" className=' w-36'/>
    <p className='mt-10'>Builder 1</p>
    </div>
</div>
    
<div>
    <p> <span className=' font-bold text-[#4B5665]'>WixPro 72-Inch Responsive Website Builder-</span> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
    <h3 className=' font-bold mt-2 mb-2'>Main highlights</h3> 
    <p className='ms-2'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
    <p className='flex items-center text-[#1B88F4]'>Show more <FaAngleDown className='m-2'/></p>
</div>

<div className='flex flex-col justify-around items-center'> 
    <div className='flex flex-col items-center bg-[#F3F9FF] rounded-xl p-6  text-blue-900 w-32 '>
        <p className=' text-3xl'>9.3 </p>
         <p className='py-1'>Exceptional </p>
         <p className='flex text-[#FFB80F]'><FaStar /> <FaStar />
         <FaStar />
         <FaStar />
        
         <FaStarHalfAlt />

</p>

    </div>

    <button className='btn w-60 rounded-2xl  bg-blue-500 text-white'>View</button>
</div>

</div>


   </div>

              {/* card-4  */}

   <div>
     

<div className='grid grid-cols-1 md:grid-cols-3  gap-4 p-4'>
<div>
<div className="w-10 h-10 rounded-full border border-[#E1E4E6] flex items-center justify-center">
  <p>4</p>
</div>
<div className=' flex flex-col mx-5 items-center '>
    <img src={blogImg} alt="" className=' w-36'/>
    <p className='mt-10'>SDK</p>
    </div>
</div>
    
<div>
    <p> <span className=' font-bold text-[#4B5665]'>CDK Resposive Builder: </span> An extensive library of widgets and apps, and detailed step-by-step guides</p>
    <p className='w-16 text-xs bg-[#F2F4F7] p-1 text-blue-700 rounded my-2' >26% Off</p>
    <h3 className=' font-bold mt-2 mb-2'>Main highlights</h3> 
 <ul className=' bg-[#FFF4ED] rounded-xl p-2'>
    <li className='flex'><span className=' text-sky-500 mx-4'>9.9</span> <p>Building responsive</p></li>
    <li className='flex'><span className=' text-sky-500 mx-4'>8.9</span> <p>Cool</p></li>
    <li className='flex'><span className=' text-sky-500 mx-4'>8.9</span> <p>Docs</p></li>
 </ul>
    <h3 className='  mt-2 mb-2'>Why we love it</h3> 
 <ul className=' bg-[#FFF4ED] rounded-xl p-2'>
 <li className='flex items-center'><span className=' text-sky-700 mx-4 p-1 bg-sky-200 rounded-full text-center'><TiTick /></span> <p>Documentation</p></li>
    <li className='flex items-center my-2'><span className=' text-sky-700 mx-4 p-1 bg-sky-200 rounded-full text-center'><TiTick /></span> <p>Easy Use</p></li>
    <li className='flex items-center'><span className=' text-sky-700 mx-4 p-1 bg-sky-200 rounded-full text-center'><TiTick /></span><p>Out of box</p></li>
 </ul>
    <p className='flex items-center text-[#1B88F4]'>Show more <FaAngleDown className='m-2'/></p>
</div>

<div className='flex flex-col justify-around items-center'> 
    <div className='flex flex-col items-center bg-[#F3F9FF] rounded-xl p-6  text-blue-900 w-32 '>
        <p className=' text-3xl'>9.1</p>
         <p className='py-1'>Exceptional</p>
         <p className='flex text-[#FFB80F]'><FaStar /> <FaStar />
         <FaStar />
         <FaStar />
         <FaRegStar />

</p>

    </div>

    <button className='btn w-60 rounded-2xl  bg-blue-500 text-white'>View</button>
</div>

</div>


   </div>

        </div>
    );
};

export default BlogCard;