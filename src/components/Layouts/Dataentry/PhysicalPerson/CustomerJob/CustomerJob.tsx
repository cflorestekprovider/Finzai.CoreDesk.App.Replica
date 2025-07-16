import React from 'react';
import Input from '../../../../BasicComponents/Input/Input';
import Select from '../../../../BasicComponents/Select/Select';
import SelectModel from '../../../../../api/models/SelectModel/SelectModel';
// import DatePicker from '../../../BasicComponents/DatePicker/DatePicker';
// import CustomInputWithModal from '../../../BasicComponents/CustomInputWithModal/CustomInputWithModal';
import { ClearIcon, PhoneIcon, SaveIcon } from '../../../../../api/models/IconsModels/IconsModels';
import Button from '../../../../BasicComponents/Button/Button';
import SearchMoralPerson from '../../../../BasicComponents/SearchMoralPerson/SearchMoralPerson';
import DatePicker from '../../../../BasicComponents/DatePicker/DatePicker';
import CustomInputWithModal from '../../../../BasicComponents/CustomInputWithModal/CustomInputWithModal';
import PostalCode from '../../../../BasicComponents/PostalCode/PostalCode';

const CustomerJob: React.FC = () => {

    const occupationOptions: SelectModel[] = [
        { value: "1", option: 'Empleado Privado' },
        { value: "2", option: 'Empleado Público' },
        { value: "3", option: 'Oficio' }
    ];

    const clientStatus: SelectModel[] = [
        { value: "1", option: 'Activo' },
        { value: "2", option: 'Inactivo' }
    ];

    return (
        <div className="row">
            <div className="col-12">
                <div className="ui-title-action-bar">
                    <div className="ui-title">
                        <h4>Empleos</h4>
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
                                        id="jobStatus"
                                        readonly={false}
                                        title='Estatus'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={clientStatus} />

                                    <Select
                                        id="jobType"
                                        readonly={false}
                                        title='Tipo de Empleo'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-6'
                                        options={occupationOptions} />

                                    <Select
                                        id="jobGenericActivity"
                                        readonly={false}
                                        title='Actividad Genérica'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={occupationOptions} />

                                    <Select
                                        id="jobSpecificActivity"
                                        readonly={false}
                                        title='Actividad Especifica'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={occupationOptions} />

                                    <SearchMoralPerson />

                                    <Input
                                        id='jobEmployeeNumber'
                                        readonly={false}
                                        required={true}
                                        title='Número de Empleado'
                                        placeholder='Número de Empleado'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id='jobEmployeeCode'
                                        readonly={false}
                                        required={true}
                                        title='Código Empleado'
                                        placeholder='Código Empleado'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />


                                    <Select
                                        id="jobPosition"
                                        readonly={false}
                                        title='Posición'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={occupationOptions} />

                                    <Input
                                        id='jobImmediateBoss'
                                        readonly={false}
                                        required={true}
                                        title='Jefe inmediato'
                                        placeholder='Jefe inmediato'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Select
                                        id="jobPositionBoss"
                                        readonly={false}
                                        title='Puesto de Jefe'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={occupationOptions} />

                                    <DatePicker
                                        id="startDate"
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        readonly={false}
                                        required={true}
                                        title='Fecha de entrada'
                                    />

                                    <Input
                                        id='jobEmployYear'
                                        readonly={true}
                                        required={true}
                                        title='Antigüedad (Años)'
                                        placeholder='Antigüedad (Años)'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id='jobEmployMonth'
                                        readonly={true}
                                        required={true}
                                        title='Antigüedad (Meses)'
                                        placeholder='Antigüedad (Meses)'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />


                                    <Select
                                        id="jobPaymentFrequency"
                                        readonly={false}
                                        title='Frecuencia de pago'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={[]}
                                    />
                                    <Select
                                        id="jobCurrency"
                                        readonly={false}
                                        title='Moneda'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={[]}
                                    />
                                    <Input
                                        id='jobIncome'
                                        readonly={false}
                                        required={true}
                                        title='Ingresos'
                                        placeholder='Ingresos'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id='jobVariableIncomes'
                                        readonly={false}
                                        required={true}
                                        title='Ingresos Variables'
                                        placeholder='Ingresos Variables'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id='jobTaxes'
                                        readonly={false}
                                        required={true}
                                        title='Impuestos y Deducciones'
                                        placeholder='Impuestos y Deducciones'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id='jobMonthlyIncome'
                                        readonly={false}
                                        required={true}
                                        title='Ingreso Mensual'
                                        placeholder='Ingreso Mensual'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

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

                                    <Select
                                        id="country"
                                        readonly={false}
                                        title='País de nacimiento'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={occupationOptions} />

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

export default CustomerJob;