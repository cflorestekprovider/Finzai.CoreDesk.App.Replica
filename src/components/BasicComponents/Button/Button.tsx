import clsx from 'clsx';
import React, { ReactNode } from 'react';

export const typeButton = {
    saveButton: "btn-light-success text-success",
    clearButton: "btn-light-info text-info",
    primaryButton: "btn-primary d-flex align-items-center ms-2"
} as const;  

type ButtonType = keyof typeof typeButton;  

interface ButtonProps {
    id: string;
    title: string;
    readonly?: boolean;
    type: ButtonType;
    icon: ReactNode;
    onClick?: () => void; 
}

const Button: React.FC<ButtonProps> = ({ title, readonly, id, type, icon, onClick }) => {
    return (
        <button 
            id={id} 
            type="button" 
            disabled={readonly}
            className={clsx("btn waves-effect waves-light", typeButton[type])}
            onClick={onClick} 
        >
            {icon}
            {title}
        </button>
    );
};

export default Button;