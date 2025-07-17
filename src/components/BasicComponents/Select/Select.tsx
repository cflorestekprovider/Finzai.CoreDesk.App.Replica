import React from 'react';
import { useTranslation } from 'react-i18next';
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
    onChange?:(e:any)=> void;
}

const Select: React.FC<SelectProps> = ({ title, readonly, required, id, classInput, options, useSeleccionOption = true, selectedValue, icon, onChange }) => {
    const { t } = useTranslation();
    return (
        <div className={classInput}>
            <div className="ui-select mb-3">
                <label htmlFor={id}>
                    {
                        required && <span className="required-tag">*</span>
                    } {icon && <span className="me-2">{icon}</span>} {title}
                </label>
                <select className="form-select col-12" id={id}
                onChange={onChange}
                    disabled={readonly}
                    value={selectedValue}>
                    {
                        useSeleccionOption && <option value="0">{t("fields.select")}</option>
                    }
                    {
                        options?.map((item) => {
                            return (<option key={item.value} value={item.value}>{item.option}</option>)
                        })
                    }
                </select>
            </div>
        </div>
    );
};

export default Select;