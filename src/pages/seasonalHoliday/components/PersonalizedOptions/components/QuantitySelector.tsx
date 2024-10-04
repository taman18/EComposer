import React, { useState } from "react";

const QuantitySelector:React.FC = () => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <span className="flex items-center justify-center space-x-4 border border-gray-400 px-3 md:py-0 py-2 rounded-3xl">
      <button
        onClick={handleDecrement}
        className="hover:bg-[red] text-2xl hover:text-white text-black font-bold w-8 h-8 rounded-full flex items-center justify-center"
      >
        −
      </button>
      <span className="text-xl font-semibold">{quantity}</span>
      <button
        onClick={handleIncrement}
        className="hover:bg-[red] text-2xl hover:text-white text-black font-bold w-8 h-8 rounded-full flex items-center justify-center"
      >
        +
      </button>
    </span>
  );
};

export default QuantitySelector;
