import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { InteractiveProductDisplayProps } from "./InteractiveProductDisplay.types";



const InteractiveProductDisplay: React.FC<InteractiveProductDisplayProps> = ({
  images,
  soldCount,
  mainText,
  subText,
  giftPackingImage,
  mainProductImage,
}) => {
  const [showFifthImage, setShowFifthImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <>
      <div className="md:px-20 px-10">
        <div className="flex flex-col md:flex-row gap-4 flex-col-reverse">
          <div className="flex md:flex-col flex-row gap-3 relative">
            {images?.slice(0, showFifthImage ? 5 : 4)?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product ${index}`}
                onClick={() => setSelectedImage(image)}
                className={`w-14 h-14 cursor-pointer rounded-md border-2 ${
                  selectedImage === image
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
              />
            ))}

            {!showFifthImage && (
              <span
                className="flex justify-center cursor-pointer"
                onClick={() => setShowFifthImage(true)}
              >
                <span className="hidden md:inline">
                  <FaChevronDown />
                </span>
                <span className="inline md:hidden pt-4">
                  <FaChevronRight />
                </span>
              </span>
            )}
          </div>

          <div className="relative">
            <img
              src={selectedImage}
              alt="Main Product"
              className="w-[400px] h-auto rounded-lg"
            />

            <div className="absolute font-bold top-2 md:right-2 right-[10px] bg-yellow-400 text-black px-2 py-1 rounded-full text-xs">
              {soldCount} Sold
            </div>

            <div className="absolute top-12 md:right-0 right-[2px]">
              <img
                src={mainProductImage}
                alt="Made in USA"
                className="h-[100px]"
              />
            </div>
          </div>
        </div>
        <div className="py-20">
          <div
            className="max-w-[490px] h-[170px] p-5 rounded-xl flex items-center"
            style={{
              backgroundImage: `url(${giftPackingImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <img
              src={mainProductImage}
              alt="box"
              className="rounded-xl h-[80px]"
            />
            <div className="p-5">
              <h2 className="text-white md:text-2xl text-lg font-black">
                {mainText}
              </h2>
              <p className="text-white md:font-normal text-sm font-light">
                {subText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InteractiveProductDisplay;
