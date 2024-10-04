import React from "react";
import { TfiEmail } from "react-icons/tfi";

interface EmailSignUpFormProps {
  buttonText: string;
}

const EmailSignUpForm: React.FC<EmailSignUpFormProps> = ({ buttonText }) => {
  return (
    <>
      <div className="flex border border-black overflow-hidden max-w-[400px]">
        <div className="flex items-center px-3">
          <TfiEmail size={30} />

          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            className="outline-none px-3 py-2 w-full"
          />
        </div>
        <button className="bg-black text-white w-[120px] m-1 py-2 cursor-pointer hover:bg-[#E0E0FF] hover:text-[black] cursor-pointer  transition-all duration-200 ease-linear">
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default EmailSignUpForm;
