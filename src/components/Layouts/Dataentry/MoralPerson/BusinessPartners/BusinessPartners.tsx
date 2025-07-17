import React from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../../../../BasicComponents/Input/Input';
import Select from '../../../../BasicComponents/Select/Select';
import SelectModel from '../../../../../api/models/SelectModel/SelectModel';
import { ClearIcon, SaveIcon } from '../../../../../api/models/IconsModels/IconsModels';
import Button from '../../../../BasicComponents/Button/Button';
import DatePicker from '../../../../BasicComponents/DatePicker/DatePicker';
import SearchPhysicalPerson from '../../../../BasicComponents/SearchPhysicalPerson/SearchPhysicalPerson';

const BusinessPartners: React.FC = () => {

    const { t } = useTranslation();
    
    const propertyType: SelectModel[] = [
        { value: "1", option: 'Empleado Privado' },
        { value: "2", option: 'Empleado Público' },
        { value: "3", option: 'Oficio' }
    ];

    const status: SelectModel[] = [
        { value: "1", option: 'Activo' },
        { value: "2", option: 'Inactivo' }
    ];

    return (
        <div className="row">
            <div className="col-12">
                <div className="ui-title-action-bar">
                    <div className="ui-title">
                        <h4>{t("dataentry.tabs.stockholders")}</h4>
                        <p>{t("dataentry.tabs.stockholders_description")}</p>
                    </div>
                    <div className="ui-action-bar">


                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="tab-content">
                            <form>
                                <div className="row form-compact-holder">

                                    <Select
                                        id="stockHolderType"
                                        readonly={false}
                                        title={t("fields.type")}
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={propertyType} />

                                    <Input
                                        id='percentage'
                                        readonly={false}
                                        required={false}
                                        title={t("fields.percentage")}
                                        placeholder={t("fields.percentage")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-6' />

                                    <Select
                                        id="stockHolderLevel"
                                        readonly={false}
                                        title='Nivel'
                                        required={false}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={status} />

                                    <Select
                                        id="stockHolderClientType"
                                        readonly={false}
                                        title='Tipo de Cliente'
                                        required={false}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={status} />
                                    
                                    <SearchPhysicalPerson />
                                    
                                    <Input
                                        id='businessId'
                                        readonly={false}
                                        required={true}
                                        title={t("fields.business_identification")} 
                                        placeholder={t("fields.business_identification")} 
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id='legalName'
                                        readonly={false}
                                        required={true}
                                        title={t("fields.legal_name")} 
                                        placeholder={t("fields.legal_name")} 
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id='customerCode '
                                        readonly={false}
                                        required={true}
                                        title={t("fields.customer_code")} 
                                        placeholder={t("fields.customer_code")} 
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />
                                    
                                    <DatePicker
                                        id="stockHolderStartDate"
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        readonly={false}
                                        required={true}
                                        title={t("fields.start_date")} />

                                    <DatePicker
                                        id="stockHolderEndDate"
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        readonly={false}
                                        required={true}
                                        title={t("fields.end_date")}/>

                                    <div>
                                        <input className="form-check-input me-1" type="checkbox" value="" id="check_2" />
                                        <label className="form-check-label" htmlFor="check_2">
                                            {t("fields.active")}
                                        </label>
                                    </div>
                                    <div className="col-12">
                                        <hr />
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
                                        <Button
                                                id='save'
                                                title={t("buttons.save")}
                                                type='saveButton'
                                                icon={<SaveIcon />} />

                                            <Button
                                                id='clear'
                                                title={t("buttons.clear")}
                                                type='clearButton'
                                                icon={<ClearIcon />} />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default BusinessPartners;