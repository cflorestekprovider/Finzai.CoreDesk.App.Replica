import React, { ReactNode } from 'react';

interface TitleBarProps{
    title:string;
    icon:ReactNode;
}

const TitleBar: React.FC<TitleBarProps> = ({ title, icon}) => {
  return (
    <a className="card card-hover mb-0 active" data-bs-toggle="tab" href="#personalDataTab" role="tab">
    <div className="p-3 d-flex align-items-center">
        <span className="flex-shrink-0 me-3">
            {icon}
        </span>
        <div>
            <h5 className="mb-0">{title}</h5>
        
        </div>
    </div>
</a>
  );
};

export default TitleBar;