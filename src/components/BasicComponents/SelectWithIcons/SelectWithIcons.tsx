import React from 'react';
import SelectModel from '../../../api/models/SelectModel/SelectModel';

interface SelectWithIconProps {
    id: string;
    title: string;
    options?: SelectModel[];
    icon?: React.ReactNode;
    onClick?:(option: number) => void; 
}

const SelectWithIcon: React.FC<SelectWithIconProps> = ({ title, id, options, icon, onClick }) => {
    return (
        <div className="dropdown filter-add-drop-headblock">
            <button 
                className="btn d-flex align-items-center border filterdrop-btn" 
                type="button" 
                id={id} 
                data-bs-toggle="dropdown" 
                aria-expanded="false">
                {icon}
                {title}
                <span className="ms-2">
                    <i className="ri-arrow-down-s-line fs-4"></i>
                </span>
            </button>
            <ul className="dropdown-menu" aria-labelledby={id} >
                {
                    options?.map((item) => {
                        return (
                            <li key={item.option}>
                                <a className="dropdown-item" href="#"  onClick={() => onClick?.(parseInt(item.option.toString()))}>
                                    {item.icon}
                                    {item.value}
                                   
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default SelectWithIcon;