import React, { ReactNode } from 'react';

interface CustomInputWithModalProps {
    id: string;
    title: string;
    readonly?: boolean;
    placeholder?: string;
    required: boolean;
    classInput:string;
    icon:ReactNode;
}

const CustomInputWithModal: React.FC<CustomInputWithModalProps> = ({ title, readonly = true, placeholder, required, id, classInput, icon }) => {
    return (
        <div className={classInput}>
            <div className="input-group form-floating mb-3">
                <input 
                    type="text" 
                    className="form-control"
                    readOnly={readonly}  // Agregado para readonly
                    disabled={readonly}
                    placeholder={placeholder} 
                    id={id} />
                    <button className="btn btn-primary addon-btn-attached-right" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDependientes" aria-controls="offcanvasRight">
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

export default CustomInputWithModal;