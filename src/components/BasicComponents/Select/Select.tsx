import React from 'react';
import SelectModel from '../../../api/models/SelectModel/SelectModel';

interface SelectProps {
    id: string;
    title: string;
    readonly: boolean;
    required: boolean;
    classInput: string;
    options?: SelectModel[];
    useSeleccionOption?:boolean;
    selectedValue?:string;
    icon?: React.ReactNode; 
    onChange?:(option:number) => void; 
}

const Select: React.FC<SelectProps> = ({ title, readonly, required, id, classInput, options, useSeleccionOption = true, selectedValue, icon, onChange }) => {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = parseInt(event.target.value);
        if (!isNaN(selectedOption)) {
            onChange?.(selectedOption); // ✅ Llamamos a la función con el valor seleccionado
        }
    };

    return (
        <div className={classInput}>
            <div className="ui-select mb-3">
                <label htmlFor={id}>
                    {
                        required && <span className="required-tag">*</span>
                    } {icon && <span className="me-2">{icon}</span>} {title}
                </label>
                <select className="form-select col-12" id={id}
                    disabled={readonly}
                    onChange={handleChange}
                    value={selectedValue}>
                    {
                        useSeleccionOption && <option value="0">Seleccione...</option>
                    }
                    {
                        options?.map((item) => {
                            return (<option 
                                        key={item.value} 
                                        value={item.value}>{item.option}</option>)
                        })
                    }
                </select>
            </div>
        </div>
    );
};

export default Select;