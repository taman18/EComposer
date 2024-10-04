import React, { useState, useRef, useEffect } from "react";
import NavLinkItem from "./components/NavLinkItems";
import MobileMenuToggle from "./components/MobileMenuToggle";
import Logo from "./components/Logo";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navbarRef} className="bg-white border-gray-200 bg-slate-300">
      <div className="flex flex-wrap items-center justify-between p-4">
        <Logo />

        <MobileMenuToggle isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        <div className={`w-full md:w-auto md:block ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="hidden md:flex font-medium md:space-x-8 rtl:space-x-reverse">
            <NavLinkItem to="/">Seasonal Holiday</NavLinkItem>
            <NavLinkItem to="/contactUs">Contact Us</NavLinkItem>
          </ul>

          <ul className={`flex flex-col p-4 md:hidden bg-gray-50 border border-gray-100 rounded-lg mt-4 ${isMenuOpen ? "block" : "hidden"}`}>
            <NavLinkItem to="/" onClick={toggleMenu}>Seasonal Holiday</NavLinkItem>
            <NavLinkItem to="/contactUs" onClick={toggleMenu}>Contact Us</NavLinkItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
