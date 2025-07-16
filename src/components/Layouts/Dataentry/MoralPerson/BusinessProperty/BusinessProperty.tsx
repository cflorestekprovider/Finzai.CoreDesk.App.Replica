import React from 'react';
import Input from '../../../../BasicComponents/Input/Input';
import Select from '../../../../BasicComponents/Select/Select';
import SelectModel from '../../../../../api/models/SelectModel/SelectModel';
// import DatePicker from '../../../BasicComponents/DatePicker/DatePicker';
// import CustomInputWithModal from '../../../BasicComponents/CustomInputWithModal/CustomInputWithModal';
import { ClearIcon, SaveIcon } from '../../../../../api/models/IconsModels/IconsModels';
import Button from '../../../../BasicComponents/Button/Button';

const BusinessProperty: React.FC = () => {

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
                        <h4>Propiedades</h4>
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
                                        id="propertyType"
                                        readonly={false}
                                        title='Tipo de propiedad'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={propertyType} />

                                    <Select
                                        id="status"
                                        readonly={false}
                                        title='Estatus'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={status} />

                                    <Input
                                        id="propertyValue"
                                        readonly={false}
                                        title='Valor de la propiedad'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id='description'
                                        readonly={false}
                                        required={true}
                                        title='Descripción / Comentarios'
                                        placeholder='Descripción / Comentarios'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-6' />

                                    <Input
                                        id='registerNumber'
                                        readonly={false}
                                        required={false}
                                        title='Número de registro'
                                        placeholder='Número de registro'
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

export default BusinessProperty;