import React from "react";
import CountdownTimer from "./CountdownTimer";
import { LandingImageSectionProps } from "./LandingImageSection.type";

const LandingImageSection: React.FC<LandingImageSectionProps> = ({
  backgroundImage,
  heroLayerImage1,
  heroLayerImage2,
  countdownMessage,
  targetDate,
  headingText,
  subheadingText,
  buttonText,
}) => {
  return (
    <>
      <div
        className="relative bg-cover bg-center md:h-[130vh] h-[100vh] w-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%)",
        }}
      >
        <div className="absolute top-0 md:left-[48%] left-[10%] text-white">
          <img
            src={heroLayerImage1}
            alt=""
            className="h-[150px] md:h-[300px] lg:h-full object-cover"
            
          />

          <div className="absolute md:top-16 md:left-[-50px] left-[1px] top-11">
            <img src={heroLayerImage2} alt="" className="h-[50px] md:h-full" data-aos="zoom-in" />
          </div>

          <div className="py-3">
            <h1 className="text-black font-bold text-l">{countdownMessage}</h1>
          </div>

          <CountdownTimer targetDate={targetDate}  />

          <div className="py-3">
            <h1 className="font-bold md:text-6xl text-3xl text-black" >
              {headingText}
            </h1>
          </div>

          <div className="py-3">
            <p className="text-black font-medium md:text-xl text-medium" data-aos="fade-up" data-aos-duration="2000">
              {subheadingText}
            </p>
          </div>

          <div className="py-3">
            <button className="bg-black text-white md:px-9 px-5 py-3 rounded md:font-bold cursor-pointer font-normal" data-aos="fade-up" data-aos-duration="2000">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingImageSection;
