import React from "react";
import { NAVIGATION_ITEMS } from "../../../../utils/mockData";


const NavigationLinks: React.FC = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col flex-wrap items-center md:items-left md:space-x-4">
        {NAVIGATION_ITEMS.map((item) => (
          <span key={item.id} className="cursor-pointer text-[#FFF] text-sm font-medium hover:text-[#dadada] transition-all duration-100 ease-linear my-1">
            {item.label}
          </span>
        ))}
      </div>
    </>
  );
};

export default NavigationLinks;
