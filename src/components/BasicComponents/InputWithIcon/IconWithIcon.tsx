import React, { ReactNode } from 'react';

interface InputProps {
    id: string;
    title: string;
    readonly: boolean;
    placeholder?: string;
    required: boolean;
    classInput: string;
    iconLeft: ReactNode;
    iconRight: ReactNode;
}

const InputWithIcon: React.FC<InputProps> = ({ placeholder, id, classInput, iconLeft, iconRight }) => {
    return (
        <div className="dashboard-nameplate">
            <div className="form-nameplate-editable">
                {iconLeft}
                {iconRight}
                <input type="text"
                    className={classInput}
                    placeholder={placeholder}
                    id={id} />
            </div>
        </div>
    );
};

export default InputWithIcon;