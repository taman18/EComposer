import React from "react";
import { useSelector } from "react-redux";
import { selectDadGifts } from "../../../../store/slices/dadGiftSlice";

const ImageCarousel: React.FC = () => {
  const dadGifts = useSelector(selectDadGifts);
  return (
    <div
      className="relative md:p-20 p-10 bg-[#F8F8F2]"
      style={{
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 90%)',
      }}
    >
      <div className="flex overflow-hidden px-0 pb-20 flex justify-center flex-wrap">
        {dadGifts.map((item, index) => (
          <div
            key={index}
            className="p-2 cursor-pointer bg-white rounded-2xl min-h-[400px] p-3 flex flex-col items-center border m-4"
          >
            <img
              src={item.img}
              alt={`Slide ${index}`}
              className="max-h-[250px] rounded-lg"
            />
            <h3 className="pt-4 font-normal">{item.title}</h3>
            <span className="flex items-center">
              <p className="pr-2 font-medium">${item.price}</p>
              <p className="line-through text-[#C0C0C0] font-medium">${Number(item.price) + 50}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
