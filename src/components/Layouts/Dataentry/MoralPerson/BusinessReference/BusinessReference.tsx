import React from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../../../../BasicComponents/Input/Input';
import Select from '../../../../BasicComponents/Select/Select';
import SelectModel from '../../../../../api/models/SelectModel/SelectModel';
import { ClearIcon, PhoneIcon, SaveIcon } from '../../../../../api/models/IconsModels/IconsModels';
import Button from '../../../../BasicComponents/Button/Button';
import DatePicker from '../../../../BasicComponents/DatePicker/DatePicker';
import SearchPhysicalPerson from '../../../../BasicComponents/SearchPhysicalPerson/SearchPhysicalPerson';
import CustomInputWithModal from '../../../../BasicComponents/CustomInputWithModal/CustomInputWithModal';
// import PostalCode from '../../../../BasicComponents/PostalCode/PostalCode';

const BusinessReference: React.FC = () => {

        const { t } = useTranslation();
    
    const status: SelectModel[] = [
        { value: "1", option: 'Activo' },
        { value: "2", option: 'Inactivo' }
    ];

    return (
        <div className="row">
            <div className="col-12">
                <div className="ui-title-action-bar">
                    <div className="ui-title">
                    <h4>{t("dataentry.tabs.references")}</h4>
                    <p>{t("dataentry.tabs.references_description")}</p>
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
                                        id="referenceType"
                                        title={t("fields.reference_type")}
                                        required={true}
                                        readonly={false}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={status}
                                    />

                                    <div className='col-12 col-md-6 col-lg-4 col-xl-3'>
                                        <div className='row'>
                                            <Input
                                                id="sinceYear"
                                                title={t("fields.known_since_years")}
                                                required={true}
                                                readonly={false}
                                                classInput='col-12 col-md-6 col-lg-6 col-xl-6 month-year-inputmask'
                                            />

                                            <Input
                                                id="sinceMonth"
                                                title={t("fields.known_since_months")}
                                                required={true}
                                                readonly={false}
                                                classInput='col-12 col-md-6 col-lg-6 col-xl-6 month-year-inputmask'
                                            />
                                        </div>


                                    </div>


                                    <DatePicker
                                        id="referenceDate"
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        readonly={false}
                                        required={true}
                                        title={t("fields.date")} />

                                    <SearchPhysicalPerson />

                                    <CustomInputWithModal
                                        id="referencePhone"
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        required={true}
                                        title={t("fields.phone")}
                                        icon={<PhoneIcon />} />

                                    <Select
                                        id="country"
                                        readonly={false}
                                        title={t("fields.country")}
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={status} />

                                    {/* <PostalCode address={_} onAddressChange={_} /> */}

                                    <Input
                                        id='addressStreet'
                                        readonly={true}
                                        required={false}
                                        title={t("fields.street")}
                                        placeholder={t("fields.street")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id='addressExternalNumber'
                                        readonly={true}
                                        required={false}
                                        title={t("fields.external_number")}
                                        placeholder={t("fields.external_number")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id='addressInternalNumber'
                                        readonly={true}
                                        required={false}
                                        title={t("fields.intern_number")}
                                        placeholder={t("fields.intern_number")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id='addressCrossWith'
                                        readonly={true}
                                        required={false}
                                        title={t("fields.cross_with")}
                                        placeholder={t("fields.cross_with")}
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

export default BusinessReference;