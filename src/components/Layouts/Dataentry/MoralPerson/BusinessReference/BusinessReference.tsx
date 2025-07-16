import React from 'react';
import Input from '../../../../BasicComponents/Input/Input';
import Select from '../../../../BasicComponents/Select/Select';
import SelectModel from '../../../../../api/models/SelectModel/SelectModel';
// import DatePicker from '../../../BasicComponents/DatePicker/DatePicker';
// import CustomInputWithModal from '../../../BasicComponents/CustomInputWithModal/CustomInputWithModal';
import { ClearIcon, PhoneIcon, SaveIcon } from '../../../../../api/models/IconsModels/IconsModels';
import Button from '../../../../BasicComponents/Button/Button';
import DatePicker from '../../../../BasicComponents/DatePicker/DatePicker';
import SearchPhysicalPerson from '../../../../BasicComponents/SearchPhysicalPerson/SearchPhysicalPerson';
import CustomInputWithModal from '../../../../BasicComponents/CustomInputWithModal/CustomInputWithModal';
import PostalCode from '../../../../BasicComponents/PostalCode/PostalCode';

const BusinessReference: React.FC = () => {

    const status: SelectModel[] = [
        { value: "1", option: 'Activo' },
        { value: "2", option: 'Inactivo' }
    ];

    return (
        <div className="row">
            <div className="col-12">
                <div className="ui-title-action-bar">
                    <div className="ui-title">
                        <h4>Referencias Personales</h4>
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
                                        id="referenceType"
                                        title='Tipo de Referencia'
                                        required={true}
                                        readonly={false}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={status}
                                    />

                                    <div className='col-12 col-md-6 col-lg-4 col-xl-3'>
                                        <div className='row'>
                                            <Input
                                                id="sinceYear"
                                                title='Conocido Desde (años)'
                                                required={true}
                                                readonly={false}
                                                classInput='col-12 col-md-6 col-lg-6 col-xl-6 month-year-inputmask'
                                            />

                                            <Input
                                                id="sinceMonth"
                                                title='Conocido Desde (meses)'
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
                                        title='Fecha' />

                                    <SearchPhysicalPerson />

                                    <CustomInputWithModal
                                        id="referencePhone"
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        required={true}
                                        title='Teléfono'
                                        icon={<PhoneIcon />} />

                                    <Select
                                        id="country"
                                        readonly={false}
                                        title='País'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={status} />

                                    <PostalCode readonly={true} readonlyButton={true} />

                                    <Input
                                        id='addressStreet'
                                        readonly={true}
                                        required={false}
                                        title='Calle'
                                        placeholder='Calle'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id='addressExternalNumber'
                                        readonly={true}
                                        required={false}
                                        title='Número Exterior'
                                        placeholder='Número Exterior'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id='addressInternalNumber'
                                        readonly={true}
                                        required={false}
                                        title='Número Interior'
                                        placeholder='Número Interior'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id='addressCrossWith'
                                        readonly={true}
                                        required={false}
                                        title='Cruza con'
                                        placeholder='Cruza con'
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

export default BusinessReference;