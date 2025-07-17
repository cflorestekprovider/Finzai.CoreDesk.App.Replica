import React from 'react';
import { useTranslation } from 'react-i18next';
import SelectModel from '../../../api/models/SelectModel/SelectModel';

interface SimpleSelectProps {
    id: string;
    required: boolean;
    classInput: string;
    options?: SelectModel[];
    useSeleccionOption?:boolean;
    selectedValue?:string;
    onChange?:(e:any)=> void;
}

const SimpleSelect: React.FC<SimpleSelectProps> = ({ required, id, classInput, options, useSeleccionOption = true, selectedValue, onChange }) => {
    const { t } = useTranslation();
    return (
        <div className={classInput}>
            <label htmlFor={id}>
                {
                    required && <span className="required-tag">*</span>
                }
            </label>
            <select className="form-select" id={id}
                onChange={onChange}
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
    );
};

export default SimpleSelect;