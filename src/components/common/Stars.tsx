import React from "react";
import { FaStar } from "react-icons/fa";

interface StarsProps {
  count?: number;
  color?: string;
}

const Stars: React.FC<StarsProps> = ({ count = 5, color = 'black' }) => {
  return (
    <>
      {[...Array(count)].map((_, index) => (
        <FaStar fill={color} key={index} className={`mr-1`} />
    ))}
    </>
  );
};

export default Stars;
