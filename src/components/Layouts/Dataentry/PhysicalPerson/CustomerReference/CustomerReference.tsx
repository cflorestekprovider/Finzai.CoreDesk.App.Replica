import React from 'react';
import Input from '../../../../BasicComponents/Input/Input';
import Select from '../../../../BasicComponents/Select/Select';
import SelectModel from '../../../../../api/models/SelectModel/SelectModel';
// import DatePicker from '../../../BasicComponents/DatePicker/DatePicker';
// import CustomInputWithModal from '../../../BasicComponents/CustomInputWithModal/CustomInputWithModal';
import { ClearIcon, EmailIcon, IdentificationIcon, PhoneIcon, SaveIcon } from '../../../../../api/models/IconsModels/IconsModels';
import Button from '../../../../BasicComponents/Button/Button';
import SearchPhysicalPerson from '../../../../BasicComponents/SearchPhysicalPerson/SearchPhysicalPerson';
import CustomInputWithModal from '../../../../BasicComponents/CustomInputWithModal/CustomInputWithModal';
import PostalCode from '../../../../BasicComponents/PostalCode/PostalCode';

const CustomerReference: React.FC = () => {

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


                                    <Select
                                        id="relationType"
                                        title='Relación'
                                        required={true}
                                        readonly={false}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={status}
                                    />


                                    <SearchPhysicalPerson includeBirthDay={true} />

                                    <CustomInputWithModal
                                        id="email"
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        required={true}
                                        title='Correo electrónico'
                                        icon={<EmailIcon />} />



                                    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" value="Teléfono celular" id="elm_21" />
                                            <label htmlFor="elm_21">Tipo Teléfono</label>
                                        </div>
                                    </div>

                                    <CustomInputWithModal
                                        id="phone"
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        required={true}
                                        title='Teléfono'
                                        icon={<PhoneIcon />} />

                                    <Input
                                        id='extention'
                                        readonly={true}
                                        required={false}
                                        title='Extensión'
                                        placeholder='Extensión'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id='contactTime'
                                        readonly={true}
                                        required={false}
                                        title='Hora contacto'
                                        placeholder='Hora contacto'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />


                                    <CustomInputWithModal
                                        id="identification"
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        required={true}
                                        title='Identificación'
                                        icon={<IdentificationIcon />} />

                                    <Input
                                        id='identificationType'
                                        readonly={true}
                                        required={false}
                                        title='Tipo Identificación'
                                        placeholder='Tipo Identificación'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Select
                                        id="country"
                                        readonly={false}
                                        title='País de nacimiento'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={status} />

                                    <PostalCode />

                                    <Input
                                        id='addressStreet'
                                        readonly={false}
                                        required={false}
                                        title='Calle'
                                        placeholder='Calle'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id='addressExternalNumber'
                                        readonly={false}
                                        required={false}
                                        title='Número Exterior'
                                        placeholder='Número Exterior'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id='addressInternalNumber'
                                        readonly={false}
                                        required={false}
                                        title='Número Interior'
                                        placeholder='Número Interior'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id='addressCrossWith'
                                        readonly={false}
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

export default CustomerReference;