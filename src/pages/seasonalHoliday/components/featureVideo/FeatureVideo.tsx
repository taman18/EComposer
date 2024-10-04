import React from 'react';
import { FeatureVideoProps } from './FeatureVideo.type';


const FeatureVideo: React.FC<FeatureVideoProps> = ({ videoSrc }) => {
  return (
    <section className="flex justify-center relative md:mt-[-280px] mt-[-150px]">
      <div className="max-w-[55%]">
        <video
          autoPlay
          className="w-full h-auto rounded-3xl min-w-[150px] border-white border-4 rounded-3xl"
          muted
          loop
          playsInline
          height="auto"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default FeatureVideo;
