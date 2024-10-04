import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-white bg-black py-2 px-7 min-w-[220px] rounded-3xl flex items-center transition-all duration-400 ease-linear hover:bg-[#E0E0FF] hover:text-black focus:outline-none focus:ring focus:ring-opacity-50"
      aria-label={text}
    >
      <span>{text}</span>
      <span className="p-2 ml-2">
        <HiArrowNarrowRight size={17} />
      </span>
    </button>
  );
};

export default Button;
