import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import { TbXboxX } from "react-icons/tb";
import NavigationLinks from "./NavigationLinks";
import ShippingAndService from "./ShippingAndService";
import { NewsletterSignupProps } from "./NewsLetterSignup.type";


const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  backgroundImage,
  title,
  placeholder,
  buttonText,
  socialLinks,
  trustImage,
}) => {
  return (
    <section
      className="bg-cover bg-center h-full w-full py-10 md:px-20 px-10 flex flex-wrap relative"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="mt-[-150px] w-screen flex justify-center">
        <ShippingAndService />
      </div>

      <div className="md:p-20">
        <h1 className="text-[white] text-4xl font-bold py-10 text-wrap max-w-[550px] md:text-left text-center">
          {title}
        </h1>
        <div className="flex justify-center md:justify-start">
          <input
            type="text"
            placeholder={placeholder}
            className="px-5 py-3 rounded mr-1 outline-none max-w-[300px]"
          />
        </div>
        <div className="flex md:justify-start justify-center mt-2">
          <button className="text-[white] bg-[#CA2F2F] px-8 py-4 rounded font-bold text-sm hover:bg-[black] transition-all duration-200 ease-linear">
            {buttonText}
          </button>
        </div>

        <div className="py-5 flex md:flex-row flex-col items-center md:justify-start">
          <a href={socialLinks.facebook} className="mr-1 mb-1">
            <CiFacebook fill="white" size={32} />
          </a>
          <a href={socialLinks.xbox} className="mr-1 mb-1">
            <TbXboxX fill="white" size={32} />
          </a>
          <a href={socialLinks.instagram} className="mr-1 mb-1">
            <FaInstagram fill="white" size={28} />
          </a>
          <a href={socialLinks.email} className="mr-1 mb-1">
            <ImMail4 fill="white" size={28} />
          </a>
        </div>
        <span>
          <img
            src={trustImage}
            alt="Trust Badge"
            className="min-w-[100px]"
          />
        </span>
        <div className="mt-5">
          <NavigationLinks />
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
