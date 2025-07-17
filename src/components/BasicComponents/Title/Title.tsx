import React from 'react';

interface TitleProps {
  maintitle?: string;
  secondarytitle?: string; 
  subtitle?: string; 
}

const Title: React.FC<TitleProps> = ({ maintitle, subtitle, secondarytitle }) => {
  return (
    <div className="page-Title">
        <div className="align-self-center">
          <h1 className="mb-0 fw-bold">{maintitle}</h1>
          <h2 className="mb-0 fw-bold">{secondarytitle}</h2>
          <h4 className="mb-0 fw-normal pt-2">{subtitle}</h4>
        </div>
    </div>
  );
};

export default Title;
