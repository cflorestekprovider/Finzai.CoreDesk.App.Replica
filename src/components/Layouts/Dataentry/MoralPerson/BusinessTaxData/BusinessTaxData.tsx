import React from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../../../../BasicComponents/Input/Input';
import Select from '../../../../BasicComponents/Select/Select';
import SelectModel from '../../../../../api/models/SelectModel/SelectModel';
import { ClearIcon, SaveIcon } from '../../../../../api/models/IconsModels/IconsModels';
import Button from '../../../../BasicComponents/Button/Button';

const BusinessTaxData: React.FC = () => {

    const { t } = useTranslation();
    
    const propertyType: SelectModel[] = [
        { value: "1", option: 'Empleado Privado' },
        { value: "2", option: 'Empleado Público' },
        { value: "3", option: 'Oficio' }
    ];

   

    return (
        <div className="row">
            <div className="col-12">
                <div className="ui-title-action-bar">
                    <div className="ui-title">
                    <h4>{t("dataentry.tabs.tax_data")}</h4>
                    <p>{t("dataentry.tabs.tax_data_description")}</p>
                    </div>
                    <div className="ui-action-bar">


                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="tab-content">
                            <form>
                                <div className="row form-compact-holder">

                                    <Input
                                        id="taxDataLegalName"
                                        readonly={true}
                                        title={t("fields.social_reason")}
                                        required={false}
                                        placeholder={t("fields.social_reason")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataRegimen"
                                        readonly={true}
                                        title={t("fields.fiscal_regime")}
                                        required={false}
                                        placeholder={t("fields.fiscal_regime")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Select
                                        id="taxDataRegimenFiscalCode"
                                        readonly={false}
                                        title={t("fields.fiscal_regime_code")}
                                        required={false}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={propertyType} />

                                    <Select
                                        id="taxDataCFDiCode"
                                        readonly={false}
                                        title={t("fields.cfdi_code")}
                                        required={false}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={propertyType} />

                                    <Input
                                        id="taxDataEmail"
                                        readonly={true}
                                        title={t("fields.email")}
                                        required={false}
                                        placeholder={t("fields.email")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataRFC"
                                        readonly={true}
                                        title={t("fields.RFC")}
                                        required={false}
                                        placeholder={t("fields.RFC")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataCapitalRegimen"
                                        readonly={true}
                                        title={t("fields.capital_regime")}
                                        required={false}
                                        placeholder={t("fields.capital_regime")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataComercialName"
                                        readonly={true}
                                        title={t("fields.commercial_name")}
                                        required={false}
                                        placeholder={t("fields.commercial_name")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataStatus"
                                        readonly={true}
                                        title={t("fields.registry_status")}
                                        required={false}
                                        placeholder={t("fields.padron_status")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataDate"
                                        readonly={true}
                                        title={t("fields.last_status_change_date")}
                                        required={false}
                                        placeholder={t("fields.last_status_change_date")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataPostalCode"
                                        readonly={true}
                                        title={t("fields.postal_code")}
                                        required={false}
                                        placeholder={t("fields.postal_code")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataRoadType"
                                        readonly={true}
                                        title={t("fields.road_type")}
                                        required={false}
                                        placeholder={t("fields.road_type")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataRoadName"
                                        readonly={true}
                                        title={t("fields.road_name")}
                                        required={false}
                                        placeholder={t("fields.road_name")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataExternalNumber"
                                        readonly={true}
                                        title={t("fields.external_number")}
                                        required={false}
                                        placeholder={t("fields.external_number")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataInternalNumber"
                                        readonly={true}
                                        title={t("fields.intern_number")}
                                        required={false}
                                        placeholder={t("fields.intern_number")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataSuburbName"
                                        readonly={true}
                                        title={t("fields.suburb_name")}
                                        required={false}
                                        placeholder={t("fields.suburb_name")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataLocalityName"
                                        readonly={true}
                                        title={t("fields.locality_name")}
                                        required={false}
                                        placeholder={t("fields.locality_name")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataMunicipalityName"
                                        readonly={true}
                                        title={t("fields.municipality_name")}
                                        required={false}
                                        placeholder={t("fields.municipality_name")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataFederalEntity"
                                        readonly={true}
                                        title={t("fields.federal_entity")}
                                        required={false}
                                        placeholder={t("fields.federal_entity")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataBetweenStreet"
                                        readonly={true}
                                        title={t("fields.between_street")}
                                        required={false}
                                        placeholder={t("fields.between_street")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataAndStreet"
                                        readonly={true}
                                        title={t("fields.and_street")}
                                        required={false}
                                        placeholder={t("fields.and_street")}
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

export default BusinessTaxData;