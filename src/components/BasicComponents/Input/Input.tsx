import React from 'react';

interface InputProps {
    id: string;
    title: string;
    readonly: boolean;
    placeholder?: string;
    required: boolean;
    classInput:string;
    value?: string;
    type?: string;
    onChange?:(e:any)=> void;
    onBlur?:(e:any)=> void;
}

const Input: React.FC<InputProps> = ({ title, readonly, placeholder, required, id, classInput, value, type = 'text', onChange, onBlur }) => {
    return (
        <div className={classInput}>
            <div className="form-floating mb-3">
                <input 
                    type={type} 
                    className="form-control"
                    readOnly={readonly}  // Agregado para readonly
                    disabled={readonly}
                    placeholder={placeholder} 
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    id={id} 
                />
                <label htmlFor={id}>
                    {required && <span className="required-tag">*</span>}
                    {title}
                </label>
            </div>
        </div>

    );
};

export default Input;