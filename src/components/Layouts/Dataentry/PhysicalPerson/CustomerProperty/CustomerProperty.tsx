import React from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../../../../BasicComponents/Input/Input';
import Select from '../../../../BasicComponents/Select/Select';
import SelectModel from '../../../../../api/models/SelectModel/SelectModel';
import { ClearIcon, SaveIcon } from '../../../../../api/models/IconsModels/IconsModels';
import Button from '../../../../BasicComponents/Button/Button';

const CustomerProperty: React.FC = () => {

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
                        <h4>{t("dataentry.tabs.properties")}</h4>
                        <p>{t("dataentry.tabs.properties_description")}</p>
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
                                        id="propertyType"
                                        readonly={false}
                                        title={t("fields.property_type")}
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={propertyType}
                                    />
                                    <Select
                                        id="propertyStatus"
                                        readonly={false}
                                        title={t("fields.status")}
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={status}
                                    />
                                    <Input
                                        id="propertyValue"
                                        readonly={false}
                                        title={t("fields.property_value")}
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                    />

                                    <Input
                                        id='propertyDescription'
                                        readonly={false}
                                        required={true}
                                        title={t("fields.comments")}
                                        placeholder={t("fields.comments")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-6' />

                                    <Input
                                        id='propertyRegisterNumber'
                                        readonly={false}
                                        required={true}
                                        title={t("fields.register_number")}
                                        placeholder={t("fields.register_number")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />


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

export default CustomerProperty;