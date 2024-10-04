import React from "react";
import { NavLink } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img
        src="https://ecomposer.app/images/logo-text.png"
        className="h-8"
        alt="Logo"
      />
    </NavLink>
  );
};

export default Logo;
