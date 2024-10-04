import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface ExpandableArrowProps {
  arrowType: "expand" | "collapse";
  iconSize?: number;
}

const ExpandableArrow: React.FC<ExpandableArrowProps> = ({
  arrowType,
  iconSize = 20,
}) => {
  return (
    <button
      className={`p-3 rounded-3xl flex items-center justify-center transition-all duration-200 ease-linear ${
        arrowType === "collapse"
          ? "bg-[#E0E0FF] hover:bg-[#D0D0FF]"
          : "border border-black hover:bg-[#E0E0FF] hover:border-transparent"
      }`}
      aria-hidden="true"
    >
      {arrowType === "collapse" ? (
        <MdOutlineKeyboardArrowDown size={iconSize} />
      ) : (
        <MdKeyboardArrowUp size={iconSize} />
      )}
    </button>
  );
};

export default ExpandableArrow;
