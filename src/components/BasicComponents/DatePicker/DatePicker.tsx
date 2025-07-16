import React from 'react';

interface DatePickerProps {
    id: string;
    title: string;
    readonly: boolean;
    placeholder?: string;
    required: boolean;
    classInput: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ title, readonly, required, id, classInput }) => {
    return (
        <div className={classInput}>
            <div className="form-floating mb-3">
                <input 
                    type="date" 
                    className="form-control"
                    readOnly={readonly} 
                    disabled={readonly} 
                    id={id}
                    required={required} 
                />
                <label htmlFor={id}>
                    {required && <span className="required-tag">*</span>}
                    {title}
                </label>
            </div>
        </div>
    );
};

export default DatePicker;
