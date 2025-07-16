import React from 'react';
import Input from '../../../../BasicComponents/Input/Input';
import Select from '../../../../BasicComponents/Select/Select';
import SelectModel from '../../../../../api/models/SelectModel/SelectModel';
// import DatePicker from '../../../BasicComponents/DatePicker/DatePicker';
// import CustomInputWithModal from '../../../BasicComponents/CustomInputWithModal/CustomInputWithModal';
import { ClearIcon, SaveIcon } from '../../../../../api/models/IconsModels/IconsModels';
import Button from '../../../../BasicComponents/Button/Button';

const BusinessTaxData: React.FC = () => {

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
                        <h4>Datos Fiscales</h4>
                        <p>DESCRIPCIÓN</p>
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
                                        title='Razón Social'
                                        required={false}
                                        placeholder='Razón Social'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataRegimen"
                                        readonly={true}
                                        title='Régimen Fiscal'
                                        required={false}
                                        placeholder='Régimen Fiscal'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Select
                                        id="taxDataRegimenFiscalCode"
                                        readonly={false}
                                        title='Código de Régimen Fiscal'
                                        required={false}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={propertyType} />

                                    <Select
                                        id="taxDataCFDiCode"
                                        readonly={false}
                                        title='Código de CFDi'
                                        required={false}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={propertyType} />

                                    <Input
                                        id="taxDataEmail"
                                        readonly={true}
                                        title='Correo Electrónico'
                                        required={false}
                                        placeholder='Correo Electrónico'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataRFC"
                                        readonly={true}
                                        title='RFC'
                                        required={false}
                                        placeholder='RFC'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataCapitalRegimen"
                                        readonly={true}
                                        title='Régimen de capital'
                                        required={false}
                                        placeholder='Régimen de capital'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataComercialName"
                                        readonly={true}
                                        title='Nombre Comercial'
                                        required={false}
                                        placeholder='Nombre Comercial'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataStatus"
                                        readonly={true}
                                        title='Estatus en el padrón'
                                        required={false}
                                        placeholder='Estatus en el padrón'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataDate"
                                        readonly={true}
                                        title='Fecha de último cambio de estado'
                                        required={false}
                                        placeholder='Fecha de último cambio de estado'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataPostalCode"
                                        readonly={true}
                                        title='Código postal'
                                        required={false}
                                        placeholder='Código postal'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataRoadType"
                                        readonly={true}
                                        title='Tipo de víalidad'
                                        required={false}
                                        placeholder='Tipo de víalidad'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataRoadName"
                                        readonly={true}
                                        title='Nombre de víalidad'
                                        required={false}
                                        placeholder='Nombre de víalidad'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataExternalNumber"
                                        readonly={true}
                                        title='Número exterior'
                                        required={false}
                                        placeholder='Número exterior'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataInternalNumber"
                                        readonly={true}
                                        title='Número interior'
                                        required={false}
                                        placeholder='Número interior'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataSuburbName"
                                        readonly={true}
                                        title='Nombre de la colonia'
                                        required={false}
                                        placeholder='Nombre de la colonia'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataLocalityName"
                                        readonly={true}
                                        title='Nombre de la localidad'
                                        required={false}
                                        placeholder='Nombre de la localidad'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataMunicipalityName"
                                        readonly={true}
                                        title='Nombre del municipio'
                                        required={false}
                                        placeholder='Nombre del municipio'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataFederalEntity"
                                        readonly={true}
                                        title='Entidad federativa'
                                        required={false}
                                        placeholder='Entidad federativa'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataBetweenStreet"
                                        readonly={true}
                                        title='Entre calles'
                                        required={false}
                                        placeholder='Entre calles'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id="taxDataAndStreet"
                                        readonly={true}
                                        title='Y calle'
                                        required={false}
                                        placeholder='Y calle'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <div className="col-12">
                                        <hr />
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
                                            <Button
                                                id='save'
                                                title='Guardar información'
                                                type='saveButton'
                                                icon={<SaveIcon />} />

                                            <Button
                                                id='clear'
                                                title='Limpiar'
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