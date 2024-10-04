import React from "react";
import { NavLink } from "react-router-dom";

interface NavLinkItemProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({ to, children, onClick }) => {
  return (
    <li>
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          isActive
            ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-blue-500"
            : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavLinkItem;
