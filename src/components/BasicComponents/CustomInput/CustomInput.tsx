import React, { ReactNode } from 'react';

interface CustomInputWithModalProps {
    id: string;
    title: string;
    placeholder?: string;
    required: boolean;
    classInput:string;
    icon:ReactNode;
    readonly?:boolean;
    readonlyButton?:boolean;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomInput: React.FC<CustomInputWithModalProps> = ({ title, placeholder, required, id, classInput, icon, readonly = false, readonlyButton = false, value, onChange, onClick }) => {
    return (
        <div className={classInput}>
            <div className="input-group form-floating mb-3">
                <input 
                    type="text" 
                    className="form-control"
                    placeholder={placeholder} 
                    value={value}
                    onChange={onChange} 
                    readOnly={readonly}
                    disabled={readonly}

                    id={id} />
                    <button className="btn btn-primary addon-btn-attached-right" 
                        type="button" 
                        onClick={onClick}
                        disabled={readonlyButton}

                        data-bs-toggle="offcanvas" 
                        data-bs-target="#offcanvasDependientes" 
                        aria-controls="offcanvasRight">
                        {icon}
                    </button>
                    <label htmlFor={id}>
                    {
                        required && <span className="required-tag">*</span>
                    }
                    {title}</label>
            </div>
        </div>
    );
};

export default CustomInput;