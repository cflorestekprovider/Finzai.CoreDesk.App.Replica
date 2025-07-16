import React from 'react';

interface InputProps {
    id: string;
    title: string;
    readonly: boolean;
    placeholder?: string;
    required: boolean;
    classInput:string;
}

const Input: React.FC<InputProps> = ({ title, readonly, placeholder, required, id, classInput }) => {
    return (
        <div className={classInput}>
            <div className="form-floating mb-3">
                <input 
                    type="text" 
                    className="form-control"
                    readOnly={readonly}  // Agregado para readonly
                    disabled={readonly}
                    placeholder={placeholder} 
                    id={id} />
                    <label htmlFor={id}>
                    {
                        required && <span className="required-tag">*</span>
                    }
                    {title}</label>
            </div>
        </div>

    );
};

export default Input;