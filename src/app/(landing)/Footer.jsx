// components/Footer.jsx
import React from 'react';
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-300 py-8">
      <div className="container mx-auto flex flex-wrap justify-center">
        {/* Logo */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 px-4 mb-4">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </div>

        {/* Links */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 px-4 mb-4">
          <h3 className="text-lg font-bold mb-4">Links</h3>
          <ul>
            <li className="mb-2"><a href="#">Home</a></li>
            <li className="mb-2"><a href="#">About Us</a></li>
            <li className="mb-2"><a href="#">Contact</a></li>
            <li className="mb-2"><a href="#">Recipes</a></li>
          </ul>
        </div>

        {/* ICONS */}
        <SlSocialInstagram className='text-3xl m-2 cursor-pointer'/>
        <SlSocialTwitter className='text-3xl m-2 cursor-pointer' />
        <SiGithub className='text-3xl m-2 cursor-pointer'/>
      </div>
    </footer>
  );
};

export default Footer;