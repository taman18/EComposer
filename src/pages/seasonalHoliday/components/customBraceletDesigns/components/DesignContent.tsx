import React from 'react';
import { DesignContentProps } from './DesignContent.type';

const DesignContent: React.FC<DesignContentProps> = ({ imageSrc, title, description, reverse }) => {
  return (
    <div className={`flex flex-col sm:flex-row ${reverse ? 'sm:flex-row-reverse' : ''} mb-10`}>
      <img src={imageSrc} alt={title} className="mb-4 sm:mb-0"  />
      <div className="sm:w-1/2 sm:pl-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DesignContent;