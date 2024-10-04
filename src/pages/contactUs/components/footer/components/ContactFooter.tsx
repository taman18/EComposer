import React from "react";
import EmailSignUpForm from "../../../../../components/common/EmailSignUpForm";
import { ContactItemsProps } from "./Footer.types";

const ContactFooter: React.FC<ContactItemsProps> = ({ links }) => {
  return (
    <section className="mr-4 px-0 p-5 md:pl-0 pt-0 mb-4 max-w-[1000px]" data-aos="fade-up">
      {links.map(({ id, type, content }) => {
        switch (type) {
          case "logo":
            return (
              <img
                key={id}
                src={content}
                alt="Company Logo"
                className="h-[32px] mb-5 cursor-pointer"
              />
            );
          case "email":
            return (
              <p
                key={id}
                className="text-[#3f3f3f] py-1 cursor-pointer transition-all duration-200 ease-linear hover:text-[#787878]"
                aria-label={`Email: ${content}`}
              >
                {`Email: ${content}`}
              </p>
            );
          case "phone":
            return (
              <p
                key={id}
                className="text-[#3f3f3f] pb-1 cursor-pointer transition-all duration-200 ease-linear hover:text-[#787878]"
                aria-label={`Phone: ${content}`}
              >
                {`Phone: ${content}`}
              </p>
            );
          case "signup":
            return (
              <p key={id} className="text-[#3f3f3f] pt-5 pb-3">
                {content}
              </p>
            );
          default:
            return null;
        }
      })}
      <EmailSignUpForm buttonText="Sign Up" />
    </section>
  );
};

export default ContactFooter;
