import React from 'react';
import Input from '../../../../BasicComponents/Input/Input';
import Select from '../../../../BasicComponents/Select/Select';
import SelectModel from '../../../../../api/models/SelectModel/SelectModel';
// import DatePicker from '../../../BasicComponents/DatePicker/DatePicker';
// import CustomInputWithModal from '../../../BasicComponents/CustomInputWithModal/CustomInputWithModal';
import { ClearIcon, SaveIcon } from '../../../../../api/models/IconsModels/IconsModels';
import Button from '../../../../BasicComponents/Button/Button';
import DatePicker from '../../../../BasicComponents/DatePicker/DatePicker';

const BusinessPartners: React.FC = () => {

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
                        <h4>Socios</h4>
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

                                    <Select
                                        id="stockHolderType"
                                        readonly={false}
                                        title='Tipo'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={propertyType} />

                                    <Input
                                        id='percentage'
                                        readonly={false}
                                        required={false}
                                        title='Porcentaje'
                                        placeholder='Porcentaje'
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

                                    <DatePicker
                                        id="stockHolderStartDate"
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        readonly={false}
                                        required={true}
                                        title='Fecha de Inicio' />

                                    <DatePicker
                                        id="stockHolderEndDate"
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        readonly={false}
                                        required={true}
                                        title='Fecha de Finalización' />


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

export default BusinessPartners;