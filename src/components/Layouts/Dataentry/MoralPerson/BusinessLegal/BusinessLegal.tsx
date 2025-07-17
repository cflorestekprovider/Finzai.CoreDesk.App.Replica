import React from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../../../../BasicComponents/Input/Input';
import Select from '../../../../BasicComponents/Select/Select';
import SelectModel from '../../../../../api/models/SelectModel/SelectModel';
import { ClearIcon, SaveIcon } from '../../../../../api/models/IconsModels/IconsModels';
import Button from '../../../../BasicComponents/Button/Button';
import SearchPhysicalPerson from '../../../../BasicComponents/SearchPhysicalPerson/SearchPhysicalPerson';
import DatePicker from '../../../../BasicComponents/DatePicker/DatePicker';

const BusinessLegal: React.FC = () => {

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
                        <h4>{t("dataentry.tabs.legal_representatives")}</h4>
                        <p>{t("dataentry.tabs.legal_representatives_description")}</p>
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
                                        id="empoweredPosition"
                                        readonly={false}
                                        title={t("fields.position")}
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={propertyType} />

                                    <Select
                                        id="empoweredPersonality"
                                        readonly={false}
                                        title={t("fields.personality")}
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={status} />

                                    <Select
                                        id="empoweredSing"
                                        readonly={false}
                                        title={t("fields.power_sign")}
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={status} />

                                    <SearchPhysicalPerson />

                                    <DatePicker
                                        id="empoweredStartDate"
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        readonly={false}
                                        required={true}
                                        title={t("fields.start_date")} />

                                    <Select
                                        id="empoweredType"
                                        readonly={false}
                                        title={t("fields.power_type")}
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={status} />

                                    <DatePicker
                                        id="powerDate"
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        readonly={false}
                                        required={true}
                                        title={t("fields.power_date")} />

                                    <Input
                                        id="powerNumber"
                                        readonly={false}
                                        title={t("fields.power_number")}
                                        required={true}
                                        placeholder={t("fields.power_number")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id='powerNotary'
                                        readonly={false}
                                        required={true}
                                        title={t("fields.power_notary")}
                                        placeholder={t("fields.power_notary")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Select
                                        id="powerRecordType"
                                        readonly={false}
                                        title={t("fields.power_record_type")}
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={status} />


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

export default BusinessLegal;