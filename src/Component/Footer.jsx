import React from 'react';
import { FaAngleDown } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=''>
            <footer className="footer justify-items-center p-10  bg-[#212731] text-white ">
  <nav>
    <h6 className="footer-title">Categories</h6> 
    <a className="link link-hover">Web Builder</a>
    <a className="link link-hover">Hosting</a>
    <a className="link link-hover">Data Center</a>
    <a className="link link-hover">Robotic-Automation</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Contact</h6> 
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Terms Of Service</a>
    <a className="link link-hover">Categories </a>
    <a className="link link-hover">About  </a>
  </nav> 
    
  <nav>
    <p className='flex items-center'>United States <FaAngleDown className='m-2'/>
</p>
  </nav>
</footer>
        </div>
    );
};

export default Footer;