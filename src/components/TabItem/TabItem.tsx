import clsx from 'clsx';
import React, { ReactNode } from 'react';

interface TabItemProps{
    title:string;
    icon:ReactNode;
    referenciaTab:string;
    isActive?:boolean;
}

const TabItem: React.FC<TabItemProps> = ({ title, icon, referenciaTab, isActive = false }) => {
  return (
    <a className={clsx("card card-hover mb-0", (isActive && 'active'))} data-bs-toggle="tab" href={`#${referenciaTab}`} role="tab">
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

export default TabItem;